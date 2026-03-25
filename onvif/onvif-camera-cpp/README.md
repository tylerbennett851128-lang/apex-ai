# ONVIF camera client (C++ / gSOAP)

Production-style ONVIF **device + media** client: WS-Security UsernameToken digest, `GetCapabilities`, `GetProfiles`, `GetStreamUri` (RTP unicast / RTSP), optional OpenCV RTSP read.

## Layout

- `include/` — public API (`OnvifClient`, services, `Result`, `RtspStreamPlayer`, …)
- `src/` — implementations (SOAP RAII in `onvif_soap_context.*`, ONVIF calls separate from OpenCV)
- `generated/` — output of `wsdl2h` + `soapcpp2` (not hand-edited)
- `third_party/gsoap/typemap.dat` — copy from the gSOAP tarball (ONVIF namespace prefixes)

## Generate bindings

1. Install tools, e.g. on Ubuntu: `sudo apt install gsoap` (pulls `wsdl2h`, `soapcpp2`, and runtime libs).
2. If `wsdl2h` fails with a missing `libgsoapssl++` error, set:
   `export LD_LIBRARY_PATH=/usr/lib/x86_64-linux-gnu` (adjust for your distro).
3. Download and unpack [gSOAP](https://sourceforge.net/projects/gsoap2/files/gsoap/) so you have `gsoap/import/` (needed for `soapcpp2 -I`).
4. Run:

```bash
export GSOAP_ROOT=/path/to/gsoap-2.8
./scripts/generate_onvif_gsoap.sh
```

## Build

### Qt 5.14+ (qmake, GUI on Linux)

```bash
export GSOAP_ROOT=/path/to/gsoap-2.8
cd onvif-camera-cpp
qmake CONFIG+=release CONFIG+=with_opencv onvif-camera-cpp.pro
make -j$(nproc)
./onvif_camera_qt
```

- Without OpenCV: omit `CONFIG+=with_opencv` (ONVIF works; preview is disabled).
- Legacy gSOAP profile layout: add `CONFIG+=legacy_profiles`.
- Point `GSOAP_ROOT` at the same gSOAP source tree used for `soapcpp2` (contains `gsoap/stdsoap2.cpp`).

### CMake (console `onvif_demo`)

```bash
cmake -S . -B build -DONVIF_GSOAP_ROOT=/path/to/gsoap-2.8 \
  -DONVIF_WITH_OPENCV=ON
cmake --build build -j
```

- **HTTPS** device URLs need OpenSSL-enabled gSOAP (`WITH_OPENSSL` is set by this project).
- If your `soapcpp2` output uses C-style profile arrays instead of `std::vector`, configure with `-DONVIF_PROFILES_LEGACY_ARRAY=ON` (qmake: `CONFIG+=legacy_profiles`).

## Run

**Qt GUI:** run `./onvif_camera_qt` after the qmake build; enter host or full device URL, user, and password, then **Connect**.

**Console:**

```bash
./build/onvif_demo 'http://192.168.1.100/onvif/device_service' user pass
# or pass host only (default path /onvif/device_service):
./build/onvif_demo 192.168.1.100 user pass --no-video
./build/onvif_demo 192.168.1.100 user pass --frames 10
```

`--no-video` skips OpenCV; without OpenCV at build time, RTSP preview is disabled.

## Extending (e.g. PTZ)

`OnvifDeviceService` already records PTZ and imaging XAddrs on the shared `CameraConnectionInfo::services`. Add a `OnvifPtzService` alongside the media service, reuse `SoapContext` + `applyWsseUsernameDigest`, and point a `PtzBindingProxy` at `services.ptz`.

## Licensing note

gSOAP-generated code and the gSOAP tools are GPL (commercial license available from Genivia). Plan your distribution accordingly.
