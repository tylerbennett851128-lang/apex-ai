# Liquid Nitrogen Production System Discussion

This document records the discussion about selecting and budgeting a small-scale liquid nitrogen production and high-pressure nitrogen supply system.

---

## Question 1

> We need to recommend a small-scale liquid nitrogen production system with 99.5% purity, annual 150,000 L (daily 500 L), supply via pipeline about 500 m, valve outlet pressure 15 MPa.  
> Power: 3-phase 380 V, 50 Hz; PLC control. Also require the gaseous nitrogen production, produced by vaporization from liquid nitrogen, and the supply process.  
> Production is intermittent.  
> We need to propose a system that meets these specs and is affordable with high cost-performance. Provide equipment specifications, external dimensions, layout diagram, pipe installation plan, cost estimate.

## Response 1 — Recommended 500 L/day Liquid-Nitrogen Production and 15 MPa Supply System

### 1. Recommended configuration

For the required **500 L/day of liquid nitrogen**, the recommended cost-performance solution is:

> **30 L/h integrated PSA nitrogen generation and nitrogen liquefaction plant + 3,000 L LN₂ storage tank + high-pressure cryogenic liquid pump + ambient vaporizer + high-pressure gas receiver + 500 m high-pressure nitrogen pipeline.**

The liquefier should normally run for approximately:

\[
500\ \text{L/day} \div 30\ \text{L/h}=16.7\ \text{hours/day}
\]

This arrangement is better than selecting a 20 L/h machine, which would need approximately 25 hours to produce 500 L.

The **15 MPa gaseous nitrogen pressure should not be produced by compressing gaseous nitrogen**. The more efficient arrangement is:

1. Store nitrogen as low-pressure liquid.
2. Raise the pressure of the liquid with a cryogenic piston pump.
3. Vaporize the pressurized liquid.
4. Supply the resulting gas at 15 MPa.

### 2. Important purity clarification

The requirement says:

> **N₂ purity ≥99.5% by mass**

This must be clarified in the purchase contract.

Most PSA nitrogen-generator suppliers define purity as:

\[
\text{Purity}=100\%-\text{oxygen concentration}
\]

Argon passes through PSA generators with nitrogen and is normally counted as part of the product.

Therefore, there are two possible specifications:

| Requirement interpretation | Suitable technology |
|---|---|
| **N₂ + Ar ≥99.5%, oxygen ≤0.5%** | Standard PSA plus liquefier; recommended economical solution |
| **Actual molecular N₂ ≥99.5% by mass, excluding argon** | PSA alone is unsuitable; a rectification/distillation or argon-removal stage is required |

For the economical package, the assumed industrial definition is:

> **N₂ + Ar ≥99.7% by volume, O₂ ≤0.3%, dew point ≤−60°C**

### 3. Production and consumption balance

Using an LN₂ density of approximately 0.808 kg/L:

| Parameter | Calculated value |
|---|---:|
| Liquid nitrogen production | 500 L/day |
| Nitrogen mass | approximately 404 kg/day |
| Equivalent gaseous nitrogen | approximately 323 Nm³/day |
| Annual LN₂ production | 150,000 L/year |
| Annual equivalent gas | approximately 96,974 Nm³/year |
| Average gas equivalent over 24 hours | 13.5 Nm³/h |
| Gas equivalent delivered over 8 hours | 40.4 Nm³/h |

The recommended gas-supply skid should provide:

- **Normal gas flow:** 40–50 Nm³/h
- **Short-duration peak:** 60–80 Nm³/h
- **Vaporizer nominal rating:** 100 Nm³/h
- **Pipeline design allowance:** 100 Nm³/h

### 4. Process flow

```text
AMBIENT AIR
    │
    ▼
┌─────────────────────┐
│ Screw air compressor│
│ 0.8 MPa             │
└─────────┬───────────┘
          ▼
┌─────────────────────────────┐
│ Air receiver + filters      │
│ refrigerated/adsorption     │
│ dryer                       │
└─────────┬───────────────────┘
          ▼
┌─────────────────────────────┐
│ PSA nitrogen generator      │
│ N₂ + Ar ≥99.7%              │
│ dew point ≤−60°C            │
└─────────┬───────────────────┘
          │
          ├── Off-spec automatic vent
          ▼
┌─────────────────────────────┐
│ Nitrogen buffer vessel      │
└─────────┬───────────────────┘
          ▼
┌─────────────────────────────┐
│ Nitrogen liquefier          │
│ 30 L/h LN₂                  │
└─────────┬───────────────────┘
          ▼
┌─────────────────────────────┐
│ 3,000 L vacuum-insulated    │
│ liquid-nitrogen tank        │
└──────┬───────────────┬──────┘
       │               │
       │               └── Low-pressure LN₂ filling outlet
       ▼
┌─────────────────────────────┐
│ Cryogenic piston pump       │
│ 100 L/h, 0–16.5 MPa         │
└─────────┬───────────────────┘
          ▼
┌─────────────────────────────┐
│ High-pressure ambient       │
│ vaporizer, 100 Nm³/h        │
│ design pressure ≥20 MPa     │
└─────────┬───────────────────┘
          ▼
┌─────────────────────────────┐
│ 0.3–0.5 m³ HP gas receiver  │
│ design pressure ≥20 MPa     │
└─────────┬───────────────────┘
          ▼
┌─────────────────────────────┐
│ Pressure-control and ESD    │
│ skid, source 15.3–15.8 MPa  │
└─────────┬───────────────────┘
          ▼
════════ 500 m HP PIPELINE ════════
          ▼
┌─────────────────────────────┐
│ User outlet station         │
│ final pressure: 15.0 MPa    │
│ valve-controlled outlet     │
└─────────────────────────────┘
```

### 5. Recommended equipment specifications

#### 5.1 Nitrogen production and liquefaction section

