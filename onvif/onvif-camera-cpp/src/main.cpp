#include "onvif_client.hpp"
#include "result.hpp"
#include "rtsp_stream_player.hpp"

#ifdef ONVIF_WITH_OPENCV
#include <opencv2/core/mat.hpp>
#endif

#include <cstdlib>
#include <iostream>
#include <string>

namespace {

void usage(const char *argv0) {
  std::cerr
      << "Usage:\n  " << argv0
      << " <device_service_url> <user> <pass> [--no-video] [--frames N]\n\n"
      << "Example:\n  " << argv0
      << " http://192.168.1.100/onvif/device_service admin secret\n";
}

std::string build_device_url_from_ip(const char *ip) {
  std::string s = ip;
  if (s.find("://") != std::string::npos) {
    return s;
  }
  return "http://" + s + "/onvif/device_service";
}

} // namespace

int main(int argc, char **argv) {
  if (argc < 4) {
    usage(argv[0]);
    return EXIT_FAILURE;
  }

  std::string device_url = build_device_url_from_ip(argv[1]);
  std::string user = argv[2];
  std::string pass = argv[3];

  bool no_video = false;
  int max_frames = 30;
  for (int i = 4; i < argc; ++i) {
    std::string a = argv[i];
    if (a == "--no-video") {
      no_video = true;
    } else if (a == "--frames" && i + 1 < argc) {
      max_frames = std::atoi(argv[++i]);
    }
  }

  onvif::OnvifClient client;
  if (!client.initialize()) {
    std::cerr << "initialize failed: " << client.lastResult().message << "\n";
    return EXIT_FAILURE;
  }
  client.setCredentials(user, pass);
  if (!client.connectDevice(device_url)) {
    const auto &r = client.lastResult();
    std::cerr << "connectDevice failed [" << onvif::onvifErrorString(r.code)
              << "]: " << r.message << "\n";
    return EXIT_FAILURE;
  }

  const auto &info = client.connectionInfo();
  std::cout << "Connected.\n"
            << "  Media service: " << info.services.media << "\n"
            << "  Profile token: " << info.selected_profile_token << "\n"
            << "  Stream URI:    " << info.stream_uri << "\n";
  if (!info.services.ptz.empty()) {
    std::cout << "  PTZ service:   " << info.services.ptz << "\n";
  }
  if (!info.services.imaging.empty()) {
    std::cout << "  Imaging:       " << info.services.imaging << "\n";
  }

#ifdef ONVIF_WITH_OPENCV
  if (!no_video && !info.stream_uri.empty()) {
    onvif::RtspStreamPlayer player;
    if (!player.open(info.stream_uri)) {
      std::cerr << "RTSP open: " << player.lastError().message << "\n";
      return EXIT_FAILURE;
    }
    cv::Mat frame;
    int n = 0;
    while (n < max_frames && player.read(frame)) {
      ++n;
    }
    if (n == 0) {
      std::cerr << "No frames read: " << player.lastError().message << "\n";
      return EXIT_FAILURE;
    }
    std::cout << "Read " << n << " frame(s) from RTSP (OpenCV).\n";
  }
#else
  (void)no_video;
  (void)max_frames;
  std::cout << "OpenCV disabled at build time; skipping RTSP preview.\n";
#endif

  return EXIT_SUCCESS;
}
