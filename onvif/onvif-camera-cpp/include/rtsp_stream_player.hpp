#pragma once

#include "result.hpp"

#include <chrono>
#include <string>

#ifdef ONVIF_WITH_OPENCV
#include <opencv2/core/mat.hpp>
#endif

namespace onvif {

class RtspStreamPlayer {
public:
  RtspStreamPlayer();
  ~RtspStreamPlayer();

  RtspStreamPlayer(const RtspStreamPlayer &) = delete;
  RtspStreamPlayer &operator=(const RtspStreamPlayer &) = delete;

  void setReconnectDelay(std::chrono::milliseconds delay);

  bool open(const std::string &rtsp_uri);
  void close();
  bool isOpen() const;

#ifdef ONVIF_WITH_OPENCV
  bool read(cv::Mat &frame);
#endif

  Result lastError() const { return last_; }

private:
  struct Impl;
  std::unique_ptr<Impl> impl_;
  Result last_{Result::ok()};
  std::chrono::milliseconds reconnect_delay_{std::chrono::milliseconds(2000)};
};

} // namespace onvif