| No. | Equipment | Recommended specification | Approximate external size |
|---:|---|---|---|
| 1 | Screw air compressor | 2.0–2.5 Nm³/min FAD; 0.8–1.0 MPa; 15–22 kW; air-cooled; inverter option | 1.5 × 0.9 × 1.4 m |
| 2 | Air receiver | 1.0 m³; design pressure 1.0–1.3 MPa; safety valve and automatic drain | Ø0.9 × 2.4 m |
| 3 | Air-treatment package | Prefilter, refrigerated dryer, adsorption dryer, fine filter, activated-carbon filter; pressure dew point ≤−40°C, preferably −60°C | 1.8 × 1.0 × 1.8 m |
| 4 | PSA nitrogen generator | 18–22 Nm³/h; N₂ + Ar ≥99.7%; discharge 0.6–0.8 MPa; dew point ≤−60°C | 2.0 × 1.3 × 2.2 m |
| 5 | Nitrogen buffer vessel | 1.0 m³; 1.0 MPa; pressure transmitter and relief valve | Ø0.9 × 2.4 m |
| 6 | Oxygen/purity analyzer | 0–1% O₂ range; automatic off-spec vent; calibration port | Panel mounted |
| 7 | Nitrogen liquefier | 30 L/h; water-cooled; LN₂ temperature approximately −196°C; automatic level-controlled operation | 2.5 × 1.5 × 2.2 m |
| 8 | Cooling-water chiller | Approximately 50–70 kW cooling duty; redundant circulation pump preferred | 2.0 × 1.0 × 1.8 m |
| 9 | PLC/MCC cabinet | Siemens S7-1200, Schneider or equivalent; HMI; Ethernet; alarm history; remote start/stop | 0.8 × 0.6 × 2.0 m |

#### Required liquefier performance guarantee

The purchase specification should require:

- 30 L/h net LN₂ at the site’s maximum summer temperature.
- Product measured after cooldown and excluding initial cooldown losses.
- N₂ + Ar ≥99.7% unless true N₂ purity is separately required.
- Oxygen analyzer with automatic off-spec venting.
- Minimum 8,000-hour major-service interval target.
- PLC automatic start according to storage-tank level.
- Automatic controlled shutdown upon cooling-water, compressor, purity or pressure fault.

#### 5.2 Liquid storage and high-pressure gasification section

| No. | Equipment | Recommended specification | Approximate external size |
|---:|---|---|---|
| 10 | LN₂ storage tank | 3,000 L gross; 2,500–2,700 L usable; vertical, vacuum-perlite insulated; MAWP 1.6 MPa | approximately 2.15 × 2.15 × 3.10 m |
| 11 | LN₂ filling connection | DN15/DN20 vacuum-jacketed outlet, cryogenic valve, flexible fill hose, drip tray | Local assembly |
| 12 | Cryogenic liquid pump | Reciprocating type; LN₂; 100–150 L/h; inlet 0.02–0.8 MPa; discharge adjustable to 16.5 MPa; approximately 5.5 kW | 1.8 × 1.0 × 1.5 m |
| 13 | Pump recirculation line | Minimum-flow bypass to tank, pressure-control valve and cooldown return | Local assembly |
| 14 | Ambient vaporizer | 100 Nm³/h nitrogen; inlet LN₂; design pressure ≥20 MPa; two-bank configuration preferred | approximately 1.5 × 1.5 × 3.5 m per bank |
| 15 | Electric trim heater | 60–100 Nm³/h; outlet temperature control ≥5°C | 1.2 × 0.8 × 1.4 m |
| 16 | High-pressure receiver | 0.3–0.5 m³; design pressure ≥20 MPa; ASME VIII or equivalent | approximately Ø0.8–1.0 × 3.0 m |
| 17 | HP valve/control skid | Check valves, filter, pressure transmitter, regulator, ESD valve, relief valves, vent manifold | 2.0 × 1.2 × 1.8 m |

The storage tank remains at low pressure. It is **not** a 15 MPa tank. Pressure is raised only by the cryogenic pump immediately before vaporization.

### 6. Proposed site layout

A practical minimum equipment plot is approximately:

> **18 m long × 10 m wide**

```text
                         NORTH / OUTDOOR AREA

 ┌─────────────────────────────────────────────────────────────┐
 │                                                             │
 │   [3,000 L LN₂ tank]      [HP pump skid]                    │
 │       2.2 × 2.2 m             1.8 × 1.0 m                   │
 │           │                         │                        │
 │           └──── short vacuum LN₂ line ───┐                  │
 │                                          ▼                  │
 │                               [Vaporizer bank A/B]           │
 │                                  3.5 m high                  │
 │                                          │                  │
 │                                 [HP receiver]                │
 │                                          │                  │
 │                                  [HP valve skid]=============│
 │                                              500 m pipeline  │
 ├─────────────────────────────────────────────────────────────┤
 │             WEATHERPROOF PROCESS BUILDING                    │
 │                                                             │
 │ [Compressor] [Dryers] [PSA] [Liquefier] [PLC/MCC]           │
 │                                                             │
 │                   [External water chiller]                   │
 └─────────────────────────────────────────────────────────────┘

 Minimum clear access:
 • 1.0–1.5 m around skids
 • 2.5–3.0 m vehicle access beside LN₂ tank
 • unobstructed overhead access for tank and cold-head maintenance
```

### 7. 500 m pipeline installation plan

#### 7.1 Preliminary line specification

| Parameter | Preliminary requirement |
|---|---|
| Service | Dry gaseous nitrogen |
| Normal pressure | 15.0 MPa at user outlet |
| Source pressure | approximately 15.3–15.8 MPa |
| Mechanical design pressure | minimum 20 MPa |
| Design temperature | −20°C to +60°C, adjusted for local climate |
| Recommended nominal size | DN20 / ¾ inch |
| Recommended material | ASTM A106 Gr.B seamless carbon steel or 316L seamless stainless steel |
| Preliminary wall class | Schedule 160 for DN20, subject to code calculation |
| Joining | Full-penetration butt welds; no ordinary threaded fittings |
| Examination | 100% visual, required radiography/UT according to code and service classification |
| Testing | Code-compliant hydrostatic or approved pneumatic test |
| Cleaning | Oil-free, dry, particle-free nitrogen service |
| Identification | “HIGH-PRESSURE NITROGEN — 15 MPa” markings and flow arrows |

#### 7.2 Above-ground routing—recommended

