# Discussion Notes: QRMA, Metatron/NLS, MORA, Zapper, PEMF, and STM32F407 PEMF Prototype

Generated: 2026-07-22

## 0. Purpose of this document

This Markdown file collects the discussion from this channel about alternative “frequency medicine” devices and the engineering path toward a safer, measurable bench prototype.

Main topics covered:

1. 21G+ Quantum Resonance Magnetic Analyzer / QRMA
2. QRMA paper review and database/model reality
3. Practical calibrated bioimpedance V0.1 concept
4. Metatron / Metatron 9D / Meta Hunter / NLS systems
5. MORA bioresonance devices
6. Zapper devices
7. PEMF devices
8. Simple PEMF bench design
9. STM32F407 implementation
10. STM32 simulation tools, especially Proteus VSM and Proteus Professional

> Important boundary: none of the discussed experimental or alternative devices should be used for diagnosis, treatment, height increase, infection treatment, TB, cancer, parasite treatment, or other medical decisions unless the exact device and indication have proper medical/regulatory approval and clinical validation.

---

# 1. Initial topic: Bio-resonance and tuberculosis

The discussion began around a belief that bio-resonance could treat tuberculosis perfectly.

The key conclusion was:

- There is no reliable evidence that bio-resonance cures tuberculosis.
- TB requires recognized medical diagnosis and antibiotic treatment.
- Alternative devices should not replace standard TB care.

---

# 2. 21G+ Quantum Resonance Magnetic Body Analyzer / QRMA

A device was identified as a **21G+ Quantum Resonance Magnetic Body Analyzer**, also called a **QRMA** or **Quantum Resonance Magnetic Analyzer**.

## 2.1 What the device appears to be

The device is generally marketed as a palm-sensor health analyzer. The user holds a sensor rod or metal grip, and software generates many health metrics.

The explanation given:

```text
Commercial QRMA device
    ↓
Palm sensor / hand electrode
    ↓
Vendor software
    ↓
Large health report
```

## 2.2 Important technical clarification

The device is **not true NMR or MRI**.

A true nuclear magnetic resonance or MRI system requires:

```text
Strong static magnetic field
RF excitation
Gradient coils
Sensitive RF receiver
Calibrated signal reconstruction
```

A small handheld analyzer does not have the physics or hardware of real NMR/MRI.

## 2.3 Clinical reliability

The device was described as **not clinically validated** for diagnosing disease, internal organ status, tuberculosis, cancer, endocrine problems, or other serious conditions.

---

# 3. Uploaded QRMA paper review

The user uploaded a paper:

```text
Harnessing AI, IoT and Quantum Resonance Magnetic Analysis for Digital Diagnosis and Treatment
IJFMR, 2024
```

## 3.1 What the paper actually described

The paper presented an engineering prototype combining:

```text
Commercial QMRA / QRMA device
Raspberry Pi
Firebase
Android application
Voice AI
Remote data flow
```

## 3.2 Main problems found in the paper

The paper did not provide rigorous clinical validation.

Problems identified:

```text
No strong clinical reference comparison
No clear regulator or certificate details
No public raw dataset
No public AI model
No true validation of QRMA readings against accepted medical tests
Contradictory accuracy presentation
```

The paper claimed high accuracy, around 85–95%, but a figure/table in the paper showed values around 0.164, which corresponds to roughly 16.4%, creating a serious contradiction.

## 3.3 Conclusion from the paper

The paper may be useful as an example of:

```text
IoT system integration
Mobile app design
Remote reporting
Prototype workflow
```

But it does **not** validate QRMA as a reliable medical device.

---

# 4. Search for QRMA database, AI model, and public experiment data

The user asked whether databases, AI models, or experimental data exist for QRMA.

## 4.1 Finding

No legitimate public scientific database was found that maps handheld QRMA “frequencies” to 50+ health metrics.

No public resources were found for:

```text
Raw QRMA sensor recordings
QRMA numerical spectra
Clinical labels paired with QRMA outputs
AI model weights
Training datasets
Validation datasets
Device protocol
Calibration procedures
```

## 4.2 Better scientific alternatives

