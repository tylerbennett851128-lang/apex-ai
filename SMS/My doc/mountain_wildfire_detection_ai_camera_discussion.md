# Mountain Wildfire Detection AI Camera System Discussion

## 1. Goal

The goal is to design an AI camera system capable of detecting wildfire
risks in remote mountain areas.

The target application:

-   Mountain forest monitoring
-   Early smoke detection
-   Fire hotspot detection
-   Remote operation
-   Solar-powered deployment
-   Cellular/satellite communication

------------------------------------------------------------------------

# 2. Existing Professional Solutions

## Pano AI

Pano AI is a professional wildfire intelligence platform.

Characteristics:

-   Mountain-top deployment
-   Dual camera configuration
-   30x optical zoom
-   360-degree monitoring
-   AI-based smoke detection
-   Cloud-based fire intelligence platform

Important point:

Pano AI is generally sold as a complete service/platform rather than
only as a camera module.

Estimated service cost:

-   Around \$50,000 per camera station per year

This includes:

-   Hardware
-   AI monitoring
-   Software platform
-   Maintenance
-   Fire intelligence services

------------------------------------------------------------------------

# 3. Camera Hardware Options

## Bosch MIC IP Fusion 9000i

A professional industrial camera.

Features:

-   Visible camera
-   Thermal camera
-   PTZ movement
-   30x optical zoom
-   Rugged outdoor design

Approximate hardware price:

-   Around \$30,000

Advantages:

-   Suitable for mountain environments
-   Works day/night
-   Thermal + visible fusion

Disadvantages:

-   Expensive
-   Requires custom AI software

------------------------------------------------------------------------

## FLIR Thermal Camera Solutions

FLIR provides industrial thermal imaging systems.

Advantages:

-   Detects heat signatures
-   Works in darkness
-   Helps detect active fires

Approximate hardware range:

-   \$10,000 \~ \$20,000+

------------------------------------------------------------------------

## Axis PTZ + AI Software

Another approach:

-   Axis PTZ camera
-   AI wildfire detection software

Advantages:

-   Lower cost
-   Good visible smoke detection

Disadvantages:

-   Thermal capability may require additional hardware

------------------------------------------------------------------------

# 4. Recommended DIY Architecture

The proposed system:

    Mountain Camera Station
            |
            |
            v
    Visible Camera + Thermal Camera
            |
            |
            v
    Edge AI Processor
    (NVIDIA Jetson / Industrial PC)
            |
            |
            v
    AI Fire Detection Engine
            |
            |
            +----------------+
            |                |
            v                v
    Local Alarm       Cloud Platform
            |                |
            |                |
            v                v
     LTE/5G        Dashboard / Storage
            |
            |
            v
    Emergency Notification

------------------------------------------------------------------------

# 5. Camera Station Hardware

## Camera Module

Recommended:

-   4K PTZ visible camera
-   Thermal camera
-   Optical zoom 20x\~30x

Possible choices:

-   Bosch MIC series
-   FLIR thermal PTZ
-   Industrial PTZ camera + separate thermal sensor

------------------------------------------------------------------------

## Edge AI Computer

Recommended:

### NVIDIA Jetson Platform

Examples:

-   Jetson Orin Nano
-   Jetson Orin NX

Responsibilities:

-   Receive camera stream
-   Run AI inference
-   Detect smoke
-   Detect flames
-   Analyze thermal hotspots
-   Reduce false alarms

------------------------------------------------------------------------

# 6. AI Detection Software

## Visible Camera AI

Purpose:

Detect:

-   Smoke columns
-   Flame
-   Fire color patterns

Possible models:

-   YOLOv8
-   YOLOv10
-   EfficientDet
-   Custom CNN models

------------------------------------------------------------------------

## Thermal AI

Purpose:

Detect:

-   Abnormal temperature regions
-   Hotspots
-   Fire boundaries

------------------------------------------------------------------------

## Sensor Fusion

Best approach:

Combine:

Visible image:

-   Smoke detection

Thermal image:

-   Heat confirmation

Result:

Higher accuracy and fewer false alarms.

------------------------------------------------------------------------

# 7. Communication System

Possible communication methods:

## 4G / 5G LTE

Advantages:

-   Low cost
-   Easy deployment

Requirements:

-   SIM card
-   LTE router/modem
-   Antenna

------------------------------------------------------------------------

## Starlink

Advantages:

-   Works in remote mountains
-   High bandwidth

Disadvantages:

-   Higher power consumption
-   Higher cost

------------------------------------------------------------------------

# 8. Power System

Mountain deployment requires:

## Solar System

Components:

-   Solar panel
-   Charge controller
-   LiFePO4 battery
-   Power management module

Typical design:

-   200W\~300W solar panel
-   100Ah\~200Ah battery

------------------------------------------------------------------------

# 9. Complete System Components

  Component            Function
  -------------------- ---------------------------------
  PTZ Camera           Long-distance visual monitoring
  Thermal Camera       Heat detection
  Jetson AI Computer   AI inference
  LTE/5G Router        Communication
  Solar System         Remote power
  Cloud Server         Storage and dashboard
  Mobile App           Alerts
  Weather Sensors      Fire risk information

------------------------------------------------------------------------

# 10. Recommended Development Version

For a prototype with limited budget:

## Version A

Hardware:

-   4K PTZ IP camera
-   Low-cost thermal camera
-   NVIDIA Jetson Orin Nano
-   LTE modem
-   Solar power system

Estimated prototype budget:

-   Camera: \$1,000\~\$3,000
-   Thermal sensor: \$1,000\~\$5,000
-   Jetson: \$500\~\$1,000
-   Communication: \$200\~\$500
-   Solar/power: \$500\~\$1,500

Total:

Approximately:

\$3,000\~\$10,000 prototype system

------------------------------------------------------------------------

# 11. Final Recommended Design

For a practical mountain wildfire AI camera:

            Mountain Ridge

                |
                |
         PTZ Visible Camera
                |
         Thermal Camera
                |
                v

         Edge AI Computer
         NVIDIA Jetson

                |
                |
       AI Fire Detection Model

                |
                |
          LTE / 5G Network

                |
                v

         Cloud Dashboard

                |
                |
       Fire Department Alert

The best engineering balance is:

-   Dual visible + thermal cameras
-   Edge AI processing
-   Solar power
-   LTE communication
-   Cloud monitoring platform

This approach provides a scalable alternative to expensive commercial
wildfire systems.