```text
Plant isolation valve
    │
    ├── Pressure transmitter
    ├── Check valve
    ├── Remote ESD valve
    │
    ═════ welded DN20 HP line on supports ═════
         │             │             │
       100 m         250 m         400 m
     marker post   manual block   marker post
                     valve
    ═══════════════════════════════════════════
    │
Endpoint ESD valve
    ├── Filter
    ├── Pressure regulator
    ├── Pressure gauge/transmitter
    ├── Relief valve
    ├── Non-return valve
    └── User-controlled outlet valve at 15.0 MPa
```

Recommended provisions:

- Remote emergency shutdown valves at both ends.
- Manual sectional isolation near the midpoint.
- Pressure transmitters at the plant and user station.
- Relief protection for every section that can be isolated.
- Expansion loops or engineered offsets.
- Supports designed for wind, vibration, thermal movement and seismic conditions where applicable.
- Welded branch connections rather than compression fittings.
- Vehicle-impact protection at crossings and exposed valves.

#### 7.3 Buried option

Where burial is unavoidable:

- Use fully welded seamless carbon-steel pipe.
- Apply fusion-bonded epoxy or a three-layer polyethylene coating.
- Use cathodic protection where soil conditions require it.
- Install marker tape and route markers.
- Avoid buried valves and mechanical joints.
- Provide sleeves at road crossings.
- Perform holiday testing of the coating.
- Provide above-ground sectional valves in secure cabinets.

Buried construction will normally increase the pipeline budget by approximately 30–60%.

### 8. Pressure-control philosophy

1. LN₂ pump raises liquid pressure to approximately 16.0–16.5 MPa.
2. Vaporizer converts it to high-pressure gas.
3. Receiver smooths pump pulsation and short demand peaks.
4. Plant pressure controller maintains approximately 15.5 MPa.
5. Endpoint regulator supplies exactly 15.0 MPa.
6. Low-pressure and high-pressure switches stop the pump under abnormal conditions.
7. ESD valves close on pipeline rupture, excessive flow, fire signal or emergency pushbutton.

### 9. PLC control system

| Mode | Function |
|---|---|
| Automatic production | Starts PSA and liquefier when storage level falls below the low setpoint |
| Storage full | Stops liquefier at high level after controlled cooldown/shutdown sequence |
| Gas-demand mode | Starts cryogenic pump according to HP receiver pressure |
| Liquid dispensing | Allows controlled low-pressure LN₂ withdrawal |
| Off-spec protection | Diverts nitrogen if oxygen concentration exceeds specification |
| Pipeline ESD | Stops pump and closes isolation valves |
| Remote operation | Start/stop, alarm reset, trend viewing and production totals |
| Maintenance mode | Individual equipment operation with interlocks retained |

Recommended instrumentation:

- Air pressure, temperature and dryer dew point
- PSA inlet and outlet pressure
- Continuous oxygen analyzer
- Nitrogen flow meter
- Liquefier temperature and operating state
- Storage-tank level and pressure
- Cryogenic pump suction/discharge pressure
- Vaporizer outlet temperature
- HP receiver pressure
- Pipeline source and endpoint pressure
- Oxygen-deficiency monitors
- Leak/abnormal flow alarm
- Power and energy metering

### 10. Electrical and utility requirements

| Utility | Requirement |
|---|---:|
| Electrical supply | 3-phase, 380 V, 50 Hz |
| Connected load | approximately 55–75 kW |
| Normal running load | approximately 35–50 kW |
| Recommended transformer/feed capacity | minimum 100 kVA |
| Cooling-water duty | approximately 50–70 kW |
| Closed-loop cooling-water flow | approximately 3–6 m³/h, supplier confirmation required |
| Ventilation | Mechanical ventilation plus emergency extraction |
| Ambient design | Supplier must guarantee capacity at actual summer temperature |

### 11. Cost estimate

#### 11.1 Recommended high-value Chinese/hybrid package

| Item | Budget range, USD |
|---|---:|
| 30 L/h integrated PSA and LN₂ liquefier skid | $140,000–$210,000 |
| Closed-loop industrial chiller | $15,000–$25,000 |
| 3,000 L, 1.6 MPa vacuum-insulated LN₂ tank | $25,000–$45,000 |
| 100–150 L/h, 16.5 MPa cryogenic pump skid | $20,000–$35,000 |
| 100 Nm³/h, 20 MPa vaporizer and trim heater | $15,000–$30,000 |
| 0.3–0.5 m³, 20 MPa receiver | $20,000–$40,000 |
| HP valves, regulator, instruments and ESD skid | $20,000–$35,000 |
| 500 m DN20 high-pressure pipeline materials | $35,000–$65,000 |
| Pipeline welding, supports, NDE and pressure test | $40,000–$75,000 |
| PLC/MCC integration and remote monitoring | $15,000–$25,000 |
| Oxygen monitors, ventilation and safety systems | $10,000–$20,000 |
| Civil foundations and local installation | $25,000–$50,000 |
| Freight, commissioning and training | $20,000–$40,000 |
| **Estimated installed total** | **$400,000–$595,000** |

Recommended planning budget:

> **Use USD 480,000 as the initial project allowance**, excluding import tax, land, major building work and unusual road crossings.

#### 11.2 European premium alternative

A European solution could use a **Stirling Cryogenics StirLIN-4 Extendible** or a custom high-purity equivalent.

Published StirLIN-4 Extendible data include:

- Approximately 48 L/h at 1 barg and 99.7% N₂ + inerts
- Approximately 77 kW
- Equipment size about 4.9 × 4.35 × 2.0 m
- Weight about 4,150 kg
- 1,000 or 2,000 L storage options

At 48 L/h:

\[
500 \div 48 \approx 10.4\ \text{hours}
\]

A complete European system with storage, HP pumping, vaporization, receiver, controls and the 500 m pipeline should be budgeted at approximately:

> **USD 700,000–1,000,000 installed**

### 12. Estimated operating cost

Assumptions:

- 30 L/h production
- 16.7 hours/day
- 300 production days/year
- Average plant power during production: 35–45 kW

Estimated annual electricity:

\[
175,000\text{–}230,000\ \text{kWh/year}
\]

| Electricity rate | Annual power cost |
|---:|---:|
| $0.08/kWh | $14,000–$18,400 |
| $0.10/kWh | $17,500–$23,000 |
| $0.15/kWh | $26,300–$34,500 |

Recommended annual maintenance allowance:

> **$12,000–$25,000 per year**

### 13. Safety requirements