For real data-driven biomedical work, several better directions were recommended.

### True NMR/metabolomics data

Examples:

```text
HMDB
BMRB
MetaboLights
```

These relate to real NMR or metabolomics, not handheld QRMA.

### Bioimpedance data

Bioimpedance was recommended as a more realistic path because it produces calibrated physical values.

Examples of measurable features:

```text
Resistance, R
Reactance, X
Phase angle
Frequency response
Cole model parameters
```

---

# 5. Proposed scientific V0.1: calibrated bioimpedance device

Instead of copying QRMA, a practical **multi-frequency bioimpedance spectroscopy** device was proposed.

## 5.1 Architecture

```text
Four-electrode tetrapolar interface
    ↓
Patient protection and current limiting
    ↓
Analog front end, e.g. AD5940 / AD5941
    ↓
MCU
    ↓
App/backend
    ↓
Signal processing and AI
```

## 5.2 Important safety boundary

The first version should be **bench-only**.

No human connection until:

```text
Electrical safety is engineered
Isolation is reviewed
Current limiting is verified
Leakage current is tested
Formal risk review is completed
```

## 5.3 Starter package created

A starter package was created earlier:

```text
bioz_v01_starter.zip
```

It included:

```text
Firmware wrapper for Analog Devices AD5940_BIA example
Host Python serial capture script
Sample RC sweep
Block diagram
Bench-load-only instructions
```

It measured:

```text
Magnitude
Phase
Real impedance
Imaginary impedance
```

---

# 6. Public datasets for bioimpedance

The most useful immediate dataset discussed was **NHANES BIA data**.

## 6.1 Why NHANES is useful

NHANES contains resistance/reactance at multiple frequencies, plus body-measurement and demographic data.

Possible joins:

```text
SEQN key
    ├── BIA data
    ├── DEMO
    ├── BMX
    └── DXA/body-composition files where available
```

## 6.2 Important warning

Some body-composition labels in BIA datasets may be derived from equations. Predicting those labels only teaches the model to imitate another equation.

A stronger approach is to predict against independent clinical references such as DXA, when available.

---

# 7. Metatron / Metatron 9D / NLS systems

The discussion later shifted to **Metatron**, **Meta Hunter**, **Metapathia GR Hunter**, and **Metatron 9D/21D/25D** systems.

## 7.1 Likely identity

The device category is usually called:

```text
Metatron NLS
Nonlinear diagnostic system
Meta Hunter
Metapathia GR Hunter
Metapathia Clinical
Metapathia Hospital
```

The original manufacturer discussed was:

```text
Institute of Practical Psychophysics, IPP
Official site: apparat-metatron.com
```

## 7.2 Common hardware

Typical components:

```text
Controller box
Headset / trigger sensors
USB connection
Windows software
USB dongle or license key
Optional remedy / testing cup
```

## 7.3 Claimed workflow

```text
Patient profile
    ↓
Headset / trigger sensor connection
    ↓
Organ or anatomy selection
    ↓
Scan / measurement
    ↓
Nidus markers or values
    ↓
Comparison to reference “etalons”
    ↓
Report and recommendations
```

## 7.4 Proprietary database

The official developer describes more than 12,000 reference “etalons.”

Categories mentioned:

```text
Virtual organ models
Biochemical homeostasis
Diseases / nosology
Bacteria
Viruses
Fungi
Parasites
Allergens
Medicines
Foods
Supplements
Trace elements
Psycho-emotional categories
```

However, the actual numerical data is not public.

Not found publicly:

```text
Raw etalon arrays
SQL/CSV database
File schema
AI model weights
Device protocol
Calibration method
Raw sensor format
Training dataset
Validation dataset
```

## 7.5 About “9D”, “21D”, “25D”

The labels such as **9D**, **21D**, or **25D** appear mostly in reseller marketing.

The conclusion:

```text
9D / 21D / 25D usually do not mean true physical dimensions.
They more likely describe reseller software tiers, database size, interface generation,
anatomy library size, or marketing categories.
```

## 7.6 Could Metatron increase height?

