# Driver Monitoring System (DMS) and Occupant Monitoring System (OMS) Discussions

## 1. Inside Car Camera Image Processing Board

An inside car camera system is usually called:

-   DMS (Driver Monitoring System)
-   OMS (Occupant Monitoring System)

The processing hardware normally contains:

-   Camera interface (MIPI CSI-2, GMSL, FPD-Link)
-   ISP (Image Signal Processor)
-   CPU
-   AI accelerator (NPU/GPU/DSP)
-   Automotive interfaces (CAN, Ethernet)
-   Embedded OS support

Common platforms:

  Platform                                Usage
  --------------------------------------- -----------------------------
  NVIDIA Jetson Orin Nano/NX              AI vision prototype
  NVIDIA DRIVE AGX Orin                   Automotive ADAS development
  TI TDA4VM/TDA4VM-Q1                     Automotive vision systems
  NXP i.MX 8M Plus                        Embedded vision
  OMNIVISION OAX8000/OAX4600              Dedicated DMS processors
  indie Semiconductor vision processors   Automotive DMS/OMS

------------------------------------------------------------------------

# 2. Board Price Estimation

## NVIDIA Jetson Orin Nano Super Developer Kit

Approximate price:

-   Official price: about \$249 USD
-   Retail prices may range higher depending on distributor

Typical prototype budget:

  Item                             Cost
  ------------------------ ------------
  Jetson Orin Nano Super        \~\$249
  IR camera                  \$30-\$150
  Storage                     \$15-\$60
  Power/case/accessories      \$35-\$90

Total prototype cost:

Approximately \$320-\$500.

------------------------------------------------------------------------

# 3. How to Develop DMS

A DMS pipeline:

    Camera
     |
    Image preprocessing
     |
    Face detection
     |
    Face landmarks
     |
    Eye/head/gaze analysis
     |
    Driver state estimation
     |
    Alert generation
     |
    Vehicle/fleet integration

## Development phases

### Phase 1: PC prototype

Features:

-   Face detection
-   Eye state detection
-   Head pose
-   Basic drowsiness detection

Tools:

-   OpenCV
-   MediaPipe
-   Python

------------------------------------------------------------------------

### Phase 2: Jetson deployment

Hardware:

-   Jetson Orin Nano Super
-   IR camera

Software:

-   Linux
-   CUDA
-   TensorRT
-   ONNX models

------------------------------------------------------------------------

### Phase 3: Vehicle prototype

Add:

-   Car power integration
-   Real mounting
-   Speaker alerts
-   Event logging
-   Testing under sunlight/night conditions

------------------------------------------------------------------------

# 4. Detectable Driver Actions

## Basic DMS detection

  Detection          Meaning
  ------------------ --------------------
  Driver detected    Face visible
  Face missing       Driver unavailable
  Eye open/closed    Eye state
  Long eye closure   Drowsiness
  Blink pattern      Fatigue indication
  Head direction     Left/right/down/up
  Looking away       Distraction
  Yawning            Fatigue
  Face occlusion     Camera obstruction

------------------------------------------------------------------------

## Additional actions with object detection

Requires additional AI models:

-   Phone usage
-   Smoking
-   Eating
-   Drinking
-   Seatbelt detection
-   Hands-off-wheel detection
-   Passenger detection

------------------------------------------------------------------------

# 5. Completed DMS Products

## Smart Eye

Products:

-   Smart Eye DMS
-   AIS / AIS+

Features:

-   Eye tracking
-   Gaze estimation
-   Drowsiness detection
-   Distraction detection

Target:

-   OEM
-   Fleet
-   Aftermarket

------------------------------------------------------------------------

## Seeing Machines Guardian

Features:

-   Real-time driver attention monitoring
-   Drowsiness detection
-   Distraction detection

Target:

-   Commercial fleet

------------------------------------------------------------------------

## Cipia Driver Sense / FS10

Features:

-   Driver monitoring
-   Drowsiness detection
-   Distraction detection
-   Driver recognition

------------------------------------------------------------------------

## Mobileye DMS

Target:

-   OEM automotive integration

------------------------------------------------------------------------

# 6. Cipia-FS10 / FS10 Plus Product Catalog

## Product

Cipia-FS10 / Cipia-FS10 Plus

Category:

AI in-cabin video telematics and Driver Monitoring System.

------------------------------------------------------------------------

# FS10 Features

Detects:

-   Driver drowsiness
-   Driver distraction
-   Smoking
-   Phone holding
-   Seatbelt misuse
-   Driver identity

Uses:

-   Infrared camera
-   Computer vision AI

------------------------------------------------------------------------

# FS10 Plus Features

Additional features:

-   Optional road-facing camera
-   Dashcam recording
-   Event video capture
-   Fleet manager alerts
-   Hybrid communication mode
-   ADAS event correlation

------------------------------------------------------------------------

# 7. Cipia-FS10 Price

Approximate public price:

-   Around \$370 USD for some distributor listings

Fleet deployments are normally quote-based.

------------------------------------------------------------------------

# 8. DMS vs OMS

## DMS

Monitors the driver:

-   Attention
-   Fatigue
-   Distraction
-   Gaze
-   Head pose

## OMS

Monitors occupants:

-   Passenger presence
-   Child left behind
-   Occupant posture
-   Seat occupancy
-   Safety system adaptation

OMS is usually an OEM-level solution.

------------------------------------------------------------------------

# 9. Recommended Development Path

For building a new product:

## Prototype

Hardware:

-   NVIDIA Jetson Orin Nano Super
-   IR camera

Software:

-   OpenCV
-   MediaPipe
-   YOLO
-   TensorRT

Features:

1.  Face detection
2.  Eye state
3.  Head pose
4.  Drowsiness
5.  Distraction

------------------------------------------------------------------------

## Production direction

Move toward:

-   Automotive camera module
-   Automotive SoC
-   DMS/OMS commercial SDK
-   CAN/Ethernet integration
-   Safety compliance
