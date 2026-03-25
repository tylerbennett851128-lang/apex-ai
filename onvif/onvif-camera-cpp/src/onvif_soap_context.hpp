#pragma once

#include "result.hpp"

#include <string>

struct soap;

namespace onvif {

class SoapContext {
public:
  SoapContext();
  ~SoapContext();

  SoapContext(const SoapContext &) = delete;
  SoapContext &operator=(const SoapContext &) = delete;

  soap *get() const { return ctx_; }

  Result ensureHttps(const std::string &url);
  Result applyWsseUsernameDigest(const std::string &username,
                                 const std::string &password);

private:
  soap *ctx_{nullptr};
  bool https_ready_{false};
};

Result mapSoapFault(soap *ctx, const char *stage);

/** Shared by device/media services (same digest headers as Genivia ONVIF sample). */
Result applyWsseUsernameDigest(soap *ctx, const std::string &username,
                               const std::string &password);

} // namespace onvif