No credible evidence was found that Metatron 9D/21D/25D can:

```text
Lengthen bones
Reopen growth plates
Stimulate final height increase
Replace pediatric endocrine evaluation
```

For a child with no measurable height increase over 6 months, the recommended path is pediatric/growth evaluation, growth chart review, puberty assessment, bone-age X-ray, and relevant labs under medical supervision.

---

# 8. Search for Metatron 9D database or experiment data

The user asked whether the database or experiment data for 9D could be found.

## 8.1 Public result

No legitimate public dataset was found for:

```text
9D raw sensor recordings
Numerical etalon frequency arrays
Patient examination files
Device calibration records
USB protocol documentation
Sampling frequency and ADC output
AI training records
AI model weights
Clinical ground-truth labels
Data dictionary for 9D reports
```

## 8.2 What public documents show

Public manuals show that the software stores:

```text
Patient demographics
Examination dates
Selected organ images
Frequency-like graphs
Previous examinations
Operator-entered lab results
Generated reports
```

But the manuals do not provide the internal database schema or raw measurement export.

## 8.3 Best legitimate way to obtain data

The recommended legitimate route:

```text
Contact IPP / official supplier
Request a research or developer-data license
Ask for raw examination export format
Ask for anonymized patient records
Ask for numerical etalon database documentation
Ask for SDK/API access
Ask for clinical-validation datasets
```

Suggested request items:

```text
1. Numerical etalon database licence
2. Etalon record data dictionary
3. Raw examination export format
4. Anonymized sample patient examinations
5. Raw sensor signal or frequency-array export
6. Device-to-PC communication protocol
7. Calibration and reference-load procedure
8. SDK or API documentation
9. Clinical-validation datasets
10. Exact software and hardware versions used in each study
```

## 8.4 If the user owns a licensed installation

A safe inventory approach was suggested, without bypassing DRM or copying protected software:

```powershell
Get-ChildItem "C:\Path\To\9D" -Recurse -File |
    Group-Object Extension |
    Sort-Object Count -Descending |
    Select-Object Count, Name
```

Search for database-like files:

```powershell
Get-ChildItem "C:\Path\To\9D" -Recurse -File |
    Where-Object {
        $_.Extension -in @(
            ".db", ".db3", ".sqlite", ".sqlite3",
            ".mdb", ".accdb", ".fdb", ".gdb",
            ".dat", ".bin", ".xml", ".json",
            ".csv", ".ini"
        )
    } |
    Select-Object FullName, Length, LastWriteTime
```

---

# 9. MORA bioresonance device

The user asked about MORA in more detail.

## 9.1 What MORA is

MORA is a bioresonance system associated with Franz Morell and Erich Rasche.

It is marketed as both an assessment and therapy device.

## 9.2 Claimed operating principle

```text
Body
  ↓
Input electrodes
  ↓
Very small electrical/electromagnetic signal
  ↓
Amplification and filtering
  ↓
Pass / invert / select frequency band / combine
  ↓
Output amplifier
  ↓
Output electrodes
  ↓
Signal returned to body
```

## 9.3 Typical hardware

A modern MORA-type system may include:

```text
Hand electrodes
Foot electrodes
Point electrodes
Input channel
Output channel
Amplifiers
Filters
Signal inversion
Square/sine generators
Touchscreen or PC software
Substance cups / ampoule cups
Therapy programs
```

## 9.4 The “cup” concept

Some MORA workflows place a food, medicine, allergen, or ampoule in a cup.

The system then claims to process the substance’s “frequency information.”

No robust public evidence was found that such cups generate clinically reliable diagnostic signals.

## 9.5 Main limitation

Public material generally does not disclose:

```text
Raw waveform units
Sensor noise floor
Input impedance
Calibration reference
Signal-to-noise ratio
Biological source of each frequency
Algorithm for healthy/pathological separation
Clinical labels used to create programs
Validated diagnostic thresholds
```

---

# 10. Zapper device

The user asked about Zapper devices in more detail.

## 10.1 What a Zapper is

A Zapper is typically a simple electrical waveform generator connected to:

