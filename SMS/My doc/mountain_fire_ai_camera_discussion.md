# Mountain Fire-Detection AI Camera Design Discussion

## 1. Project Goal

The goal is to design a **fire-detection AI camera** that can be mounted in a mountain area and used for wildfire/fire monitoring.

Initial target:

- Mountain deployment
- Long-distance monitoring
- Budget-sensitive prototype
- AI-based fire/smoke detection
- Communication through mobile 4G network

---

## 2. First Design Direction

The first recommended architecture was a high-end mountain fire-detection camera using:

- RGB camera
- Thermal camera
- Edge AI processor
- Outdoor housing
- Solar power
- Remote alerting system

The original high-end recommendation included:

| Component | Example |
|---|---|
| RGB camera | Long-range visible camera |
| Thermal camera | FLIR Boson / similar thermal module |
| AI processor | NVIDIA Jetson Orin Nano / Orin NX |
| Housing | IP66/IP67 outdoor enclosure |
| Network | 4G/5G, LoRa, or satellite |
| Power | Solar panel + LiFePO4 battery |

However, this high-end design was too expensive for the available budget.

---

## 3. Long-Distance Monitoring Requirement

The selected camera should support approximately:

> **2 km to 4 km monitoring distance**

For this range, a normal wide-angle camera is not enough. The camera needs:

- Long optical zoom
- Good image resolution
- Clear line-of-sight
- High mounting position
- AI model trained for smoke/fire detection

The first ideal recommendation for 2–4 km was a **long-range bi-spectrum PTZ camera**, meaning:

- Thermal sensor
- RGB visible zoom camera
- PTZ mechanism
- Edge AI

But this type of camera is expensive, especially when a long-range thermal lens is included.

---

## 4. High-End Thermal-Based Option

A realistic long-range thermal fire-detection system may use:

- FLIR Boson / Boson+ 640 thermal module
- 55 mm or longer thermal lens
- RGB zoom camera
- Jetson Orin Nano / Orin NX
- Outdoor PTZ enclosure

Example high-end prototype:

| Component | Estimated Cost |
|---|---:|
| FLIR Boson+ 640 thermal module with long lens | $4,000 – $6,000+ |
| RGB zoom camera | $800 – $1,500 |
| Jetson AI board | $250 – $600 |
| PTZ mount / outdoor housing | $500 – $1,000 |
| Solar + battery | $500 – $1,000 |
| Network + cables + accessories | $200 – $500 |

Estimated total:

> **$6,500 – $10,000+ per camera**

This was considered too expensive for the current prototype budget.

---

## 5. Budget Constraint

Available budget:

> **$1,000 – $2,000**

Because of this budget, the design was changed from a thermal-based system to a practical first prototype using:

> **RGB long-zoom smoke detection first, thermal upgrade later**

This avoids the expensive thermal module and still allows useful mountain smoke/fire detection testing.

---

## 6. Selected Design: Version A

The selected design is **Version A**, a low-cost prototype based on:

- 4K 30× optical zoom PTZ IP camera
- NVIDIA Jetson Orin Nano / Orin Nano Super
- 4G LTE router with data SIM
- Outdoor housing
- Local AI smoke/fire detection
- Alert-only communication

### Version A Architecture

```text
4K PTZ IP Camera
        ↓ RTSP video stream
Jetson Orin Nano AI Board
        ↓ AI fire/smoke detection
4G LTE Router with Data SIM
        ↓
Internet / Cloud / Telegram / SMS Alert
```

The key idea is:

> The camera sends video locally to the Jetson, and the Jetson sends only alerts through 4G.

The system should **not stream 24/7 video through 4G**, because that would use too much data.

---

## 7. Version A Hardware Bill of Materials

### Main Components

| Component | Recommendation | Estimated Cost |
|---|---|---:|
| Camera | 4K outdoor PTZ IP camera, 30× optical zoom, RTSP support | $220 – $450 |
| AI board | NVIDIA Jetson Orin Nano / Orin Nano Super | $250 – $500 |
| Network | 4G LTE router with SIM slot | $100 – $350 |
| Antenna | Outdoor high-gain LTE antenna | $20 – $150 |
| Storage | 128GB–256GB microSD or SSD | $20 – $60 |
| Housing | Waterproof box for Jetson/router | $50 – $150 |
| Mounting | Pole, bracket, cables | $50 – $150 |
| Power | 12V/5V adapters, DC converters | $40 – $100 |
| Optional backup | Small UPS/battery | $100 – $300 |

---

## 8. Version A Cost Estimation

### Minimum Prototype

Suitable for testing AI and camera connection.

| Item | Cost Range |
|---|---:|
| Camera | $220 – $450 |
| Jetson board | $250 – $500 |
| 4G router | $100 – $200 |
| Basic antenna | $20 – $80 |
| Housing, power, cables | $200 – $300 |

Estimated total:

> **$900 – $1,200**

### Better Field-Test Version

More suitable for actual outdoor/mountain testing.

