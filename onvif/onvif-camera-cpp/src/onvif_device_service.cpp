#include "onvif_device_service.hpp"
#include "onvif_log.hpp"
#include "onvif_soap_context.hpp"

#include "soapDeviceBindingProxy.h"

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

} // namespace

OnvifDeviceService::OnvifDeviceService(soap *ctx) : soap_(ctx) {}

Result OnvifDeviceService::getCapabilities(const std::string &device_service_url,
                                           const std::string &username,
                                           const std::string &password,
                                           DeviceCapabilitiesOut &out) {
  if (!soap_) {
    return Result::fail(OnvifError::NotInitialized, "SOAP context is null");
  }
  if (device_service_url.empty()) {
    return Result::fail(OnvifError::InvalidArgument,
                        "device_service_url is empty");
  }

  log::info("Device::GetCapabilities -> " + device_service_url);

  Result w = applyWsseUsernameDigest(soap_, username, password);
  if (!w.success) {
    return w;
  }

  DeviceBindingProxy proxy(soap_);
  proxy.soap_endpoint = device_service_url.c_str();

  _tds__GetCapabilities req{};
  _tds__GetCapabilitiesResponse resp{};

  int rc = proxy.GetCapabilities(&req, resp);
  if (rc != SOAP_OK) {
    Result r = mapSoapFault(soap_, "GetCapabilities");
    soap_cleanup_roundtrip(soap_);
    return r;
  }

  if (!resp.Capabilities) {
    soap_cleanup_roundtrip(soap_);
    return Result::fail(OnvifError::ProtocolError,
                        "GetCapabilities: Capabilities element missing");
  }

  tt__Capabilities *cap = resp.Capabilities;
  if (cap->Media) {
    out.media_xaddr = field_to_string(cap->Media->XAddr);
  }
  if (cap->PTZ) {
    out.ptz_xaddr = field_to_string(cap->PTZ->XAddr);
  }
  if (cap->Imaging) {
    out.imaging_xaddr = field_to_string(cap->Imaging->XAddr);
  }
  if (cap->Events) {
    out.events_xaddr = field_to_string(cap->Events->XAddr);
  }

  if (out.media_xaddr.empty()) {
    soap_cleanup_roundtrip(soap_);
    return Result::fail(OnvifError::MissingMediaService,
                        "GetCapabilities: Media/XAddr not present");
  }

  log::info("Device::GetCapabilities OK; Media XAddr = " + out.media_xaddr);
  soap_cleanup_roundtrip(soap_);
  return Result::ok();
}

} // namespace onvif