```text
Metal hand grips
Wristbands
Adhesive electrodes
```

## 10.2 Basic architecture

```text
Battery
  ↓
Oscillator
  ↓
Square-wave or pulse generator
  ↓
Output resistor / current limiter
  ↓
Handholds or skin electrodes
  ↓
Current passes through part of the body
```

## 10.3 Claims

Zapper sellers often claim that frequencies can:

```text
Kill parasites
Kill bacteria
Kill viruses
Treat cancer
Detoxify
Improve immune function
Correct organ frequency
```

But no accepted clinical evidence shows that small current through handholds selectively kills pathogens inside the body.

## 10.4 Database / AI

Most Zappers do not contain AI.

They may contain only:

```text
Fixed oscillator
Selectable frequency generator
Timer
Output stage
```

Advanced models may include preset frequency lists, but those are not validated clinical AI models.

---

# 11. Which is better: Metatron, MORA, or Zapper?

The answer was goal-dependent.

## 11.1 For diagnosis

None is preferred for medical diagnosis.

Better option:

```text
Doctor evaluation
Validated laboratory tests
Validated imaging
Recognized medical devices
```

## 11.2 For disease treatment

None should replace evidence-based treatment.

## 11.3 For height increase

None is appropriate.

## 11.4 For engineering research

A calibrated bioimpedance or PEMF bench system is more useful because it can produce measurable physical values.

---

# 12. Difference between Metatron 9D, MORA, and Zapper

## 12.1 Comparison table

| Device | Main claimed role | Typical hardware | Processing style |
|---|---|---|---|
| Metatron 9D / NLS | Scanner-like analysis and etalon comparison | Headset, controller box, Windows software | Proprietary reference database and anatomical software |
| MORA | Bioresonance feedback | Electrodes, filters, amplifiers, cups | Signal processing, inversion, return signal |
| Zapper | Electrical stimulation/frequency generation | Oscillator, hand grips/electrodes | Fixed or selectable frequency output |

## 12.2 Simple analogy

```text
Metatron 9D = scanner-like software + proprietary reference library
MORA         = claimed signal feedback and inversion processor
Zapper       = electrical frequency generator
```

---

# 13. Common or similar features between Metatron, MORA, and Zapper

Common concepts:

```text
Uses frequency or electromagnetic terminology
Contacts the user through headset, electrodes, or hand grips
Uses selected waveforms or frequency-like programs
Often includes proprietary software or preset libraries
Claims to influence health
Lacks public clinical AI model
Lacks robust broad diagnostic validation
```

Shared conceptual model:

```text
The body or disease has a characteristic frequency
                    ↓
The device measures, selects, or generates frequencies
                    ↓
Software or circuitry identifies an imbalance
                    ↓
A selected or modified signal is applied
                    ↓
The body is claimed to return toward a healthy state
```

The key problem is that vendors generally do not publish reproducible evidence for this full chain.

---

# 14. URLs for each device

The following URLs were provided during the discussion.

## 14.1 Metatron NLS

```text
https://apparat-metatron.com/en/metatron-products/device-and-principle-of-operation/
https://apparat-metatron.com/en/metatron-products/software/
```

Note: “Metatron 9D” specifically appears mostly as a reseller label rather than a clearly verified official IPP model name.

## 14.2 MORA

```text
https://moratechnologies.de/en/mora-nova-introduction-english/
https://med-tronik.de/en/devices/mora-nova/
```

## 14.3 Zapper

```text
https://drclarkstore.com/collections/dr-clark-equipment
```

FTC context about unsupported Zapper claims:

```text
https://www.ftc.gov/sites/default/files/documents/cases/2003/01/030127comp0223051.shtm
```

---

# 15. Price ranges discussed

Approximate market prices as discussed:

| Device | Approximate price |
|---|---:|
| Generic Metatron 9D/25D reseller unit | $300–$900 |
| Meta Hunter / Metatron 4025 package | $1,300–$4,600 |
| Original HSS Metatron | Quote required |
| MORA Nova | Roughly €10,000–€15,000+ |
| Used MORA examples | Around $13,000+ |
| Basic Clark-style Zapper | $35–$150 |
| Branded SyncroZap | Around $290–$300 |
| Advanced programmable Zapper | $300–$1,200 |

