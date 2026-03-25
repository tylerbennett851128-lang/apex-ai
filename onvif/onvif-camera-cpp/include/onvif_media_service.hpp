#pragma once

#include "result.hpp"

#include <string>
#include <vector>

struct soap;

namespace onvif {

struct MediaProfileSummary {
  std::string token;
  std::string name;
};

class OnvifMediaService {
public:
  explicit OnvifMediaService(soap *ctx);

  Result getProfiles(const std::string &media_service_url,
                     const std::string &username,
                     const std::string &password,
                     std::vector<MediaProfileSummary> &out);

  Result getStreamUri(const std::string &media_service_url,
                      const std::string &username,
                      const std::string &password,
                      const std::string &profile_token,
                      std::string &rtsp_uri_out);

private:
  soap *soap_{nullptr};
};

} // namespace onvif