The plant must include:

- Fixed oxygen-deficiency monitors.
- Audible and visual low-oxygen alarms.
- Normal and emergency ventilation.
- Relief valves on every trapped-liquid and isolated-gas section.
- Safe elevated vent discharge.
- Cryogenic PPE and filling-area barriers.
- Emergency-stop stations at the plant and user outlet.
- Pressure-rated guards around the cryogenic pump.
- Gas detection and ventilation interlocks.
- Pipeline identification and controlled access.
- Written lockout, cooldown, startup and maintenance procedures.

### 14. Final recommended purchase specification

> Supply one fully automatic, PLC-controlled, integrated liquid-nitrogen production and high-pressure gaseous-nitrogen supply system. Net liquid-nitrogen capacity shall be not less than 30 L/h and 500 L/day at the specified site conditions. Product quality shall be N₂ + Ar ≥99.7 vol%, O₂ ≤0.3 vol%, unless the supplier provides a separately guaranteed true N₂ mass analysis. The system shall include a 3,000 L vacuum-insulated storage tank, low-pressure liquid dispensing point, 100–150 L/h cryogenic piston pump, 100 Nm³/h high-pressure vaporizer, high-pressure receiver, 15 MPa pressure-control skid, approximately 500 m high-pressure pipeline, endpoint control station, oxygen monitoring, PLC/HMI, MCC, commissioning, training and documentation.

Main recommendation:

> **Chinese 30 L/h integrated liquefier with reputable compressor, Siemens/Schneider controls, 3 m³ certified cryogenic tank and a certified 20 MPa high-pressure gasification skid.**

---

## Question 2

> In the above nitrogen production process scheme, the compressor and nitrogen manufacturing equipment are divided into Chinese and European, respectively, to yield the equipment name, technical specifications and equipment cost budget. Provide equipment name, technical specifications and equipment cost budget.

## Response 2 — Chinese vs. European Equipment Budget

### Design basis

- 500 L/day LN₂
- 99.5% minimum purity
- Intermittent operation
- 380 V, 3-phase, 50 Hz
- PLC control

A **30 L/h Chinese plant** would operate about **16.7 hours/day**. A European configuration around **48 L/h** would operate about **10.4 hours/day**.

All prices below are budgetary equipment prices in USD, normally EXW/FOB, excluding taxes, freight, civil works and installation. Accuracy should be treated as approximately **±30%**.

### 1. Air-compressor comparison

| Item | Chinese selection | European selection |
|---|---|---|
| Recommended equipment | **HANDE HD‑VPM22** permanent-magnet VSD screw compressor | **Atlas Copco GA 22 VSDs Full Feature** |
| Manufacturer origin | China | Belgium/European brand |
| Compressor type | Oil-injected, permanent-magnet variable-speed screw | Oil-injected variable-speed screw |
| Motor power | 22 kW | 22 kW |
| Air delivery | Up to 3.6 m³/min | 0.97–5.00 m³/min at 7 bar |
| Operating pressure | 7–12.5 bar | 4–13 bar versions; select 7–10 bar |
| Electrical supply | 380 V, 3-phase, 50 Hz | Specify 380–400 V, 3-phase, 50 Hz |
| Cooling | Air-cooled | Air-cooled |
| Dryer | Separate or integrated Chinese dryer | Integrated refrigeration dryer in Full Feature version |
| Noise | Vendor confirmation required | Approximately 63 dB(A) |
| Approximate dimensions | Approximately 1.3 × 0.9 × 1.2 m | 0.87 × 1.33 × 1.73 m |
| Controls | Local PLC/VFD controller | Elektronikon touchscreen controller |
| Bare compressor budget | **$4,000–$7,000** | **$18,000–$25,000** |
| Compressor with dryer and filters | **$8,000–$13,000** | **$23,000–$32,000** |

Recommended compressor choice:

- Lowest capital cost: **HANDE or equivalent Chinese 22 kW VSD package**
- Better reliability and international service: **Atlas Copco GA 22 VSDs FF**

### 2. Chinese nitrogen-production package

#### Recommended Chinese modular configuration

| No. | Equipment name | Recommended technical specification | Budget |
|---:|---|---|---:|
| 1 | **HANDE HD‑VPM22 air compressor** | 22 kW; 3.6 m³/min; 7–12.5 bar; VSD; 380 V/50 Hz | $4,000–$7,000 |
| 2 | Refrigerated dryer and prefilters | 4 m³/min; pressure dew point approximately +3°C; automatic drains | $2,000–$4,000 |
| 3 | Adsorption dryer package | 2.5–3.0 m³/min; outlet pressure dew point ≤−40°C, preferably −60°C | $4,000–$7,000 |
| 4 | Air receiver | 1.0 m³; design pressure ≥1.0 MPa; safety valve and automatic drain | $1,500–$3,000 |
| 5 | **RICH BGPN295-series PSA nitrogen generator** | Custom 23–25 Nm³/h at 99.5%; outlet 0.6–0.8 MPa; dew point ≤−45°C; PLC | $15,000–$27,000 |
| 6 | Nitrogen buffer tank | 1.0 m³; 1.0 MPa; pressure transmitter and relief valve | $1,500–$3,000 |
| 7 | Oxygen/purity analyzer | Continuous O₂ analysis; automatic off-spec vent; 4–20 mA/Modbus output | $3,000–$6,000 |
| 8 | **NUZHUO 30 L/h LN₂ liquefier** | 30 L/h net LN₂; 99.5% minimum; cryogenic cycle; PLC automatic operation | $75,000–$120,000 |
| 9 | Industrial water chiller | Approximately 40–70 kW cooling capacity; dual pumps preferred | $15,000–$25,000 |
| 10 | 3,000 L LN₂ storage tank | Vacuum-insulated; 1.6 MPa maximum allowable pressure; level and pressure instruments | $25,000–$45,000 |
| 11 | Common PLC/MCC integration | Siemens S7‑1200 or equivalent; HMI; alarms; tank-level automatic start/stop | $10,000–$18,000 |
| 12 | Interconnecting process piping | Compressed air, nitrogen, cooling water and vacuum-insulated LN₂ piping within the plant | $10,000–$20,000 |

#### Chinese equipment subtotal