Price differences often reflect:

```text
Software license
Database size
Laptop bundle
Training
Support
Branding
Accessories
Reseller markup
```

Not necessarily better sensing or better clinical accuracy.

---

# 16. PEMF devices

The user then asked about PEMF devices.

## 16.1 What PEMF is

**PEMF** means **Pulsed Electromagnetic Field**.

A PEMF device generally uses a coil to generate a pulsed magnetic field.

Basic concept:

```text
Pulse generator
    ↓
Power switch
    ↓
Coil current
    ↓
Pulsed magnetic field
```

## 16.2 How PEMF differs from Metatron, MORA, and Zapper

| Device | Primary function |
|---|---|
| Metatron 9D | Claimed scan and etalon comparison |
| MORA | Claimed signal feedback/inversion |
| Zapper | Electrical pulses through electrodes |
| PEMF | Magnetic pulses from a coil |

## 16.3 Why PEMF is more physically measurable

A PEMF device can have defined parameters:

```text
Pulse frequency, Hz
Magnetic flux density, µT or mT
Pulse width, µs or ms
Waveform
Coil geometry
Duty cycle
Treatment duration
```

That makes it easier to measure and test than undocumented “organ frequency” claims.

## 16.4 Medical boundary

Some prescription PEMF bone-growth stimulators exist for specific fracture or fusion indications.

That does **not** mean consumer PEMF devices can increase height, reopen growth plates, cure infection, or diagnose disease.

---

# 17. Simple PEMF bench device design

The user asked for a full design of a simple PEMF device.

A **bench-test demonstrator** was provided, not a patient-use medical device.

## 17.1 Safety boundary

```text
Bench testing only
Do not apply to a person or animal
Do not use for diagnosis or treatment
Use a current-limited lab supply
Keep away from pacemakers and magnetic-sensitive objects
Use fuse, e-stop, current limit, and thermal protection
```

## 17.2 Block diagram

```text
12 V current-limited bench supply
             │
         500 mA fuse
             │
      Emergency-stop switch
             │
   ┌─────────┴──────────┐
   │                    │
Bulk capacitor      Air-core coil
                        │
                 Flyback diode
                        │
                 N-MOSFET switch
                        │
                1 Ω current sensor
                        │
                       GND
                        ▲
                        │
              Microcontroller
       ┌────────────┬────────────┐
       │            │            │
   Pulse output  Current ADC  Coil NTC
       │            │            │
       └──── safety shutdown ────┘
```

## 17.3 Default bench configuration

```text
Supply:              12 V DC
Supply current limit: 0.35 A
Pulse frequency:      10 Hz
Pulse width:          500 µs
Maximum frequency:    50 Hz
Maximum pulse width:  1000 µs
Maximum session:      60 seconds
Current shutdown:     0.30 A
Temperature shutdown: 40 °C
```

## 17.4 Main components

| Component | Suggested part |
|---|---|
| Controller | Arduino Nano Every, later STM32F407 |
| MOSFET | IRLZ44N or better logic-level MOSFET |
| Flyback diode | SS34 or suitable diode |
| Current sensor | resistor shunt or current-sense amplifier |
| Gate resistor | 100 Ω in Arduino version |
| Gate pulldown | 100 kΩ |
| Temperature sensor | 10 kΩ NTC |
| Input fuse | 500 mA |
| Bulk capacitor | 470 µF / 25 V |
| Coil | 500 turns AWG30, approximately 100 mm diameter |
| Power source | Current-limited lab supply |

## 17.5 Coil estimate

```text
Former diameter:      100 mm
Turns:                500
Wire:                 AWG30 enamelled copper
Winding width:        approximately 20 mm
Estimated resistance: 45–65 Ω
Estimated inductance: 20–50 mH
```

Rough center-field approximation:

```text
B ≈ μ₀ × N × I / (2 × r)
```

Actual field must be measured with a calibrated Hall probe or gaussmeter.

## 17.6 Output package

A design package was generated:

