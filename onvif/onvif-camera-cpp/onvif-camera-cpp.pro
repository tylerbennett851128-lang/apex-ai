# ONVIF camera client — Qt 5.14+ (Linux), qmake
#
# Prerequisites:
#   - Qt 5.14+ (widgets)
#   - OpenSSL development headers
#   - gSOAP source tree (same as CMake): export GSOAP_ROOT=/path/to/gsoap-2.8
#   - generated/ from scripts/generate_onvif_gsoap.sh
#
# Build:
#   export GSOAP_ROOT=/path/to/gsoap-2.8
#   qmake CONFIG+=release [CONFIG+=with_opencv] [CONFIG+=legacy_profiles]
#   make -j$(nproc)
#
# Optional OpenCV (RTSP preview):  qmake CONFIG+=with_opencv
# Optional profile array layout:   qmake CONFIG+=legacy_profiles

TEMPLATE = app
TARGET = onvif_camera_qt

QT += core gui widgets

CONFIG += c++17
CONFIG += warn_on

!versionAtLeast(QT_VERSION, 5.14.0) {
  error("This project requires Qt 5.14 or newer (found $$QT_VERSION).")
}

GSOAP_ROOT = $$(GSOAP_ROOT)
isEmpty(GSOAP_ROOT) {
  error("Set environment variable GSOAP_ROOT to your gsoap-2.8 source directory (contains gsoap/stdsoap2.cpp).")
}

!exists($$GSOAP_ROOT/gsoap/stdsoap2.cpp) {
  error("GSOAP_ROOT does not look valid (missing gsoap/stdsoap2.cpp).")
}

!exists($$PWD/generated/soapStub.h) {
  error("Missing generated bindings. Run scripts/generate_onvif_gsoap.sh")
}

DEFINES += WITH_OPENSSL WITH_DOM

# gSOAP + OpenSSL + zlib (optional compression)
unix {
  LIBS += -lssl -lcrypto -lpthread -lz
  QMAKE_CXXFLAGS += -pthread
}

INCLUDEPATH += $$PWD/include \
    $$PWD/generated \
    $$GSOAP_ROOT/gsoap \
    $$GSOAP_ROOT/gsoap/plugin

HEADERS += \
    include/onvif_client.hpp \
    include/onvif_device_service.hpp \
    include/onvif_media_service.hpp \
    include/camera_connection_info.hpp \
    include/result.hpp \
    include/rtsp_stream_player.hpp \
    include/mainwindow.h

SOURCES += \
    src/result.cpp \
    src/onvif_soap_context.cpp \
    src/onvif_device_service.cpp \
    src/onvif_media_service.cpp \
    src/onvif_client.cpp \
    src/mainwindow.cpp \
    src/main_qt.cpp \
    generated/soapC.cpp \
    generated/soapDeviceBindingProxy.cpp \
    generated/soapMediaBindingProxy.cpp \
    $$GSOAP_ROOT/gsoap/stdsoap2.cpp \
    $$GSOAP_ROOT/gsoap/dom.cpp \
    $$GSOAP_ROOT/gsoap/plugin/wsseapi.c \
    $$GSOAP_ROOT/gsoap/plugin/smdevp.c \
    $$GSOAP_ROOT/gsoap/plugin/mecevp.c \
    $$GSOAP_ROOT/gsoap/plugin/wsaapi.c

SOURCES += src/rtsp_stream_player.cpp

legacy_profiles {
  DEFINES += ONVIF_PROFILES_LEGACY_ARRAY
}

with_opencv {
  DEFINES += ONVIF_WITH_OPENCV
  # Adjust if your OpenCV headers/libs are elsewhere (e.g. /usr/local).
  INCLUDEPATH += /usr/include/opencv4 /usr/include/opencv2 /usr/include
  LIBS += -lopencv_core -lopencv_imgproc -lopencv_videoio
}

# Silence noisy third-party warnings from generated code
QMAKE_CXXFLAGS += -Wno-unused-parameter
