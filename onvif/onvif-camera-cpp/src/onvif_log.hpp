#pragma once

#include <iostream>
#include <string>

namespace onvif {
namespace log {

inline void info(const std::string &msg) {
  std::clog << "[onvif] " << msg << '\n';
}

} // namespace log
} // namespace onvif