```text
pemf_bench_v01.zip
```

It contained:

```text
README.md
firmware/pemf_bench_v01.ino
hardware/schematic.md
hardware/bom.csv
hardware/coil_spec.md
simulation/coil_pulse.cir
```

---

# 18. STM32F407 implementation

The user planned to build the PEMF device using **STM32F407**.

## 18.1 Why STM32F407 is suitable

STM32F407 provides:

```text
Hardware timers
Advanced PWM
ADC
DMA
UART
GPIO
TIM1 break input
Fast Cortex-M4 core
```

The TIM1 hardware break input is useful for overcurrent shutdown.

## 18.2 Updated STM32 architecture

```text
12 V current-limited supply
          │
    Fuse + E-stop
          │
   0.1 Ω current shunt
          │
   ┌──────┴─────────┐
   │                │
INA180A2       Air-core coil
current amp         │
   │           Flyback diode
   │                │
STM32 ADC      N-MOSFET
                    │
                   GND

STM32F407
├── PA8  / TIM1_CH1  → gate driver → MOSFET
├── PB12 / TIM1_BKIN ← comparator fault
├── PA1  / ADC1_IN1  ← current sense
├── PA2  / ADC1_IN2  ← coil NTC
├── PB10 / USART3_TX → USB/UART
├── PB11 / USART3_RX ← USB/UART
└── PC13 status LED
```

## 18.3 Important change from Arduino version

Do not drive the MOSFET directly from the STM32 GPIO.

STM32 GPIO is 3.3 V, so use a gate driver.

Recommended type discussed:

```text
UCC27517A or similar MOSFET gate driver
```

## 18.4 Current sensing

Recommended:

```text
Shunt:      0.1 Ω, 1%, 1 W
Amplifier:  INA180A2
Gain:       50 V/V
```

At 0.30 A:

```text
Shunt voltage = 0.30 A × 0.1 Ω = 0.030 V
ADC voltage   = 0.030 V × 50 = 1.50 V
```

## 18.5 Suggested STM32 pin assignment

| Function | STM32 pin | Peripheral |
|---|---|---|
| Coil PWM | PA8 | TIM1_CH1 |
| Hardware fault shutdown | PB12 | TIM1_BKIN |
| Current measurement | PA1 | ADC1_IN1 |
| Coil temperature | PA2 | ADC1_IN2 |
| Serial TX | PB10 | USART3_TX |
| Serial RX | PB11 | USART3_RX |
| Status LED | PC13 | GPIO |

---

# 19. Logical flow of the STM32F407 PEMF device

The user asked for the logical flow.

## 19.1 Overall signal flow

```text
User command
    ↓
STM32 validates settings
    ↓
Safety checks
    ↓
TIM1 generates pulse waveform
    ↓
Gate driver amplifies 3.3 V signal
    ↓
MOSFET switches coil current
    ↓
Coil produces pulsed magnetic field
    ↓
Current and temperature are measured
    ↓
STM32 continues, stops, or enters fault state
```

## 19.2 State machine

```c
typedef enum
{
    PEMF_STATE_BOOT,
    PEMF_STATE_IDLE,
    PEMF_STATE_ARMED,
    PEMF_STATE_RUNNING,
    PEMF_STATE_FAULT
} PEMF_State;
```

State flow:

```text
BOOT
  ↓
Self-test
  ├── failure → FAULT
  ↓
IDLE
  ↓ configure
ARMED
  ↓ START
RUNNING
  ├── session completed → IDLE
  ├── STOP command → IDLE
  ├── overcurrent → FAULT
  ├── overtemperature → FAULT
  ├── hardware break → FAULT
  └── sensor failure → FAULT

FAULT
  ↓ fault removed + CLEAR
IDLE
```

## 19.3 Boot flow

```text
Power applied
    ↓
MOSFET gate forced LOW by hardware resistor
    ↓
STM32 reset
    ↓
Initialize clock
    ↓
Initialize GPIO
    ↓
Initialize TIM1 PWM
    ↓
Initialize ADC + DMA
    ↓
Initialize UART
    ↓
Initialize TIM1 break input
    ↓
Read sensors
    ├── invalid → FAULT
    ↓
Enter IDLE
```

