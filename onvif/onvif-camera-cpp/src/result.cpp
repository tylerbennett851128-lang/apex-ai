#include "result.hpp"

namespace onvif {

const char *onvifErrorString(OnvifError code) {
  switch (code) {
  case OnvifError::Ok:
    return "Ok";
  case OnvifError::NotInitialized:
    return "NotInitialized";
  case OnvifError::InvalidArgument:
    return "InvalidArgument";
  case OnvifError::NetworkUnreachable:
    return "NetworkUnreachable";
  case OnvifError::Timeout:
    return "Timeout";
  case OnvifError::TlsError:
    return "TlsError";
  case OnvifError::SoapFault:
    return "SoapFault";
  case OnvifError::HttpError:
    return "HttpError";
  case OnvifError::AuthenticationFailed:
    return "AuthenticationFailed";
  case OnvifError::WsSecurityError:
    return "WsSecurityError";
  case OnvifError::UnsupportedAuth:
    return "UnsupportedAuth";
  case OnvifError::ProtocolError:
    return "ProtocolError";
  case OnvifError::ServiceNotSupported:
    return "ServiceNotSupported";
  case OnvifError::MissingMediaService:
    return "MissingMediaService";
  case OnvifError::NoMediaProfiles:
    return "NoMediaProfiles";
  case OnvifError::InvalidProfileToken:
    return "InvalidProfileToken";
  case OnvifError::StreamUriMissing:
    return "StreamUriMissing";
  case OnvifError::RtspOpenFailed:
    return "RtspOpenFailed";
  case OnvifError::RtspReadFailed:
    return "RtspReadFailed";
  case OnvifError::OpenCvNotAvailable:
    return "OpenCvNotAvailable";
  case OnvifError::InternalError:
    return "InternalError";
  }
  return "Unknown";
}

} // namespace onvif
