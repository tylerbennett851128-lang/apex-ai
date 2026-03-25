#include "onvif_media_service.hpp"
#include "onvif_log.hpp"
#include "onvif_soap_context.hpp"

#include "soapMediaBindingProxy.h"

namespace onvif {

namespace {

std::string field_to_string(const std::string &s) { return s; }

std::string field_to_string(const char *s) {
  return s ? std::string(s) : std::string{};
}

void soap_cleanup_roundtrip(soap *s) {
  if (!s) {
    return;
  }
  soap_destroy(s);
  soap_end(s);
}

std::string token_from_profile(const tt__Profile *p) {
  if (!p) {
    return {};
  }
  return field_to_string(p->token);
}

std::string name_from_profile(const tt__Profile *p) {
  if (!p) {
    return {};
  }
  return field_to_string(p->Name);
}

} // namespace

OnvifMediaService::OnvifMediaService(soap *ctx) : soap_(ctx) {}

Result OnvifMediaService::getProfiles(const std::string &media_service_url,
                                        const std::string &username,
                                        const std::string &password,
                                        std::vector<MediaProfileSummary> &out) {
  out.clear();
  if (!soap_) {
    return Result::fail(OnvifError::NotInitialized, "SOAP context is null");
  }
  if (media_service_url.empty()) {
    return Result::fail(OnvifError::InvalidArgument,
                        "media_service_url is empty");
  }

  log::info("Media::GetProfiles -> " + media_service_url);

  Result w = applyWsseUsernameDigest(soap_, username, password);
  if (!w.success) {
    return w;
  }

  MediaBindingProxy proxy(soap_);
  proxy.soap_endpoint = media_service_url.c_str();

  _trt__GetProfiles req{};
  _trt__GetProfilesResponse resp{};

  int rc = proxy.GetProfiles(&req, resp);
  if (rc != SOAP_OK) {
    Result r = mapSoapFault(soap_, "GetProfiles");
    soap_cleanup_roundtrip(soap_);
    return r;
  }

#if defined(ONVIF_PROFILES_LEGACY_ARRAY)
  const int n = resp.__sizeProfiles;
  tt__Profile **plist = resp.Profiles;
  for (int i = 0; i < n; ++i) {
    tt__Profile *p = plist ? plist[i] : nullptr;
    if (!p) {
      continue;
    }
    std::string tok = token_from_profile(p);
    if (tok.empty()) {
      continue;
    }
    out.push_back(MediaProfileSummary{tok, name_from_profile(p)});
  }
#else
  for (tt__Profile *p : resp.Profiles) {
    if (!p) {
      continue;
    }
    std::string tok = token_from_profile(p);
    if (tok.empty()) {
      continue;
    }
    out.push_back(MediaProfileSummary{tok, name_from_profile(p)});
  }
#endif

  if (out.empty()) {
    soap_cleanup_roundtrip(soap_);
    return Result::fail(OnvifError::NoMediaProfiles,
                        "GetProfiles returned no usable profiles");
  }

  log::info("Media::GetProfiles OK; count=" + std::to_string(out.size()));
  soap_cleanup_roundtrip(soap_);
  return Result::ok();
}

Result OnvifMediaService::getStreamUri(const std::string &media_service_url,
                                       const std::string &username,
                                       const std::string &password,
                                       const std::string &profile_token,
                                       std::string &rtsp_uri_out) {
  rtsp_uri_out.clear();
  if (!soap_) {
    return Result::fail(OnvifError::NotInitialized, "SOAP context is null");
  }
  if (media_service_url.empty() || profile_token.empty()) {
    return Result::fail(OnvifError::InvalidArgument,
                        "media_service_url or profile_token is empty");
  }

  log::info("Media::GetStreamUri profile=" + profile_token);

  Result w = applyWsseUsernameDigest(soap_, username, password);
  if (!w.success) {
    return w;
  }

  MediaBindingProxy proxy(soap_);
  proxy.soap_endpoint = media_service_url.c_str();

  _trt__GetStreamUri req{};
  _trt__GetStreamUriResponse resp{};

  req.ProfileToken = profile_token;

  tt__StreamSetup *ss = soap_new_tt__StreamSetup(soap_, -1);
  if (!ss) {
    return Result::fail(OnvifError::InternalError,
                        "soap_new_tt__StreamSetup failed");
  }
  ss->Stream = tt__StreamType__RTP_Unicast;
  ss->Transport = soap_new_tt__Transport(soap_, -1);
  if (!ss->Transport) {
    soap_cleanup_roundtrip(soap_);
    return Result::fail(OnvifError::InternalError,
                        "soap_new_tt__Transport failed");
  }
  ss->Transport->Protocol = tt__TransportProtocol__RTSP;
  ss->Transport->Tunnel = nullptr;
  req.StreamSetup = ss;

  int rc = proxy.GetStreamUri(&req, resp);
  if (rc != SOAP_OK) {
    Result r = mapSoapFault(soap_, "GetStreamUri");
    soap_cleanup_roundtrip(soap_);
    return r;
  }

  if (!resp.MediaUri) {
    soap_cleanup_roundtrip(soap_);
    return Result::fail(OnvifError::StreamUriMissing,
                        "GetStreamUri: MediaUri missing");
  }

  rtsp_uri_out = field_to_string(resp.MediaUri->Uri);
  if (rtsp_uri_out.empty()) {
    soap_cleanup_roundtrip(soap_);
    return Result::fail(OnvifError::StreamUriMissing,
                        "GetStreamUri: MediaUri/Uri empty");
  }

  log::info("Media::GetStreamUri OK");
  soap_cleanup_roundtrip(soap_);
  return Result::ok();
}

} // namespace onvif