## 19.4 Start sequence

```text
START command
    ↓
Verify state is IDLE or ARMED
    ↓
Verify no latched fault
    ↓
Read current sensor
    ↓
Read temperature sensor
    ↓
Verify emergency stop is released
    ↓
Verify gate driver is ready
    ↓
Load TIM1 period
    ↓
Load TIM1 pulse width
    ↓
Reset timer counter
    ↓
Clear TIM1 break flags
    ↓
Enable PWM output
    ↓
Store session start time
    ↓
Enter RUNNING
```

## 19.5 Hardware overcurrent flow

```text
Coil current
    ↓
Shunt resistor
    ↓
Current-sense amplifier
    ├── STM32 ADC
    ↓
Comparator
    ↓
TIM1 BKIN
    ↓
TIM1 disables PWM immediately
    ↓
Gate driver output LOW
    ↓
MOSFET OFF
    ↓
Break interrupt informs firmware
    ↓
Firmware enters FAULT state
```

---

# 20. How to simulate STM32F407 program operation

The user asked how to simulate the STM32F chip program working.

## 20.1 Recommended layered simulation

```text
Firmware logic and STM32 peripherals → Renode
Coil, MOSFET, flyback circuit        → SPICE
Final timing and safety verification → Real STM32F407 board
```

## 20.2 Renode

Renode is useful for:

```text
Firmware state machine
UART commands
Timer logic
GPIO logic
Interrupts
Fault handling
Automated firmware tests
```

Renode is not ideal for accurately simulating:

```text
Coil current
MOSFET switching losses
Flyback transient
Magnetic field
Thermal behavior
ADC analog noise
```

## 20.3 SPICE / LTspice / ngspice

SPICE should be used for:

```text
MOSFET switching
Coil current rise
Flyback diode current
Drain voltage transient
Power dissipation
Thermal estimates
```

## 20.4 Real board

The final truth still requires real hardware:

```text
STM32F407 board
Oscilloscope
Current probe or shunt measurement
Gaussmeter / Hall probe
Temperature monitoring
Dummy load
Low-current coil test
```

---

# 21. STM32 simulation tools

The user asked for simulation tools for STM32 chips.

## 21.1 Best single tool for MCU + circuit simulation: Proteus VSM

Proteus VSM was recommended when the user wants to draw a circuit and simulate:

```text
STM32F407
TIM1 PWM output
MOSFET gate driver
MOSFET
Coil / inductive load
Flyback diode
Current-sense amplifier
Comparator
UART terminal
Virtual oscilloscope
```

## 21.2 Best free firmware-focused option: Renode

Renode was recommended for firmware-only simulation and testing.

## 21.3 Keil µVision simulator

Useful for:

```text
C code execution
Breakpoints
Register inspection
Interrupt tests
UART simulation
Logic validation
```

Less useful for full coil/power-stage simulation.

## 21.4 IAR C-SPY simulator

Professional firmware-debugging simulator.

Mainly code/peripheral logic, not full electrical circuit behavior.

## 21.5 QEMU

QEMU was considered less suitable for this STM32F407 project because STM32 peripheral support is partial.

## 21.6 STM32CubeIDE

STM32CubeIDE is for:

```text
Project creation
Code generation
Compilation
Programming
Hardware debugging
```

It is not a complete STM32 chip/circuit simulator.

---

# 22. Proteus VSM download

The official Proteus download/trial page discussed:

```text
https://www.labcenter.com/free-trial/
```

Other official pages:

```text
https://www.labcenter.com/whyvsm/
https://www.labcenter.com/pricing/
https://www.labcenter.com/tutorials/
```

The user was advised to verify that the exact MCU, such as STM32F407VGT6, is included in the selected Proteus VSM license.

---

# 23. Proteus VSM vs Proteus Professional

The user asked whether Proteus VSM is different from Proteus Professional 9.12.

## 23.1 Relationship

They are not completely separate programs.

