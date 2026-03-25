#pragma once

#include <string>
#include <utility>

namespace onvif {

enum class OnvifError {
  Ok = 0,
  NotInitialized,
  InvalidArgument,
  NetworkUnreachable,
  Timeout,
  TlsError,
  SoapFault,
  HttpError,
  AuthenticationFailed,
  WsSecurityError,
  UnsupportedAuth,
  ProtocolError,
  ServiceNotSupported,
  MissingMediaService,
  NoMediaProfiles,
  InvalidProfileToken,
  StreamUriMissing,
  RtspOpenFailed,
  RtspReadFailed,
  OpenCvNotAvailable,
  InternalError
};

struct Result {
  bool success{false};
  OnvifError code{OnvifError::Ok};
  std::string message;

  static Result ok() { return Result{true, OnvifError::Ok, {}}; }

  static Result fail(OnvifError c, std::string msg) {
    return Result{false, c, std::move(msg)};
  }
};

const char *onvifErrorString(OnvifError code);

} // namespace onvif
