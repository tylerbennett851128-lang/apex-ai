cmake_minimum_required(VERSION 3.16)
project(onvif-camera-cpp LANGUAGES C CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

option(ONVIF_WITH_OPENCV "Build RTSP preview with OpenCV" ON)
option(ONVIF_PROFILES_LEGACY_ARRAY "Use __sizeProfiles layout (C-style gSOAP)" OFF)

set(ONVIF_GSOAP_ROOT "" CACHE PATH
    "Path to extracted gsoap-2.8 source tree (directory that contains gsoap/)")

if(NOT ONVIF_GSOAP_ROOT OR NOT EXISTS "${ONVIF_GSOAP_ROOT}/gsoap/stdsoap2.cpp")
  message(FATAL_ERROR
    "Set ONVIF_GSOAP_ROOT to your gSOAP source tree, e.g. "
    "-DONVIF_GSOAP_ROOT=$HOME/src/gsoap-2.8")
endif()

set(GEN_DIR "${CMAKE_CURRENT_SOURCE_DIR}/generated")
if(NOT EXISTS "${GEN_DIR}/soapStub.h")
  message(FATAL_ERROR
    "Missing gSOAP generated bindings in generated/. "
    "Run: scripts/generate_onvif_gsoap.sh")
endif()

find_package(OpenSSL REQUIRED)
find_package(Threads REQUIRED)
find_package(ZLIB)

set(GSOAP_SRC "${ONVIF_GSOAP_ROOT}/gsoap")
set(GSOAP_PLUGIN "${GSOAP_SRC}/plugin")

set(ONVIF_GEN_SOURCES
  "${GEN_DIR}/soapC.cpp"
  "${GEN_DIR}/soapDeviceBindingProxy.cpp"
  "${GEN_DIR}/soapMediaBindingProxy.cpp")

add_library(onvif_core STATIC
  src/result.cpp
  src/onvif_soap_context.cpp
  src/onvif_device_service.cpp
  src/onvif_media_service.cpp
  src/onvif_client.cpp
  ${ONVIF_GEN_SOURCES}
  "${GSOAP_SRC}/stdsoap2.cpp"
  "${GSOAP_SRC}/dom.cpp"
  "${GSOAP_PLUGIN}/wsseapi.c"
  "${GSOAP_PLUGIN}/smdevp.c"
  "${GSOAP_PLUGIN}/mecevp.c"
  "${GSOAP_PLUGIN}/wsaapi.c"
)

target_include_directories(onvif_core PUBLIC
  "${CMAKE_CURRENT_SOURCE_DIR}/include"
  "${GEN_DIR}"
  "${GSOAP_SRC}"
  "${GSOAP_PLUGIN}"
)

target_compile_definitions(onvif_core PUBLIC WITH_OPENSSL WITH_DOM)

if(ZLIB_FOUND)
  target_compile_definitions(onvif_core PUBLIC WITH_GZIP)
  target_link_libraries(onvif_core PUBLIC ZLIB::ZLIB)
endif()

if(ONVIF_PROFILES_LEGACY_ARRAY)
  target_compile_definitions(onvif_core PRIVATE ONVIF_PROFILES_LEGACY_ARRAY)
endif()

target_link_libraries(onvif_core PUBLIC
  OpenSSL::SSL
  OpenSSL::Crypto
  Threads::Threads
)

add_executable(onvif_demo
  src/main.cpp
  src/rtsp_stream_player.cpp
)

target_link_libraries(onvif_demo PRIVATE onvif_core)

if(ONVIF_WITH_OPENCV)
  find_package(OpenCV REQUIRED COMPONENTS core videoio)
  target_compile_definitions(onvif_demo PRIVATE ONVIF_WITH_OPENCV)
  target_link_libraries(onvif_demo PRIVATE opencv_core opencv_videoio)
endif()