| Item | Cost Range |
|---|---:|
| Camera | $300 – $450 |
| Jetson board | $250 – $500 |
| 4G router | $150 – $350 |
| Better outdoor antenna | $80 – $150 |
| Better housing and mount | $200 – $350 |
| Backup battery / power accessories | $100 – $300 |

Estimated total:

> **$1,300 – $1,700**

### With Solar Power

Adding solar power increases cost.

Estimated total:

> **$1,700 – $2,300**

Because the budget is $1,000–$2,000, the recommendation is:

> Start with adapter power first, then add solar later after the prototype works.

---

## 9. Communication Design: 4G Mobile Network

The user decided to use only a mobile cellular **4G network**.

### Important Point

A data SIM is needed, but it should usually be placed in the **4G/LTE router**, not directly inside the camera.

Recommended network layout:

```text
[PTZ IP Camera]
      │ Ethernet
      ▼
[4G/LTE Router with Data SIM] ─── Internet / Cloud / Telegram / SMS
      ▲
      │ Ethernet or Wi-Fi
[Jetson Orin Nano]
```

The SIM goes inside:

> **4G LTE router with SIM slot**

not inside the normal PTZ camera.

### Why the SIM should go in the router

- One SIM can serve both the camera and Jetson
- Easier to replace SIM
- Better antenna options
- More stable communication
- Better for VPN or remote management
- The Jetson needs internet access too

---

## 10. 4G Data Usage

The system should avoid continuous video upload.

Recommended behavior:

```text
Normal state:
Camera → Jetson only, local network

When smoke/fire is detected:
Jetson → sends alert through 4G router
```

The alert can include:

- Camera ID
- Timestamp
- Detection confidence
- Snapshot image
- 5–10 second video clip
- Optional GPS/location information

Estimated monthly cost:

| Item | Estimated Monthly Cost |
|---|---:|
| 4G data SIM | $10 – $50/month |
| Cloud server, optional | $0 – $10/month |
| Telegram alert | Free |
| SMS alert | Depends on provider |

If only alert images and short clips are sent, expected usage may be around:

> **1–5 GB/month**

If remote live video is used often, the data cost can become much higher.

---

## 11. Expected Monitoring Distance with 4K 30× PTZ Camera

A 4K 30× PTZ camera is a visible-light RGB camera. It does not measure heat.

Realistic monitoring expectations:

| Scenario | Practical Detection Range |
|---|---:|
| Large smoke plume, clear weather | 2 – 6 km |
| Medium smoke, normal conditions | 1 – 3 km |
| Hazy/humid mountain condition | 1 – 2 km |
| Large visible flame | 0.5 – 2 km |
| Small early ignition | 300 – 800 m |

Practical rule:

> A 4K 30× PTZ camera is useful for **1–3 km reliable smoke/fire detection**, and may detect large smoke plumes up to around **5 km** in ideal conditions.

Important limitations:

- Air haze
- Fog
- Humidity
- Dust
- Sun glare
- Mountain terrain blockage
- Heat distortion
- Sensor quality
- Mounting height
- Line-of-sight

---

## 12. RGB Camera vs Thermal Sensor

The selected 4K 30× PTZ IP camera does **not** include a thermal sensor.

It includes:

- 4K CMOS visible-light sensor
- 30× optical zoom lens
- Pan/tilt/zoom mechanism
- RTSP stream
- Sometimes IR night vision LEDs

It does not include:

- Thermal imaging
- Temperature measurement
- Heat detection
- FLIR-style infrared thermography

### Detection Method of Version A

Version A detects fire/smoke visually using AI:

- Smoke plume shape
- Smoke movement
- Flame color
- Flame flickering
- Abnormal brightness
- Haze patterns

So Version A is:

> **Vision-based smoke/fire detection**

not:

> **Heat-based thermal fire detection**

---

## 13. Thermal Upgrade Cost

If a thermal sensor is added, cost depends heavily on thermal resolution and lens.

### Option A: Low-Cost Thermal

Example: FLIR Lepton or similar.

| Feature | Value |
|---|---|
| Resolution | 160×120 or 320×240 |
| Useful range | Short distance only |
| Cost | $200 – $600 |

This option is not suitable for reliable 2–4 km mountain fire detection.

It can only act as a short-range hotspot indicator.

### Option B: Mid-Range Thermal

Example: FLIR Boson 320 / Boson 640 without long lens.

| Feature | Value |
|---|---|
| Resolution | 320×256 or 640×512 |
| Cost | $1,800 – $3,500 |
| Limitation | Long range still limited without long lens |

This can be useful for a prototype but is still not ideal for 2–4 km detection.

### Option C: Long-Range Thermal

Example:

- FLIR Boson 640
- Long thermal lens, 25 mm to 75 mm or more
- Industrial PTZ thermal module

| Feature | Value |
|---|---|
| Resolution | 640×512 |
| Lens | Long focal thermal lens |
| Cost | $4,000 – $7,000+ |

This is the realistic thermal option for 2–4 km detection.

---

## 14. Total Cost with Thermal Added

