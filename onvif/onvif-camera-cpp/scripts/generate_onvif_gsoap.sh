#!/usr/bin/env bash
# Generate ONVIF device + media client bindings (gSOAP).
# Prerequisites: wsdl2h and soapcpp2 (e.g. apt install gsoap) and network access
# to fetch ONVIF WSDLs. On Ubuntu, wsdl2h needs libgsoapssl++ at runtime:
#   export LD_LIBRARY_PATH=/usr/lib/x86_64-linux-gnu
#
# Usage:
#   export GSOAP_ROOT=/path/to/gsoap-2.8   # source tree with gsoap/import/
#   ./scripts/generate_onvif_gsoap.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GEN="${ROOT}/generated"
TYPEMAP="${ROOT}/third_party/gsoap/typemap.dat"

if [[ ! -f "${TYPEMAP}" ]]; then
  echo "Missing ${TYPEMAP}" >&2
  exit 1
fi

GSOAP_ROOT="${GSOAP_ROOT:-}"
if [[ -z "${GSOAP_ROOT}" ]]; then
  echo "Set GSOAP_ROOT to the extracted gSOAP 2.8 source directory (contains gsoap/import)." >&2
  exit 1
fi

IMPORT="${GSOAP_ROOT}/gsoap/import"
if [[ ! -d "${IMPORT}" ]]; then
  echo "Not found: ${IMPORT} (is GSOAP_ROOT correct?)" >&2
  exit 1
fi

command -v wsdl2h >/dev/null || { echo "wsdl2h not in PATH" >&2; exit 1; }
command -v soapcpp2 >/dev/null || { echo "soapcpp2 not in PATH" >&2; exit 1; }

mkdir -p "${GEN}"
cp -f "${TYPEMAP}" "${GEN}/typemap.dat"
cd "${GEN}"

echo "Running wsdl2h..."
wsdl2h -O4 -P -x -o onvif.h \
  https://www.onvif.org/onvif/ver10/device/wsdl/devicemgmt.wsdl \
  https://www.onvif.org/onvif/ver10/media/wsdl/media.wsdl

echo "Running soapcpp2..."
soapcpp2 -2 -C -j -x -I "${IMPORT}" -I "${GSOAP_ROOT}/gsoap" onvif.h

echo "Done. Generated files are in ${GEN}"