| Scope | Budget |
|---|---:|
| Compressor and complete air-treatment package | **$12,000–$21,000** |
| PSA gas-generation section | **$20,000–$36,000** |
| 30 L/h liquefier and chiller | **$90,000–$145,000** |
| 3,000 L tank, PLC and internal piping | **$45,000–$83,000** |
| **Total Chinese nitrogen-production equipment** | **$167,000–$285,000** |

Practical negotiated target:

> **$190,000–$230,000 equipment-only**

### 3. European nitrogen-production package

#### Recommended premium integrated system

**Stirling Cryogenics StirLIN‑4 Extendible**

The package incorporates:

- Air compressor
- Air dryer
- PSA nitrogen generator
- Stirling cryogenerator
- LN₂ storage tank
- PLC control panel
- Internal piping and supporting frames

| Parameter | StirLIN‑4 Extendible specification |
|---|---|
| Manufacturer | Stirling Cryogenics B.V., Netherlands |
| Equipment | StirLIN‑4 Extendible integrated LN₂ plant |
| Guaranteed selection | 48 L/h at approximately 99.7% nitrogen plus inerts |
| Daily output at 24 hours | Approximately 1,152 L/day |
| Required runtime for 500 L | Approximately 10.4 hours/day |
| Installed power | Approximately 77 kW, excluding optional chiller |
| Cooling-water circulation | Approximately 4,500 L/h |
| Electrical supply | Configurable 200–480 V, 50/60 Hz, 3-phase |
| Control | Fully automatic PLC |
| Noise | Approximately 72 dB(A) |
| Plant dimensions | Approximately 4.90 × 4.35 × 2.00 m |
| Plant weight | Approximately 4,150 kg |
| Standard storage | Up to approximately 2,000 L |
| Recommended project storage | Upgrade or add separate 3,000 L storage |
| Routine maintenance interval | Approximately 8,000 operating hours |
| Estimated integrated equipment price | **$400,000–$550,000** |
| Optional chiller | **$35,000–$60,000** |
| 3,000 L external storage upgrade | **$35,000–$60,000** |
| Commissioning and initial spares | **$25,000–$45,000** |

#### European equipment subtotal

| Scope | Budget |
|---|---:|
| StirLIN‑4 Extendible integrated production plant | **$400,000–$550,000** |
| Closed-loop chiller | **$35,000–$60,000** |
| Storage upgrade to approximately 3,000 L | **$35,000–$60,000** |
| Initial spares, commissioning and training | **$25,000–$45,000** |
| **Total European nitrogen-production equipment** | **$495,000–$715,000** |

Practical European target:

> **$550,000–$650,000 equipment-only**

### 4. European split-system alternative

| Equipment | Technical specification | Budget |
|---|---|---:|
| **Atlas Copco GA 22 VSDs FF** | 22 kW; 58–300 m³/h at 7 bar; integrated refrigeration dryer | $23,000–$32,000 |
| Desiccant dryer and filters | 1.5–2.0 m³/min usable dry-air capacity; PDP ≤−40°C | $12,000–$20,000 |
| **Atlas Copco NGP 20 PSA** | 23 Nm³/h at 99.5%; dimensions 1.267 × 1.050 × 1.850 m; weight approximately 770 kg | $35,000–$55,000 |
| European 30–35 L/h custom liquefaction module | Net 30 L/h minimum; PLC; water-cooled; purity ≥99.5% | $250,000–$400,000 |
| Chiller and 3,000 L storage | Closed-loop chiller plus certified cryogenic tank | $70,000–$120,000 |
| **Split European subtotal** |  | **$390,000–$627,000** |

### 5. Side-by-side summary

| Parameter | Chinese modular package | European integrated package |
|---|---:|---:|
| Nominal LN₂ production | 30 L/h | 48 L/h |
| Product purity | Specify ≥99.5% | Approximately 99.7% at selected operating point |
| Daily runtime for 500 L | 16.7 h | 10.4 h |
| Main compressor | Chinese 22 kW VSD | Included in StirLIN package |
| Approximate connected load | 50–70 kW | Approximately 77 kW plus chiller |
| Storage | Separate 3,000 L tank | Standard up to 2,000 L; upgrade recommended |
| Controls | Siemens/local PLC | European integrated PLC |
| Equipment budget | **$167,000–$285,000** | **$495,000–$715,000** |
| Recommended purchasing allowance | **$220,000** | **$600,000** |
| Warranty/service | Vendor-dependent | Strong international service support |
| Best advantage | Lowest capital cost | Reliability and single-system responsibility |
| Main disadvantage | Greater supplier-quality risk | High capital and energy cost |

### 6. Recommended cost-performance configuration

The most sensible SME configuration is the **hybrid option**:

| Equipment origin | Selection |
|---|---|
| Main compressor | Atlas Copco GA 22 VSDs FF |
| PSA generator | Chinese RICH BGPN295-series, 23–25 Nm³/h |
| LN₂ liquefier | Chinese NUZHUO 30 L/h industrial package |
| PLC | Siemens S7‑1200 |
| Chiller | Reputable Chinese industrial chiller |
| LN₂ storage tank | Certified Chinese 3,000 L tank |
| Recommended budget | **$190,000–$270,000 equipment-only** |

Additional downstream high-pressure system allowance:

- **Chinese/high-value execution:** $150,000–$260,000
- **European premium execution:** $250,000–$420,000

---

## Question 3

> Please provide a list of the single integrated nitrogen production system (combined compressor and nitrogen maker), technical specifications, equipment layout, pipeline arrangement, cost budget, etc.  
> The compressor and nitrogen manufacturing equipment can be divided into Chinese and European, respectively.

## Response 3 — Integrated Liquid-Nitrogen Production and 15 MPa Supply System

### 1. Design basis

| Requirement | Design value |
|---|---:|
| LN₂ production | 500 L/day |
| Annual production | 150,000 L/year |
| Product purity | ≥99.5% |
| Operating mode | Intermittent, automatic tank-level control |
| Electrical supply | 380 V, 3-phase, 50 Hz |
| Control | PLC/HMI |
| Gas delivery pressure | 15 MPa at the user outlet |
| Pipeline length | Approximately 500 m |
| Preliminary gas flow | 40–50 Nm³/h normal; 80 Nm³/h design peak |

