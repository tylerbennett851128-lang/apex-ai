#pragma once

#include "camera_connection_info.hpp"

#include <memory>
#include <string>

namespace onvif {

class OnvifClient {
public:
  OnvifClient();
  ~OnvifClient();

  OnvifClient(const OnvifClient &) = delete;
  OnvifClient &operator=(const OnvifClient &) = delete;
  OnvifClient(OnvifClient &&) noexcept;
  OnvifClient &operator=(OnvifClient &&) noexcept;

  bool initialize();
  bool setCredentials(const std::string &username, const std::string &password);
  bool connectDevice(const std::string &device_service_url);

  std::string getMediaServiceUrl() const;
  std::string getSelectedProfileToken() const;
  std::string getStreamUri() const;

  const CameraConnectionInfo &connectionInfo() const { return info_; }
  Result lastResult() const { return info_.last_result; }

  void reset();

private:
  struct Impl;
  std::unique_ptr<Impl> impl_;
  CameraConnectionInfo info_;
};

} // namespace onvif