### Current RGB-only Version A

Estimated total:

> **$1,100 – $1,700**

### Version A + Cheap Thermal

| Component | Cost |
|---|---:|
| RGB PTZ camera | $300 – $500 |
| Jetson Orin Nano | $250 – $500 |
| 4G router + SIM setup | $150 – $350 |
| Low-end thermal module | $300 – $600 |
| Housing, mount, power | $200 – $400 |

Estimated total:

> **$1,300 – $2,200**

This may fit the budget, but the thermal performance is limited.

### Version A + Real Long-Range Thermal

| Component | Cost |
|---|---:|
| RGB 30× PTZ camera | $300 – $500 |
| Jetson Orin Nano | $250 – $500 |
| 4G router | $100 – $350 |
| FLIR Boson 640 + long lens | $4,000 – $6,500+ |
| Housing and power upgrade | $300 – $800 |

Estimated total:

> **$5,100 – $8,100+**

This is outside the current budget.

---

## 15. Recommended Development Path

The recommended path is phased development.

### Phase 1: Current Prototype

Build the low-cost RGB smoke/fire detection system:

- 4K 30× PTZ IP camera
- Jetson Orin Nano
- 4G LTE router with SIM
- Local AI detection
- Alert-only upload

Goal:

> Validate whether AI smoke detection works at the target mountain distance.

### Phase 2: Improve Outdoor Reliability

Add:

- Better antenna
- Better waterproof housing
- Better mount
- Backup battery
- Solar power if needed

Goal:

> Make the system stable for real field testing.

### Phase 3: Add Thermal Upgrade

Only after RGB detection is validated, consider thermal upgrade:

- Low-cost thermal for short-range hotspot confirmation
- Boson 320/640 for better prototype
- Boson 640 + long lens for industrial-grade detection

Goal:

> Improve night detection and heat confirmation.

---

## 16. Final Recommended Version A Specification

| Category | Selected Recommendation |
|---|---|
| Camera | 4K outdoor PTZ IP camera, 30× optical zoom, RTSP support |
| AI board | NVIDIA Jetson Orin Nano / Orin Nano Super |
| Network | 4G LTE router with data SIM |
| Antenna | Outdoor high-gain LTE antenna |
| Power | DC adapter first; solar later |
| Housing | IP66 waterproof box for Jetson/router |
| AI model | YOLOv8n or YOLOv8s smoke/fire model |
| Upload method | Alert-only upload, not 24/7 video streaming |
| Detection type | RGB visual smoke/fire detection |
| Expected useful range | 1–3 km reliable, up to ~5 km for large smoke in ideal conditions |
| Estimated hardware cost | $1,100 – $1,700 |
| Monthly data cost | $10 – $50/month |

---

## 17. Key Conclusions

1. A high-end thermal wildfire camera is technically better but too expensive for the current budget.
2. The selected Version A should use a **4K 30× PTZ IP camera + Jetson Orin Nano + 4G router**.
3. The 4K 30× PTZ camera does **not** include thermal imaging.
4. Version A detects smoke/fire visually using AI, not heat.
5. For 2–4 km monitoring, smoke detection is more realistic than small flame detection.
6. 4G should be used for alerts only, not continuous video streaming.
7. The data SIM should be installed in the 4G LTE router, not the camera.
8. Adding real long-range thermal detection raises the total cost to approximately **$5,100 – $8,100+**.
9. The best path is to build the RGB prototype first, test it in the mountain, then upgrade to thermal later if needed.

---

## 18. Simple System Diagram

```text
                 Mountain Monitoring Site

        ┌──────────────────────────────┐
        │  4K 30× PTZ IP Camera         │
        │  - RGB video                  │
        │  - Optical zoom               │
        │  - RTSP stream                │
        └──────────────┬───────────────┘
                       │ Ethernet / LAN
                       ▼
        ┌──────────────────────────────┐
        │  Jetson Orin Nano             │
        │  - YOLO smoke/fire detection  │
        │  - Snapshot recording         │
        │  - Alert decision             │
        └──────────────┬───────────────┘
                       │ Ethernet / Wi-Fi
                       ▼
        ┌──────────────────────────────┐
        │  4G LTE Router                │
        │  - Data SIM                   │
        │  - External antenna           │
        └──────────────┬───────────────┘
                       │ 4G mobile network
                       ▼
        ┌──────────────────────────────┐
        │  Alert System                 │
        │  - Telegram                   │
        │  - SMS                        │
        │  - Web dashboard              │
        │  - Cloud storage              │
        └──────────────────────────────┘
```

---

## 19. Next Recommended Work

Next useful design steps:

1. Select exact 4K 30× PTZ camera model.
2. Select exact 4G LTE router and antenna.
3. Design wiring and power plan.
4. Prepare Jetson software stack.
5. Build YOLO smoke/fire detection pipeline.
6. Test detection using recorded mountain/fire/smoke videos.
7. Field-test at 1 km, 2 km, 3 km, and 4 km distances.
8. Decide whether thermal upgrade is necessary after real testing.