A 30 L/h machine needs approximately:

\[
500\div30=16.7\text{ operating hours/day}
\]

The 500 L/day LN₂ production is equivalent to approximately **404 kg/day** or **323 Nm³/day of gaseous nitrogen**.

### 2. Recommended system architecture

```text
MODULE A — INTEGRATED LN₂ PRODUCTION PACKAGE
Air compressor
 → air purification and dryer
 → PSA/membrane nitrogen generator
 → purity analyzer and off-spec vent
 → nitrogen liquefier
 → PLC/HMI

MODULE B — STORAGE AND 15 MPa GASIFICATION SKID
3,000 L LN₂ tank
 → high-pressure cryogenic liquid pump
 → high-pressure ambient vaporizer
 → trim heater
 → high-pressure receiver
 → pressure-control/ESD skid

MODULE C — DISTRIBUTION
500 m high-pressure nitrogen pipeline
 → endpoint pressure-control skid
 → 15 MPa valve-controlled outlet
```

The compressor, dryer, nitrogen generator, liquefier and PLC can be integrated into one production package. The **15 MPa pump, vaporizer and receiver should remain a separate outdoor high-pressure skid**.

---

## 3. Chinese integrated system

### Recommended equipment

> **LDH GAS LPLN-720 integrated liquid-nitrogen generator, project-modified for guaranteed 99.5% purity**, or equivalent Chinese industrial package.

The published LPLN-720 rating is 30 L/h, 720 L/day, 55 kW, 380 V three-phase 50 Hz, with an approximate envelope of 8.0 × 1.7 × 2.3 m.

### 3.1 Technical specification

| Parameter | Recommended specification |
|---|---|
| Equipment name | LPLN-720 integrated LN₂ production package |
| Origin | China |
| Net LN₂ capacity | 30 L/h minimum |
| Daily capacity | 720 L/day at 24-hour operation |
| Required operation | Approximately 16.7 h/day for 500 L |
| Nitrogen purity | Contract guarantee ≥99.5% |
| LN₂ temperature | Approximately −196°C |
| Integrated air compressor | Screw compressor, approximately 18.5–22 kW |
| Air treatment | Aftercooler, filters, refrigerated or adsorption dryer |
| Nitrogen generation | PSA or membrane package matched to liquefier |
| Approximate gas capacity | 20–25 Nm³/h nitrogen feed |
| Product analyzer | Continuous oxygen analyzer with off-spec vent |
| Connected load | Approximately 55 kW |
| Electrical supply | 380 V, 3-phase, 50 Hz |
| Control | PLC, touchscreen HMI, Modbus/Ethernet |
| Cooling | Water-cooled; closed-loop chiller recommended |
| Ambient temperature | Approximately 0–30°C |
| Noise | Below approximately 78 dB(A) |
| Package dimensions | Approximately 8.0 × 1.7 × 2.3 m |
| Recommended indoor room | Minimum approximately 12 × 5 × 3.5 m |
| Project storage | Separate 3,000 L tank recommended |

#### Required contractual guarantees

- 30 L/h **net liquid output**, excluding startup cooldown losses.
- ≥99.5% product purity at rated output.
- Capacity guaranteed at actual summer ambient temperature.
- Automatic off-spec venting.
- Tank-level automatic start and stop.
- Automatic restart after controlled power recovery.
- Compressor, dryer, filters, nitrogen generator and liquefier included.
- Factory acceptance test for at least eight continuous hours.
- Recorded LN₂ production by calibrated tank weight or liquid-flow measurement.

### 3.2 Chinese production-package budget

| Equipment | Budget, USD |
|---|---:|
| Integrated compressor, purification, nitrogen generator and liquefier | $100,000–$150,000 |
| Closed-loop industrial chiller | $15,000–$25,000 |
| Oxygen analyzer and automatic off-spec vent | $4,000–$8,000 |
| PLC/MCC upgrades and remote monitoring | $8,000–$15,000 |
| 3,000 L vacuum-insulated LN₂ storage tank | $25,000–$45,000 |
| Internal air, cooling-water and vacuum-jacketed LN₂ piping | $10,000–$20,000 |
| Initial spares and commissioning assistance | $10,000–$20,000 |
| **Chinese production and storage subtotal** | **$172,000–$283,000** |

---

## 4. European integrated system

### Recommended equipment

> **Stirling Cryogenics StirLIN-2 integrated liquid-nitrogen plant**

The StirLIN production package includes the air compressor, air dryer, PSA generator, Stirling cryogenerator, LN₂ storage vessel, control box, frames and associated internal equipment.

### 4.1 Technical specification

| Parameter | StirLIN-2 |
|---|---:|
| Manufacturer | Stirling Cryogenics B.V., Netherlands |
| Integrated system | Compressor, dryer, PSA, liquefier, tank and PLC |
| Production at 1 barg | 23 L/h at 99% N₂ + inerts |
| Recommended production point | **29 L/h at 3 barg and 99.5% N₂ + inerts** |
| Production at 5 barg | 33 L/h at 99.5% N₂ + inerts |
| Required operation at 29 L/h | Approximately 17.2 h/day |
| Power consumption | 34 kW, excluding optional chiller |
| Electrical supply | Configurable 200–480 V, 50/60 Hz |
| Project supply | Specify 380 V, 3-phase, 50 Hz |
| Cooling-water circulation | Approximately 2,000 L/h |
| Noise | Approximately 74 dB(A) |
| Dimensions | Approximately 3.5 × 3.5 × 1.8 m |
| Recommended room | Approximately 5.0 × 4.8 × 3.0 m |
| Weight | Approximately 2,200 kg |
| Standard storage | 1,000 L |
| Storage maximum pressure | Up to 5 barg |
| Control | Fully automatic PLC |
| Maintenance interval | Approximately 8,000 operating hours |

### Storage recommendation

The standard 1,000 L storage vessel provides only about two days of nominal reserve. Add:

- One external 3,000 L tank; or
- A minimum 2,000 L supplementary tank.

### 4.2 European production-package budget

| Equipment | Budget, USD |
|---|---:|
| StirLIN-2 integrated production package with standard tank | $300,000–$430,000 |
| Closed-loop European chiller | $35,000–$60,000 |
| External 3,000 L storage tank or storage upgrade | $40,000–$70,000 |
| Remote monitoring, automatic transfer and handling package | $20,000–$40,000 |
| Initial spares, commissioning and operator training | $25,000–$45,000 |
| **European production and storage subtotal** | **$420,000–$645,000** |