```text
Proteus Design Suite
├── Schematic Capture
├── PCB Layout
├── SPICE circuit simulation
├── Proteus VSM
│   ├── Microcontroller simulation
│   ├── Firmware execution
│   ├── Virtual oscilloscope
│   ├── Logic analyzer
│   └── Peripheral models
└── Optional processor-family licenses
```

## 23.2 What Proteus Professional means

“Proteus Professional” usually means an edition or license bundle.

It may or may not include:

```text
Schematic only
PCB design
Analog/digital simulation
VSM microcontroller simulation
Specific MCU-family support
```

Therefore, having Proteus Professional does not automatically guarantee STM32 simulation.

## 23.3 About version 9.12

It was noted that the official current version found was Proteus 9.2, while “9.12” might be:

```text
Typo
Unofficial installer name
Reseller-specific name
Confusion with older 8.12
Modified package
```

Caution was recommended for unofficial downloads.

---

# 24. Can Proteus Professional simulate STM32?

The answer was:

```text
Yes, but only if the license includes the correct Proteus VSM processor package.
```

For STM32F407, the needed pieces are:

```text
Proteus Professional
+ Proteus VSM simulation engine
+ ARM Cortex-M4 processor package
+ STM32F407 device model
```

## 24.1 How to check

Open:

```text
Library → Pick Devices
```

Search:

```text
STM32F407VGT6
STM32F407VG
STM32F407
```

Then place the device and check properties.

A simulatable MCU should show fields like:

```text
Program File
Clock Frequency
Processor Clock
ELF or HEX firmware
VSM CPU model
Debug file
```

Finding only a schematic symbol is not enough.

## 24.2 Practical test

Start simple:

```text
STM32 PA8 / TIM1_CH1
        ↓
Logic analyzer or oscilloscope
```

Load the CubeIDE `.elf` file and run simulation.

If PWM appears and firmware executes, the installation supports the needed STM32 VSM model.

---

# 25. Key engineering conclusion

The recommended path for the user’s engineering work is:

```text
Do not copy QRMA / Metatron / MORA / Zapper as a medical diagnostic system.
Build measurable bench prototypes first.
Use calibrated physical measurements.
Validate one endpoint at a time.
Use public datasets only where scientifically meaningful.
Never apply experimental prototypes to humans or children.
```

For a PEMF bench project:

```text
STM32F407
    ↓
TIM1 PWM
    ↓
Gate driver
    ↓
MOSFET
    ↓
Air-core coil
    ↓
Measured magnetic field
    ↓
Current and temperature safety loops
```

For full development:

```text
1. Simulate firmware state machine
2. Simulate power stage in SPICE
3. Test STM32 output without coil
4. Test dummy load
5. Test low-current coil
6. Measure with oscilloscope and Hall probe
7. Add hardware shutdown and fault logging
8. Never use as a medical device without proper certification
```

---

# 26. Important medical note repeated

For the user’s daughter and height concerns:

```text
Metatron
MORA
Zapper
PEMF
QRMA
```

should not be used for height increase.

No evidence was found that these devices can:

```text
Increase bone length
Reopen growth plates
Replace pediatric endocrine evaluation
Safely stimulate final height growth
```

A pediatrician or pediatric endocrinologist should evaluate growth delay using accepted clinical methods.

---

# 27. Artifact list generated during the discussion

The following downloadable artifacts were created during the discussion:

```text
bioz_v01_starter.zip
pemf_bench_v01.zip
```

This Markdown file summarizes the discussion and design direction.

---

# 28. Suggested next technical step

For the STM32F407 PEMF bench project, the next practical step is to create a Proteus VSM test schematic with only:

```text
STM32F407
Clock/reset
PA8 TIM1_CH1
Virtual oscilloscope
USART terminal
LED
```

Then load the CubeIDE `.elf` firmware and verify:

```text
PWM frequency
Pulse width
START / STOP command behavior
FAULT state behavior
UART telemetry
```

After the firmware runs correctly, add:

```text
Gate driver
MOSFET
Coil substitute resistor
Flyback diode
Current sensor
Comparator to BKIN
NTC divider
```

That staged approach avoids fighting all problems at once.
