#pragma once

#include "result.hpp"

#include <string>

namespace onvif {

struct ServiceEndpoints {
  std::string media;
  std::string ptz;
  std::string imaging;
  std::string events;
};

struct CameraConnectionInfo {
  bool connected{false};
  std::string host_or_ip;
  std::string device_service_url;
  std::string username;
  std::string password;
  ServiceEndpoints services;
  std::string selected_profile_token;
  std::string stream_uri;
  Result last_result{Result::ok()};
};

} // namespace onvif