---

## 5. Common 15 MPa gaseous-nitrogen supply equipment

### 5.1 Equipment list

| No. | Equipment | Technical specification | Typical dimensions |
|---:|---|---|---|
| 1 | LN₂ storage tank | 3,000 L gross; 2,500–2,700 L usable; vacuum-insulated; approximately 1.6 MPa MAWP | About 2.2 × 2.2 × 3.2 m |
| 2 | Vacuum-jacketed liquid line | DN15/DN20; tank to pump; keep as short as practical | Site-dependent |
| 3 | Cryogenic liquid pump | 80–150 L/h; adjustable discharge 0–16.5 MPa or higher; VFD or recycle control | About 1.8 × 1.0 × 1.5 m |
| 4 | Pump cooldown/return circuit | Cryogenic valve, bypass and return to storage tank | Skid mounted |
| 5 | High-pressure vaporizer | 100 Nm³/h; design pressure ≥20 MPa; dual 50% banks preferred | About 1.5 × 1.5 × 3.5 m per bank |
| 6 | Electric trim heater | 80–100 Nm³/h; outlet temperature maintained above 5°C | About 1.2 × 0.8 × 1.4 m |
| 7 | High-pressure receiver | 0.3–0.5 m³; design pressure ≥20 MPa | About Ø0.8–1.0 × 3.0 m |
| 8 | Pressure-control skid | Filter, check valve, regulator, transmitters, ESD valve and relief valves | About 2.0 × 1.2 × 1.8 m |
| 9 | Oxygen-deficiency monitors | Fixed room monitors with audible/visual alarm and ventilation interlock | Wall mounted |
| 10 | Endpoint skid | ESD valve, filter, regulator, gauge, transmitter, relief valve and outlet valve | About 1.5 × 0.8 × 1.8 m |

### 5.2 Process arrangement

```text
3,000 L LN₂ STORAGE TANK
          │
          │ Short vacuum-jacketed liquid line
          ▼
HIGH-PRESSURE CRYOGENIC PUMP
80–150 L/h, discharge approximately 16 MPa
          │
          ├── Cooldown/recirculation return to tank
          ▼
CHECK VALVE + PULSATION CONTROL
          ▼
HIGH-PRESSURE AMBIENT VAPORIZER
100 Nm³/h, design pressure ≥20 MPa
          ▼
ELECTRIC TRIM HEATER
          ▼
0.3–0.5 m³ HIGH-PRESSURE RECEIVER
          ▼
PLANT PRESSURE-CONTROL/ESD SKID
15.5–16.0 MPa
          ▼
500 m HIGH-PRESSURE PIPELINE
          ▼
ENDPOINT CONTROL SKID
          ▼
15.0 MPa VALVE-CONTROLLED OUTLET
```

### 5.3 High-pressure equipment budget

| Equipment | Chinese/value package | European/premium package |
|---|---:|---:|
| Cryogenic liquid-pump skid | $20,000–$35,000 | $45,000–$75,000 |
| Dual-bank HP vaporizer | $15,000–$30,000 | $30,000–$55,000 |
| Trim heater | $8,000–$15,000 | $15,000–$25,000 |
| 20 MPa receiver | $20,000–$40,000 | $35,000–$60,000 |
| Pressure-control and ESD skid | $20,000–$35,000 | $35,000–$60,000 |
| Cryogenic valves and vacuum line | $10,000–$20,000 | $20,000–$35,000 |
| **High-pressure skid subtotal** | **$93,000–$175,000** | **$180,000–$310,000** |

---

## 6. Equipment layout

### 6.1 Chinese package layout

```text
                  PROPOSED PLOT: ABOUT 18 m × 10 m

┌──────────────────── PRODUCTION BUILDING ─────────────────────┐
│                                                              │
│  Air intake                                                   │
│     ↓                                                        │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ Chinese integrated LN₂ package                          │ │
│ │ Compressor + dryer + N₂ generator + liquefier + PLC    │ │
│ │ Approx. 8.0 × 1.7 × 2.3 m                              │ │
│ └──────────────────────────────────────────────────────────┘ │
│                                                             │
│  MCC/PLC panel       Maintenance aisle       Purity analyzer│
└─────────────────────────────────────────────────────────────┘
             │
             │ Vacuum-insulated LN₂ transfer
             ▼
┌────────────────────── OUTDOOR AREA ──────────────────────────┐
│                                                             │
│ [3,000 L tank] → [HP pump] → [Vaporizer A/B] → [Receiver]   │
│                                                   │         │
│                                             [ESD skid]       │
└───────────────────────────────────────────────────┼─────────┘
                                                    │
                                                500 m pipeline
```

### 6.2 European package layout

```text
┌────────────── PRODUCTION ROOM, MIN. ABOUT 5 × 4.8 m ─────────┐
│                                                             │
│       StirLIN-2 integrated package                          │
│       3.5 × 3.5 × 1.8 m                                    │
│                                                             │
│       Compressor + dryer + PSA + liquefier                  │
│       + 1,000 L storage + PLC                               │
└─────────────────────────────────────────────────────────────┘
              │
              ├── Optional external chiller
              │
              ▼
      [Supplementary 3,000 L tank]
              │
         [HP pump skid]
              │
      [Vaporizer + heater]
              │
        [Receiver + ESD]
              │
         500 m pipeline
```

### 6.3 Clearance requirements

Provide:

- At least 1.0–1.5 m maintenance clearance around production equipment.
- At least 3 m access beside the external storage tank.
- Crane or overhead removal access for liquefier maintenance.
- Outdoor or open-sided installation for vaporizers.
- Vehicle-impact barriers around the tank, pump and control valves.
- Separate electrical and high-pressure maintenance zones.

---

## 7. 500 m high-pressure pipeline arrangement

### 7.1 Preliminary specification

