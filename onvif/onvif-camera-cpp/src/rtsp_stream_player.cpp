#include "rtsp_stream_player.hpp"

#include <memory>
#include <thread>

#ifdef ONVIF_WITH_OPENCV
#include <opencv2/videoio.hpp>
#endif

namespace onvif {

struct RtspStreamPlayer::Impl {
#ifdef ONVIF_WITH_OPENCV
  cv::VideoCapture cap;
#endif
  bool open{false};
  std::string uri;
};

RtspStreamPlayer::RtspStreamPlayer() : impl_(std::make_unique<Impl>()) {}

RtspStreamPlayer::~RtspStreamPlayer() { close(); }

void RtspStreamPlayer::setReconnectDelay(std::chrono::milliseconds delay) {
  reconnect_delay_ = delay;
}

bool RtspStreamPlayer::open(const std::string &rtsp_uri) {
  close();
#ifdef ONVIF_WITH_OPENCV
  impl_->uri = rtsp_uri;
  impl_->cap.open(rtsp_uri, cv::CAP_FFMPEG);
  if (!impl_->cap.isOpened()) {
    last_ = Result::fail(OnvifError::RtspOpenFailed,
                         "cv::VideoCapture could not open RTSP URI");
    return false;
  }
  impl_->open = true;
  last_ = Result::ok();
  return true;
#else
  (void)rtsp_uri;
  last_ = Result::fail(OnvifError::OpenCvNotAvailable,
                       "Built without ONVIF_WITH_OPENCV; RTSP playback disabled");
  return false;
#endif
}

void RtspStreamPlayer::close() {
#ifdef ONVIF_WITH_OPENCV
  if (impl_->cap.isOpened()) {
    impl_->cap.release();
  }
  impl_->uri.clear();
#endif
  impl_->open = false;
  last_ = Result::ok();
}

bool RtspStreamPlayer::isOpen() const {
#ifdef ONVIF_WITH_OPENCV
  return impl_->open && impl_->cap.isOpened();
#else
  return false;
#endif
}

#ifdef ONVIF_WITH_OPENCV
bool RtspStreamPlayer::read(cv::Mat &frame) {
  if (!isOpen()) {
    last_ = Result::fail(OnvifError::RtspReadFailed, "Player not open");
    return false;
  }
  if (!impl_->cap.read(frame) || frame.empty()) {
    impl_->cap.release();
    impl_->open = false;
    std::this_thread::sleep_for(reconnect_delay_);
    if (!impl_->uri.empty()) {
      impl_->cap.open(impl_->uri, cv::CAP_FFMPEG);
      if (impl_->cap.isOpened()) {
        impl_->open = true;
        last_ = Result::fail(OnvifError::RtspReadFailed,
                             "Stream hiccup; reconnected, retry read");
        return false;
      }
    }
    last_ = Result::fail(OnvifError::RtspReadFailed,
                         "Empty or failed frame; reconnect failed");
    return false;
  }
  last_ = Result::ok();
  return true;
}
#endif

} // namespace onvif
