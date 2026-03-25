#include "onvif_soap_context.hpp"
#include "onvif_log.hpp"

#include "plugin/wsseapi.h"
#include "stdsoap2.h"

#include <cstring>
#include <sstream>

#if defined(WITH_OPENSSL)
#include <openssl/err.h>
#endif

namespace onvif {

SoapContext::SoapContext() {
  ctx_ = soap_new1(SOAP_XML_STRICT | SOAP_XML_CANONICAL | SOAP_C_UTFSTRING);
  if (!ctx_) {
    return;
  }
  ctx_->connect_timeout = 10;
  ctx_->send_timeout = 10;
  ctx_->recv_timeout = 10;
  if (soap_register_plugin(ctx_, soap_wsse)) {
    log::info("soap_register_plugin(soap_wsse) failed");
  }
}

SoapContext::~SoapContext() {
  if (!ctx_) {
    return;
  }
  soap_destroy(ctx_);
  soap_end(ctx_);
  soap_free(ctx_);
}

Result SoapContext::ensureHttps(const std::string &url) {
#if defined(WITH_OPENSSL)
  if (url.rfind("https://", 0) != 0) {
    return Result::ok();
  }
  if (https_ready_) {
    return Result::ok();
  }
  if (soap_ssl_client_context(ctx_, SOAP_SSL_SKIP_HOST_CHECK, nullptr, nullptr,
                              nullptr, nullptr, nullptr)) {
    return mapSoapFault(ctx_, "soap_ssl_client_context");
  }
  https_ready_ = true;
  return Result::ok();
#else
  if (url.rfind("https://", 0) == 0) {
    return Result::fail(OnvifError::TlsError,
                        "HTTPS device URL requires gSOAP built with OpenSSL "
                        "(WITH_OPENSSL).");
  }
  return Result::ok();
#endif
}

Result applyWsseUsernameDigest(soap *ctx, const std::string &username,
                               const std::string &password) {
  if (!ctx) {
    return Result::fail(OnvifError::InternalError, "SOAP context is null");
  }
  soap_wsse_delete_Security(ctx);
  if (soap_wsse_add_Timestamp(ctx, "Time", 10)) {
    char buf[2048];
    buf[0] = '\0';
    soap_sprint_fault(ctx, buf, sizeof(buf));
    return Result::fail(OnvifError::WsSecurityError,
                        std::string("soap_wsse_add_Timestamp failed: ") + buf);
  }
  if (soap_wsse_add_UsernameTokenDigest(ctx, "Auth", username.c_str(),
                                           password.c_str())) {
    OnvifError code = OnvifError::WsSecurityError;
    char buf[2048];
    buf[0] = '\0';
    soap_sprint_fault(ctx, buf, sizeof(buf));
    std::string detail = buf;
    if (detail.find("NotAuthorized") != std::string::npos ||
        detail.find("Unauthorized") != std::string::npos ||
        detail.find("FailedAuthentication") != std::string::npos) {
      code = OnvifError::AuthenticationFailed;
    }
    return Result::fail(code,
                        "soap_wsse_add_UsernameTokenDigest failed: " + detail);
  }
  return Result::ok();
}

Result SoapContext::applyWsseUsernameDigest(const std::string &username,
                                            const std::string &password) {
  return applyWsseUsernameDigest(ctx_, username, password);
}

Result mapSoapFault(soap *ctx, const char *stage) {
  if (!ctx) {
    return Result::fail(OnvifError::InternalError, "SOAP context is null");
  }
  std::ostringstream oss;
  if (stage) {
    oss << stage << ": ";
  }
  if (ctx->error == SOAP_EOF) {
    oss << "connection closed or EOF";
    return Result::fail(OnvifError::NetworkUnreachable, oss.str());
  }
  if (ctx->error == SOAP_TCP_ERROR) {
    oss << "TCP error";
    return Result::fail(OnvifError::NetworkUnreachable, oss.str());
  }
  if (ctx->error == SOAP_SSL_ERROR) {
    oss << "SSL/TLS error";
#if defined(WITH_OPENSSL)
    oss << " (" << ERR_error_string(ERR_get_error(), nullptr) << ")";
#endif
    return Result::fail(OnvifError::TlsError, oss.str());
  }
  if (ctx->error == SOAP_FAULT || ctx->error == SOAP_SVR_FAULT) {
    if (ctx->fault && ctx->fault->faultstring) {
      oss << ctx->fault->faultstring;
    } else {
      oss << "SOAP fault";
    }
    auto msg = oss.str();
    OnvifError code = OnvifError::SoapFault;
    if (msg.find("NotAuthorized") != std::string::npos ||
        msg.find("Unauthorized") != std::string::npos ||
        msg.find("FailedAuthentication") != std::string::npos) {
      code = OnvifError::AuthenticationFailed;
    }
    return Result::fail(code, msg);
  }
  if (ctx->error == 401 || (ctx->status == 401)) {
    oss << "HTTP 401 Unauthorized";
    return Result::fail(OnvifError::AuthenticationFailed, oss.str());
  }
  if (ctx->error == SOAP_NULL) {
    oss << "SOAP_NULL";
    return Result::fail(OnvifError::ProtocolError, oss.str());
  }
  {
    char buf[2048];
    buf[0] = '\0';
    soap_sprint_fault(ctx, buf, sizeof(buf));
    if (buf[0]) {
      oss << buf;
    } else {
      oss << "soap error " << ctx->error;
    }
  }
  if (ctx->status > 0) {
    oss << " HTTP " << ctx->status;
    return Result::fail(OnvifError::HttpError, oss.str());
  }
  return Result::fail(OnvifError::SoapFault, oss.str());
}

} // namespace onvif