| Parameter | Recommendation |
|---|---|
| Fluid | Dry gaseous nitrogen |
| Normal outlet pressure | 15.0 MPa |
| Plant line pressure | Approximately 15.5–16.0 MPa |
| Mechanical design pressure | Minimum 20 MPa |
| Pipeline size | Preliminary DN20 / ¾ inch |
| Material option 1 | ASTM A106 Grade B seamless carbon steel |
| Material option 2 | 316L seamless stainless steel |
| Preliminary wall | Schedule 160, subject to final stress calculation |
| Main joints | Full-penetration butt welds |
| Ordinary threaded joints | Not recommended |
| Valve pressure class | Class 2500 or explicitly rated above design pressure |
| Installation | Above ground preferred |
| Examination | Visual examination plus code-required RT/UT |
| Pressure test | Code-compliant hydrostatic test |
| Cleaning | Dry, oil-free and particle-free |
| Marking | “HIGH-PRESSURE NITROGEN — 15 MPa” with flow arrows |

### 7.2 Valve and instrument arrangement

```text
PLANT SKID
  │
  ├─ PT-101 pressure transmitter
  ├─ XV-101 remote ESD valve
  ├─ NRV-101 non-return valve
  ├─ PSV-101 relief valve
  │
  ═══════ DN20 WELDED PIPELINE ═════════════════════════
              │
              ├─ Manual sectional valve near midpoint
              ├─ Relief protection for trapped sections
              ├─ Expansion loops/offsets
              └─ Route identification markers
  ═══════════════════════════════════════════════════════
  │
ENDPOINT SKID
  ├─ XV-201 remote ESD valve
  ├─ Fine filter
  ├─ Pressure regulator
  ├─ PT-201 pressure transmitter
  ├─ Local pressure gauge
  ├─ PSV-201 relief valve
  ├─ Non-return valve
  └─ User valve: 15.0 MPa
```

Above-ground installation is recommended for easier leak detection, inspection and maintenance.

---

## 8. PLC operating sequence

### LN₂ production control

```text
Tank level below 35%
    → start chiller
    → start compressor and dryer
    → verify nitrogen purity
    → vent off-spec gas
    → start liquefier when purity is acceptable

Tank level above 90%
    → stop nitrogen feed
    → execute liquefier controlled shutdown
    → stop compressor after purge sequence
```

### High-pressure gas-supply control

```text
Receiver pressure below approximately 14.5 MPa
    → open vaporizer path
    → start cryogenic pump

Receiver pressure reaches approximately 15.8 MPa
    → stop pump
    → close supply control valve

Low vaporizer outlet temperature
    → start trim heater
    → reduce pump rate if temperature remains low

Pipeline rupture/high-flow alarm
    → stop cryogenic pump
    → close both ESD valves
```

---

## 9. Complete cost comparison

### 9.1 Chinese turnkey project

| Scope | Budget, USD |
|---|---:|
| Integrated production package and chiller | $127,000–$218,000 |
| 3,000 L storage and internal piping | $35,000–$65,000 |
| 15 MPa pump, vaporizer, receiver and control skid | $93,000–$175,000 |
| 500 m pipeline materials, valves and supports | $45,000–$80,000 |
| Pipeline fabrication, NDE and testing | $35,000–$70,000 |
| Civil, electrical and ventilation work | $30,000–$60,000 |
| Freight, commissioning and training | $20,000–$40,000 |
| Contingency | $30,000–$50,000 |
| **Estimated Chinese installed total** | **$415,000–$758,000** |

Sensible planning allowance:

> **Approximately $500,000–$550,000 before taxes and import duties.**

### 9.2 European turnkey project

| Scope | Budget, USD |
|---|---:|
| StirLIN-2, chiller and storage expansion | $420,000–$645,000 |
| European HP pump, vaporizer and receiver skid | $180,000–$310,000 |
| Premium pipeline materials and valves | $60,000–$100,000 |
| Pipeline fabrication, NDE and testing | $45,000–$80,000 |
| Civil, electrical and ventilation work | $40,000–$75,000 |
| International freight and commissioning | $40,000–$80,000 |
| Contingency | $50,000–$90,000 |
| **Estimated European installed total** | **$835,000–$1,380,000** |

Sensible planning allowance:

> **Approximately $950,000–$1,050,000 before taxes and import duties.**

These are feasibility-level estimates with expected accuracy of roughly **±30%**.

---

## 10. Comparison and recommendation

| Criterion | Chinese LPLN-720 package | European StirLIN-2 |
|---|---|---|
| Nominal LN₂ output | 30 L/h | 29 L/h at selected 99.5% point |
| Daily operating time | 16.7 h | 17.2 h |
| Purity | Must be contractually upgraded and guaranteed | Published 99.5% N₂ + inerts at 3 barg |
| Power | Approximately 55 kW | 34 kW excluding chiller |
| Integrated compressor | Yes | Yes |
| Integrated dryer/N₂ maker | Yes | Yes |
| Standard storage | Supplier-dependent | 1,000 L |
| Package dimensions | Approximately 8.0 × 1.7 × 2.3 m | Approximately 3.5 × 3.5 × 1.8 m |
| Capital cost | Lower | Much higher |
| Energy efficiency | Moderate | Better |
| Documentation | Vendor-dependent | Strong |
| Worldwide service | Limited by vendor | Strong |
| Recommended for | Cost-sensitive SME | Critical-duty premium installation |

### Recommended configuration

For the stated SME and cost-performance objective, select:

> **Chinese 30 L/h integrated production package, with Siemens PLC, reputable screw compressor, certified 3,000 L storage tank and a separately certified 20 MPa gasification skid.**

The purchase should require:

- Guaranteed 30 L/h after cooldown.
- Guaranteed purity.
- Compressor manufacturer and model.
- Complete P&ID and electrical load list.
- Pressure-vessel certificates.
- Eight-hour FAT.
- Two years of critical spares.
- Remote diagnostics.
- Local commissioning engineer.
- Clear performance remedies if output or purity is not achieved.

### Critical purity condition

The RFQ should state one of these explicitly:

1. **Commercial nitrogen purity:** N₂ + Ar ≥99.5%, O₂ ≤0.5%; or
2. **True nitrogen purity:** molecular N₂ ≥99.5% by mass, with argon separately measured.

The second requirement can require special separation or purification and will increase capital cost and energy consumption.

---

## Question 4

> Can you write all these discussions, including my questions, into a Markdown file and give me a download?

This Markdown file is the requested record.
