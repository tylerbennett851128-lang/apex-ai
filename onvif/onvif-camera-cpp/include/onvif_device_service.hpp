#pragma once

#include "result.hpp"

#include <string>

struct soap;

namespace onvif {

struct DeviceCapabilitiesOut {
  std::string media_xaddr;
  std::string ptz_xaddr;
  std::string imaging_xaddr;
  std::string events_xaddr;
};

class OnvifDeviceService {
public:
  explicit OnvifDeviceService(soap *ctx);

  Result getCapabilities(const std::string &device_service_url,
                         const std::string &username,
                         const std::string &password,
                         DeviceCapabilitiesOut &out);

private:
  soap *soap_{nullptr};
};

} // namespace onvif
