#include "onvif_client.hpp"
#include "onvif_device_service.hpp"
#include "onvif_media_service.hpp"
#include "onvif_log.hpp"
#include "onvif_soap_context.hpp"

#include <memory>
#include <sstream>

namespace onvif {

namespace {

std::string host_from_device_url(const std::string &url) {
  std::size_t start = url.find("://");
  if (start == std::string::npos) {
    return {};
  }
  start += 3;
  std::size_t end = url.find('/', start);
  std::size_t host_end =
      (end == std::string::npos) ? url.size() : end;
  std::string hostport = url.substr(start, host_end - start);
  std::size_t at = hostport.rfind('@');
  if (at != std::string::npos) {
    hostport = hostport.substr(at + 1);
  }
  return hostport;
}

} // namespace

struct OnvifClient::Impl {
  SoapContext soap;
  bool initialized{false};
  std::string user;
  std::string pass;
};

OnvifClient::OnvifClient() : impl_(std::make_unique<Impl>()) {}

OnvifClient::~OnvifClient() = default;

OnvifClient::OnvifClient(OnvifClient &&) noexcept = default;

OnvifClient &OnvifClient::operator=(OnvifClient &&) noexcept = default;

bool OnvifClient::initialize() {
  if (!impl_->soap.get()) {
    info_.last_result =
        Result::fail(OnvifError::InternalError, "SOAP runtime not created");
    impl_->initialized = false;
    return false;
  }
  impl_->initialized = true;
  info_.last_result = Result::ok();
  log::info("OnvifClient::initialize OK");
  return true;
}

bool OnvifClient::setCredentials(const std::string &username,
                                 const std::string &password) {
  impl_->user = username;
  impl_->pass = password;
  info_.username = username;
  info_.password = password;
  info_.last_result = Result::ok();
  log::info("OnvifClient::setCredentials");
  return true;
}

bool OnvifClient::connectDevice(const std::string &device_service_url) {
  info_.device_service_url = device_service_url;
  info_.host_or_ip = host_from_device_url(device_service_url);
  info_.connected = false;
  info_.services = {};
  info_.selected_profile_token.clear();
  info_.stream_uri.clear();

  if (!impl_->initialized || !impl_->soap.get()) {
    info_.last_result = Result::fail(OnvifError::NotInitialized,
                                     "Call initialize() first");
    return false;
  }
  if (device_service_url.empty()) {
    info_.last_result = Result::fail(OnvifError::InvalidArgument,
                                     "device_service_url is empty");
    return false;
  }

  Result tls = impl_->soap.ensureHttps(device_service_url);
  if (!tls.success) {
    info_.last_result = tls;
    return false;
  }

  OnvifDeviceService device(impl_->soap.get());
  DeviceCapabilitiesOut caps{};
  Result r = device.getCapabilities(device_service_url, impl_->user, impl_->pass,
                                    caps);
  if (!r.success) {
    info_.last_result = r;
    return false;
  }

  info_.services.media = caps.media_xaddr;
  info_.services.ptz = caps.ptz_xaddr;
  info_.services.imaging = caps.imaging_xaddr;
  info_.services.events = caps.events_xaddr;

  OnvifMediaService media(impl_->soap.get());
  std::vector<MediaProfileSummary> profiles;
  r = media.getProfiles(caps.media_xaddr, impl_->user, impl_->pass, profiles);
  if (!r.success) {
    info_.last_result = r;
    return false;
  }

  const std::string &token = profiles.front().token;
  info_.selected_profile_token = token;

  std::string stream;
  r = media.getStreamUri(caps.media_xaddr, impl_->user, impl_->pass, token,
                         stream);
  if (!r.success) {
    info_.last_result = r;
    return false;
  }

  info_.stream_uri = stream;
  info_.connected = true;
  info_.last_result = Result::ok();
  log::info("OnvifClient::connectDevice complete; RTSP URI obtained");
  return true;
}

std::string OnvifClient::getMediaServiceUrl() const {
  return info_.services.media;
}

std::string OnvifClient::getSelectedProfileToken() const {
  return info_.selected_profile_token;
}

std::string OnvifClient::getStreamUri() const { return info_.stream_uri; }

void OnvifClient::reset() {
  info_ = CameraConnectionInfo{};
  log::info("OnvifClient::reset");
}

} // namespace onvif
