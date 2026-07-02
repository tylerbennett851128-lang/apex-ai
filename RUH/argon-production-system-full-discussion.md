# Industrial Argon Production System — Full Discussion

**Date:** 2026-07-02  
**Scope:** Complete discussion covering the user's questions and the proposed technical solutions for a small-scale industrial argon-production and high-pressure storage system.

---

## Question 1

> We need to propose a system that meets below specs and is affordable with high cost-performance. Provide equipment specifications, external dimensions, layout diagram, pipe installation plan, cost etc.
>
> We need to propose an industrial argon production system for small-scale (3500 m3/year, 12 m3/day), 99.5% purity. Production is intermittent.
>
> Argon storage pressure 15MPa (~150 bar). Use PLC control, 3 phase 380v power.

## Response 1 — Preliminary proposal: small industrial argon system

### 1. Executive recommendation

At **3,500 Nm³/year, approximately 12 Nm³/day**, constructing a dedicated plant that separates argon directly from atmospheric air is technically possible but economically unattractive.

Argon cannot be produced from air by an ordinary PSA nitrogen or oxygen generator. Commercial argon production requires a **cryogenic air-separation unit with an additional crude/pure argon separation section**. Argon represents only about 0.93% of atmospheric air, and commercial argon-recovery ASUs are normally much larger than this requirement.

The best cost-performance solution is therefore:

> **Liquid-argon microbulk storage → high-pressure cryogenic liquid pump → high-pressure vaporizer → 15 MPa argon storage bank → controlled outlet**

This system behaves like an on-site production system: liquid argon is converted into gaseous argon, pressurized, stored and supplied automatically. It comfortably exceeds the required 99.5% purity because normal commercial industrial argon is typically at least 99.997% pure.

A true atmospheric-air argon-production alternative is included later for comparison.

---

### 2. Design basis

| Parameter | Proposed design basis |
|---|---:|
| Argon purity | ≥99.5%; proposed supply ≥99.997% |
| Annual consumption | 3,500 Nm³/year |
| Daily consumption | 12 Nm³/day |
| Average continuous demand | 0.50 Nm³/h |
| Assumed active production period | 8 hours/day |
| Required active flow | 1.5 Nm³/h |
| Design production flow | 3 Nm³/h normal, 5 Nm³/h maximum |
| Storage pressure | 15 MPa / 150 bar |
| Storage-bank design pressure | 20–25 MPa |
| Electrical supply | 380 V, three-phase, assumed 50 Hz |
| Control | PLC/HMI automatic operation |
| Production mode | Intermittent, demand controlled |
| Installation | Outdoor fenced equipment compound |
| Normal-volume basis | 0°C and 1.013 bar absolute |

Using published microbulk tank capacity data, approximately **14–15 litres of liquid argon per day** are required, or about **4,150 litres per year**. A 700-litre-class vessel can hold approximately 542 Nm³ of argon, equivalent to about 45 days of consumption.

---

### 3. Recommended process

```text
Liquid-argon delivery truck
            │
            ▼
 Remote fill connection
            │
            ▼
 700 L vacuum-insulated
 liquid-argon storage tank
      20–30 bar typical
            │
            │ Vacuum-jacketed liquid line
            ▼
 High-pressure cryogenic
 reciprocating liquid pump
    0–16.5 MPa discharge
            │
            ▼
 High-pressure ambient
 air vaporizer / heater
            │
            ▼
 Non-return valve
 + temperature interlock
            │
            ▼
 Two-bank high-pressure storage
 2 × (4 × 50 L cylinders)
 15 MPa operating pressure
            │
            ▼
 Dual isolation valves
 pressure regulator / flow meter
            │
            ▼
 User argon outlet
```

Pressurizing the argon while it is still liquid requires considerably less mechanical work than vaporizing it first and compressing the gas. High-pressure cryogenic reciprocating pumps are standard equipment for 150- and 200-bar industrial-gas filling stations; commercial models are available for discharge pressures of 280 bar and above.

---

### 4. Equipment specifications

#### 4.1 Main equipment

| No. | Equipment | Preliminary specification | Approximate external dimensions |
|---:|---|---|---|
| 1 | Liquid-argon storage tank | 700 L nominal; approximately 645 L usable; vacuum insulated; design pressure 24–35 bar; argon capacity approximately 542 Nm³ | Ø1,070 × H1,650 mm |
| 2 | Remote filling station | DN25 fill, vent and pressure-equalization connections; lockable cabinet; truck connection | 800 × 500 × 1,200 mm |
| 3 | Cryogenic liquid pump | Reciprocating piston type; LAr service; 10–50 L/h adjustable; discharge 16.5 MPa; VFD motor; automatic cool-down/bypass | 1,400 × 800 × 1,200 mm |
| 4 | High-pressure vaporizer | Ambient-air finned-tube or water-bath type; 5 Nm³/h minimum; 20 MPa design; outlet ≥5°C under rated conditions | 1,200 × 800 × 2,000 mm |
| 5 | High-pressure storage Bank A | Four 50 L seamless cylinders; 20 MPa service; isolation and check valves | 1,200 × 900 × 1,800 mm |
| 6 | High-pressure storage Bank B | Four 50 L seamless cylinders; 20 MPa service; isolation and check valves | 1,200 × 900 × 1,800 mm |
| 7 | High-pressure manifold | 25 MPa minimum; 316L; individual cylinder isolation; bleed valve; pressure transducer and PSV | 1,000 × 350 × 700 mm |
| 8 | Outlet control panel | Inlet 15 MPa; adjustable regulated outlet; flow meter; manual and solenoid isolation valves | 800 × 450 × 1,600 mm |
| 9 | PLC/HMI cabinet | Siemens S7-1200, Schneider M241 or equivalent; 7-inch HMI; IP55; VFD and safety relays | 800 × 400 × 1,800 mm |
| 10 | Purity monitoring | Oxygen analyzer, 0–1%; moisture/dew-point transmitter; sample regulator; optional compact GC for nitrogen verification | 800 × 500 × 1,500 mm |
| 11 | Oxygen-deficiency monitors | Two fixed O₂ monitors, audible beacon and ventilation interlock | Wall/pole mounted |
| 12 | Instrument-air compressor | 7–8 bar, 0.3–0.5 Nm³/min, receiver and dryer, only if pneumatically actuated valves are used | 1,200 × 700 × 1,200 mm |

#### 4.2 High-pressure pump sizing

At the specified demand:

- Daily liquid argon requirement: approximately **14.3 L/day**
- At 20 L/h pump flow: approximately **43 minutes/day**
- At 30 L/h pump flow: approximately **29 minutes/day**
- At 50 L/h pump flow: approximately **17 minutes/day**

The pump should therefore be selected for reliable low-duty-cycle operation rather than maximum capacity.

#### 4.3 High-pressure storage capacity

Each bank contains four 50 L cylinders.

| Storage configuration | Water volume | Nominal gas at 150 bar |
|---|---:|---:|
| One four-cylinder bank | 200 L | Approximately 30 Nm³ |
| Two banks combined | 400 L | Approximately 60 Nm³ |
| Days of storage at 12 Nm³/day | — | Approximately 5 days |

Actual usable capacity depends on the minimum delivery pressure, gas temperature and compressibility. The banks should be rated for at least 20 MPa even though normal operation is limited to 15 MPa.

Two independent banks allow:

- One bank to supply the process while the other is being filled.
- Maintenance without complete shutdown.
- Cascade operation to reduce pump cycling.
- Emergency isolation of a leaking or damaged bank.

---

### 5. Proposed layout

#### 5.1 Plan view

```text
                 OUTDOOR ARGON COMPOUND
        Recommended fenced area: approximately 10 m × 6 m

 ┌──────────────────────────────────────────────────────────────┐
 │                                                              │
 │  Truck-side fill point        700 L liquid-argon tank       │
 │  ┌───────────────┐            ┌─────────────────────┐        │
 │  │ Fill cabinet  │────────────│ Vacuum-insulated    │        │
 │  └───────────────┘            │ storage tank        │        │
 │                               └─────────────────────┘        │
 │                                          │                   │
 │                                          ▼                   │
 │  ┌───────────────────────┐    ┌─────────────────────┐        │
 │  │ PLC / analyzer panel  │    │ Cryogenic pump skid │        │
 │  └───────────────────────┘    └─────────────────────┘        │
 │                                          │                   │
 │                                          ▼                   │
 │                               ┌─────────────────────┐        │
 │                               │ HP vaporizer        │        │
 │                               └─────────────────────┘        │
 │                                          │                   │
 │                          ┌───────────────┴───────────────┐   │
 │                          ▼                               ▼   │
 │                  ┌──────────────┐                ┌──────────┐│
 │                  │ Bank A       │                │ Bank B   ││
 │                  │ 4 × 50 L     │                │ 4 × 50 L││
 │                  └──────────────┘                └──────────┘│
 │                          └───────────────┬───────────────┘   │
 │                                          ▼                   │
 │                                  Outlet control panel        │
 │                                          │                   │
 └──────────────────────────────────────────┼───────────────────┘
                                            ▼
                                    Argon user pipeline
```

#### 5.2 Space requirements

| Area | Recommended size |
|---|---:|
| Equipment footprint | Approximately 8 m × 4 m |
| Fenced compound including access | Approximately 10 m × 6 m |
| Tank maintenance clearance | At least 1.0 m around tank |
| Pump maintenance aisle | At least 1.2 m |
| Cylinder-bank access aisle | At least 1.2 m |
| Truck filling access | Approximately 3.5 m clear roadway |
| Vent outlet height | Above nearby personnel and air-intake level |

The concrete slab should be level, reinforced and designed using the fully loaded tank, cylinder-bank and seismic/wind loads applicable to the installation country.

---

### 6. Piping installation plan

#### 6.1 Cryogenic piping

| Line | Proposed material and size |
|---|---|
| Delivery-truck fill line | DN25 vacuum-jacketed 304L/316L stainless steel |
| Tank liquid outlet to pump | DN15–DN20 vacuum-jacketed stainless steel |
| Pump cool-down return | DN10–DN15 vacuum-jacketed stainless steel |
| Tank vent | DN20 minimum, routed vertically to a safe outdoor point |
| Pressure-builder circuit | Vendor-supplied tank piping |

Important requirements:

- Keep the tank-to-pump suction line as short and straight as practical, preferably below 3 m.
- Avoid high points that can trap gas and cause pump cavitation.
- Install a thermal relief valve between every pair of valves capable of trapping liquid argon.
- Use flexible vacuum-jacketed sections where necessary to accommodate vibration and thermal contraction.
- Do not use ordinary carbon-steel piping for liquid-argon service.
- Route vent and relief discharges away from doors, walkways and ventilation intakes.

#### 6.2 High-pressure piping

| Section | Proposed specification |
|---|---|
| Pump to vaporizer | 316L seamless tube, approximately 10–12 mm OD |
| Vaporizer to storage bank | 316L seamless tube, approximately 12 mm OD |
| Storage manifold | 316L seamless tube or forged manifold, 25 MPa minimum |
| User outlet | ½-inch or ¾-inch 316L, depending on peak user flow |
| Valves | Needle/ball valves specifically rated for argon and ≥25 MPa |
| Fittings | Cone-and-thread or certified double-ferrule fittings rated ≥25 MPa |
| Pressure gauges | 0–25 MPa, safety-pattern gauges |
| Transmitters | 0–20 or 0–25 MPa, 4–20 mA |
| Check valves | Pump discharge, each storage bank and outlet branch |
| Relief valves | Individually sized for trapped liquid and gas overpressure cases |

Final tube wall thicknesses, relief-valve settings and test pressures must be calculated by the licensed pressure-system designer and cannot be selected from flow rate alone.

---

### 7. PLC control philosophy

#### 7.1 Normal automatic sequence

```text
Bank pressure falls below 13.5 MPa
                 │
                 ▼
Check tank level and pump suction pressure
                 │
                 ▼
Open pump cool-down/bypass circuit
                 │
                 ▼
Confirm pump cold condition
                 │
                 ▼
Start cryogenic pump at low speed
                 │
                 ▼
Confirm vaporizer outlet temperature is acceptable
                 │
                 ▼
Fill selected storage bank
                 │
                 ▼
Stop at 15.0 MPa
                 │
                 ▼
Close fill valve and return to standby
```

#### 7.2 Suggested control settings

| Function | Preliminary setpoint |
|---|---:|
| Pump start pressure | 13.5 MPa |
| Pump normal stop | 15.0 MPa |
| High-pressure alarm | 15.3 MPa |
| High-high shutdown | 15.5 MPa |
| Mechanical relief setting | Set by code/design engineer, above shutdown but below MAWP |
| Low liquid-level alarm | 20% |
| Pump low-low tank level trip | 10% |
| Low vaporizer outlet temperature alarm | 5°C |
| Low-low vaporizer temperature trip | −10°C to −20°C, confirmed by vendor |
| Oxygen-deficiency warning | 19.5% O₂ |
| Oxygen-deficiency evacuation alarm | Project-specific, commonly around 18% O₂ |

#### 7.3 PLC signals

Inputs:

- Liquid-tank level and pressure
- Pump suction and discharge pressure
- Pump motor current and vibration
- Vaporizer outlet temperature
- Bank A and Bank B pressures
- Outlet pressure and flow
- Oxygen analyzer
- Product O₂ impurity analyzer
- Dew-point transmitter
- Emergency-stop stations
- Gas-leak or enclosure-door switches

Outputs:

- Pump start/stop and VFD speed
- Cryogenic isolation valves
- Bank selection valves
- Outlet solenoid valve
- Alarm beacon and horn
- Mechanical-ventilation start
- Remote shutdown contact
- Low-level delivery request

---

### 8. Purity assurance

Because the recommended system uses certified liquid argon, no molecular separation or purification stage is normally required.

Recommended quality controls:

| Measurement | Method |
|---|---|
| Supplier purity | Certificate of analysis for each delivery |
| Oxygen impurity | Online trace or percent-level oxygen analyzer |
| Moisture | Online dew-point transmitter |
| Nitrogen impurity | Periodic laboratory GC or optional online compact GC |
| Product sampling | Sample valve downstream of vaporizer |
| Contamination prevention | Dedicated argon tank, pump, hoses and manifold |

---

### 9. Electrical load

| Consumer | Estimated installed power |
|---|---:|
| Cryogenic pump | 2.2–5.5 kW |
| Instrument-air compressor | 2.2–4 kW |
| PLC, analyzers and instruments | 0.5–1.0 kW |
| Ventilation and lighting | 1–2 kW |
| Optional electric trim heater | 3–6 kW |
| Total connected load | Approximately 9–18 kW |
| Normal simultaneous demand | Approximately 5–10 kW |

Recommended incoming supply:

- 380 V, three-phase, 50 Hz
- 32–50 A feeder, depending on heater and compressor selection
- Dedicated protective earth
- Local lockable isolator
- Surge protection and phase-loss relay
- UPS for PLC, analyzers and controlled shutdown

---

### 10. Budgetary cost estimate

These are preliminary engineering allowances, not vendor quotations. Prices exclude taxes, import duties and long-distance freight.

#### 10.1 Recommended microbulk system

| Equipment | Cost-effective Asian sourcing | European/US premium sourcing |
|---|---:|---:|
| 700 L liquid-argon tank and fill system | $15,000–25,000 | $30,000–50,000 |
| Cryogenic liquid pump skid | $10,000–20,000 | $30,000–60,000 |
| High-pressure vaporizer | $4,000–8,000 | $9,000–18,000 |
| Two 4-cylinder storage banks | $8,000–15,000 | $15,000–28,000 |
| High-pressure manifold and outlet panel | $6,000–12,000 | $12,000–22,000 |
| PLC, HMI and electrical cabinet | $7,000–14,000 | $15,000–28,000 |
| Purity and oxygen-deficiency monitoring | $6,000–12,000 | $12,000–25,000 |
| Cryogenic and HP piping | $8,000–16,000 | $15,000–30,000 |
| Civil works, fence and ventilation | $8,000–16,000 | $12,000–25,000 |
| Installation, testing and commissioning | $10,000–20,000 | $20,000–40,000 |
| **Estimated installed total** | **$82,000–158,000** | **$170,000–326,000** |

A realistic target for an affordable, mixed-origin package is approximately:

> **USD 100,000–140,000 installed**, excluding taxes, freight and the initial argon inventory.

#### 10.2 Operating cost

Annual consumption is 3,500 Nm³. The planning formula is:

```text
Annual argon cost
= 3,500 Nm³ × delivered local argon price per Nm³
```

Using a provisional delivered price allowance of $0.60–$2.00/Nm³:

| Item | Estimated annual cost |
|---|---:|
| Liquid argon | $2,100–7,000 |
| Electricity | $300–1,000 |
| Preventive maintenance | $2,000–5,000 |
| Analyzer calibration | $500–1,500 |
| Total estimated operating cost | $4,900–14,500/year |

Local delivery distance, tank rental arrangements and supplier minimum-delivery charges can affect the argon cost more than electricity usage.

---

### 11. True on-site argon production from air

#### 11.1 Process required

```text
Atmospheric air
      │
      ▼
Air filter and compressor
      │
      ▼
Aftercooler and water separator
      │
      ▼
Molecular-sieve purification
      │
      ▼
Plate-fin cryogenic heat exchanger
      │
      ▼
Expansion turbine / refrigeration
      │
      ▼
High- and low-pressure distillation columns
      │
      ├────────► Nitrogen product
      │
      ├────────► Oxygen product
      │
      ▼
Argon-rich side draw
      │
      ▼
Crude argon column
      │
      ▼
Pure argon column or deoxo/dryer purification
      │
      ▼
Argon buffer
      │
      ▼
High-pressure compressor or liquid pump
      │
      ▼
15 MPa storage
```

#### 11.2 Required plant scale

Assuming atmospheric argon content of about 0.934% and a 70–80% argon recovery:

- Continuous feed air: approximately **65–75 Nm³/h**
- Eight-hour production feed: approximately **200–220 Nm³/h**
- Expected oxygen coproduct: approximately **14–16 Nm³/h**
- Expected nitrogen coproduct: approximately **50–58 Nm³/h**

If those oxygen and nitrogen coproducts cannot be used or sold, most of the plant’s production value is wasted.

#### 11.3 Preliminary true-production package

| Parameter | Preliminary estimate |
|---|---:|
| Argon capacity | 0.5–1.0 Nm³/h continuous |
| Purity | ≥99.5% |
| Feed-air capacity | 75–100 Nm³/h |
| Installed electrical power | 45–80 kW |
| Normal operating mode | Continuous, 24/7 |
| Cold-box height | Approximately 7–12 m |
| Process footprint | Approximately 15 m × 10 m |
| Complete fenced area | Approximately 25 m × 15 m |
| Asian installed cost | Approximately $0.8–1.8 million |
| European installed cost | Approximately $1.8–3.5 million |
| Annual maintenance | Approximately 3–5% of capital cost |

#### 11.4 Intermittent-production problem

A cryogenic ASU is poorly matched to daily start-stop operation. Consequently, a true argon ASU should:

- Run continuously.
- Produce argon into a storage tank.
- Reduce output through turndown rather than shut down daily.
- Shut down only for extended production stoppages.
- Have a use or market for the oxygen and nitrogen coproducts.

At only 3,500 Nm³/year, its capital and maintenance expenses would dominate the argon cost.

---

### 12. Final recommended configuration

| Selected item | Recommendation |
|---|---|
| Argon source | Delivered industrial liquid argon |
| Liquid storage | 700 L vacuum-insulated microbulk tank |
| Pressure generation | 10–50 L/h cryogenic reciprocating pump |
| Maximum pressure | 16.5 MPa normal equipment rating; system designed ≥20 MPa |
| Vaporization | 5 Nm³/h high-pressure ambient vaporizer |
| High-pressure storage | Two banks, each 4 × 50 L, 20 MPa cylinders |
| Normal bank pressure | 15 MPa |
| Control | PLC/HMI automatic start at 13.5 MPa and stop at 15 MPa |
| Purity | Supplier-certified ≥99.997% |
| Installation footprint | Approximately 10 m × 6 m fenced compound |
| Electrical supply | 380 V, three-phase, approximately 9–18 kW connected |
| Installed budget | Approximately $100,000–140,000 for a cost-effective package |
| Expected refill interval | Approximately every 40–45 days |

This design meets the consumption, purity, intermittent-operation, PLC-control, electrical-supply and 15 MPa storage requirements without the disproportionate cost and operating complexity of a dedicated cryogenic air-separation plant.

---

## Question 2

> In the above Argon production process scheme, the compressor and nitrogen manufacturing equipment are divided into Chinese and European, respectively, to yield the equipment name, technical specifications and equipment cost budget. Provide equipment name, technical specifications and equipment cost budget.

## Response 2 — Chinese and European equipment comparison

I am treating **“nitrogen manufacturing equipment” as “argon-production equipment.”** A PSA or membrane nitrogen generator cannot manufacture argon.

For this project—**3,500 Nm³/year, 12 Nm³/day, 99.5% Ar and 15 MPa storage**—there are two technically different solutions:

1. **Recommended:** purchased liquid argon, pressurized by a cryogenic liquid pump and vaporized.
2. **True production from air:** cryogenic air-separation plant with an argon-recovery column.

The first option has far better cost-performance.

All costs below are rough-order-of-magnitude engineering estimates in USD, excluding tax, import duty and extraordinary site work.

---

### A. Recommended liquid-argon system

#### A1. Important equipment distinction

This system does **not require a normal gas compressor or argon generator**.

The pressure-producing machine is a:

> **High-pressure cryogenic liquid-argon reciprocating pump**

Pressurizing argon in liquid form and then vaporizing it is considerably more economical than vaporizing it first and compressing the gas.

#### A2. Chinese versus European equipment

| Equipment | Chinese-origin option | Recommended technical specification | Chinese budget | European-origin option | Recommended technical specification | European budget |
|---|---|---:|---:|---|---:|---:|
| Liquid-argon storage tank | Hangyang or equivalent Chinese vacuum-insulated vessel | 700 L nominal; 600–650 L usable; design pressure 2.4–3.5 MPa; vertical; vacuum/perlite or multilayer insulation | $15,000–25,000 | VRV/Cryolor European microbulk vessel | 700 L class; 2.4–3.5 MPa; telemetry-ready; PED-compliant package | $30,000–50,000 |
| High-pressure liquid-argon pump | Chinese vertical cryogenic piston pump | LAr service; 10–30 L/h adjustable; suction 1.5–3 MPa; discharge 16.5–20 MPa; 3–5.5 kW; 380 V/50 Hz | $12,000–25,000 | Cryostar MRP or suitably sized European reciprocating pump | Vacuum-jacketed cold end; LAr service; operating setpoint 15 MPa; rated pressure ≥20 MPa; VFD-controlled | $35,000–65,000 |
| High-pressure vaporizer | Chinese ambient-air HP vaporizer | 5 Nm³/h; 20–25 MPa design; 316L/Al fin construction; outlet temperature ≥5°C at rated duty | $4,000–8,000 | European HP ambient vaporizer | 5 Nm³/h; PED-compliant; 20–25 MPa design pressure; low-temperature outlet trip | $10,000–18,000 |
| High-pressure storage Bank A | Chinese seamless cylinders and manifold | 4 × 50 L; 20 MPa working pressure; approximately 30 Nm³ at 15 MPa | $4,000–7,500 | European cylinders/manifold | 4 × 50 L; 20–30 MPa rated; PED/TPED-certified | $7,500–14,000 |
| High-pressure storage Bank B | Same as Bank A | 4 × 50 L; independent isolation and check valve | $4,000–7,500 | Same as Bank A | Independent filling and supply control | $7,500–14,000 |
| High-pressure manifold | Chinese 316L manifold | 25 MPa minimum; bank isolation; purge, check valves, PSV and transmitters | $4,000–8,000 | European forged/316L manifold | 25–30 MPa; certified valves and instrumentation | $8,000–16,000 |
| PLC/HMI panel | Inovance H5U or equivalent | PLC, 7-inch HMI, VFD, safety relay, Ethernet, pressure and temperature control | $7,000–13,000 | Siemens S7-1200 or Schneider M241 | 7-inch HMI, VFD, safety PLC/relay, remote diagnostics | $14,000–25,000 |
| Purity-monitoring panel | Chinese O₂ and dew-point instruments | O₂ analyzer 0–1%; dew point to −80°C; sample-pressure regulator | $5,000–10,000 | Servomex/Michell or equivalent | Trace/percent O₂ analyzer; dew-point analyzer; calibration system | $12,000–24,000 |
| Cryogenic and HP piping | Chinese-manufactured valves and tubing | Vacuum-jacketed LAr suction line; 316L HP tube; ≥25 MPa fittings | $8,000–16,000 | European/PED piping package | PED-certified valves, tubing, supports and relief protection | $15,000–30,000 |

#### A3. Package totals

| Cost level | Chinese package | European package |
|---|---:|---:|
| Main equipment, ex-works | $63,000–120,000 | $139,000–256,000 |
| Freight and insurance allowance | $5,000–15,000 | $10,000–25,000 |
| Civil works and equipment foundation | $8,000–15,000 | $10,000–20,000 |
| Installation and piping labour | $10,000–20,000 | $18,000–30,000 |
| Testing and commissioning | $5,000–10,000 | $10,000–20,000 |
| **Estimated installed total** | **$91,000–180,000** | **$187,000–351,000** |

A practical high-performance mixed package would use:

- Chinese 700 L liquid-argon tank
- Chinese or European low-flow cryogenic pump
- Chinese high-pressure vaporizer
- Chinese storage banks
- Siemens or Schneider PLC
- European oxygen/dew-point instruments

**Target installed budget: approximately $110,000–150,000.**

---

### B. Optional gaseous-argon compressor

A gaseous compressor is only necessary when the process is arranged as:

```text
Liquid argon tank
      ↓
Low-pressure vaporizer
      ↓
Gaseous argon compressor
      ↓
15 MPa storage
```

This arrangement is technically acceptable but less efficient than pumping liquid argon.

| Origin | Equipment name | Proposed specification | Equipment budget |
|---|---|---|---:|
| Chinese | Hangyang-type oil-free reciprocating argon compressor | Argon service; inlet 0.5–2.5 MPa; discharge 15–16.5 MPa; flow 1–3 Nm³/h; 2–4 stages; 7.5–15 kW; 380 V/50 Hz; water or air cooled | $25,000–50,000 |
| European | SIAD-type oil-free reciprocating process-gas compressor | Argon service; inlet 0.5–2.5 MPa; discharge 15–16.5 MPa; flow 1–3 Nm³/h; oil-free cylinders; PLC skid; 11–18.5 kW | $70,000–140,000 |

#### Recommendation

Do **not** select the gaseous compressor unless:

- Liquid-pump maintenance cannot be supported locally.
- The argon is already available as low-pressure gas.
- The same compressor must serve another gas process.

For this project, the cryogenic liquid pump is the better choice.

---

### C. True argon-production plant from atmospheric air

#### C1. Process required

```text
Air compressor
      ↓
Air cooling and purification
      ↓
Cryogenic cold box
      ↓
High-pressure and low-pressure columns
      ↓
Crude argon column
      ↓
Pure argon column / argon purification
      ↓
Argon compressor or liquid pump
      ↓
15 MPa storage
```

The design capacity should be approximately:

| Parameter | Preliminary design |
|---|---:|
| Net argon production | 0.6 Nm³/h |
| Daily production | Approximately 14.4 Nm³/day |
| Annual production at 330 days | Approximately 4,750 Nm³/year |
| Feed-air requirement | Approximately 90–110 Nm³/h |
| Argon product purity | ≥99.5% |
| Oxygen coproduct | Approximately 15–20 Nm³/h |
| Nitrogen coproduct | Approximately 60–80 Nm³/h |
| Plant operation | Preferably continuous |
| Total installed power | Approximately 35–60 kW |

#### C2. Feed-air compressor comparison

##### Chinese compressor

| Item | Specification |
|---|---|
| Recommended equipment | Hande HD-VPM15, Hanbell-based PM-VSD compressor or equivalent |
| Compressor type | Oil-injected permanent-magnet VSD screw |
| Motor | 15 kW |
| Air flow | Approximately 2.0–2.2 m³/min, 120–132 Nm³/h |
| Discharge pressure | 7–10 bar normally; machine range up to approximately 12.5 bar |
| Electrical supply | 380 V, three-phase, 50 Hz |
| Required accessories | Air receiver, refrigerated dryer, coalescing filters and condensate drain |
| Approximate dimensions | 1,200–1,500 × 750–900 × 1,200–1,400 mm |
| Bare compressor budget | $3,000–7,000 |
| Complete treated-air package | **$10,000–18,000** |

##### European compressor

| Item | Specification |
|---|---|
| Recommended equipment | Atlas Copco GA 15 VSD+ Full Feature |
| Compressor type | Oil-injected VSD screw compressor |
| Motor | 15 kW |
| FAD at 7 bar | 25.6–150.5 m³/h |
| Maximum working pressure | 13 bar |
| Integrated dryer | Recommended Full Feature version |
| Noise | Approximately 64 dB(A) |
| Dimensions | Approximately 630 × 985 × 1,420 mm, Full Feature |
| Electrical supply | 380–400 V, three-phase, 50 Hz |
| Compressor package budget | **$35,000–50,000** |

---

### D. Argon-manufacturing equipment comparison

#### Chinese custom cryogenic ASU

| Equipment | Proposed technical specification | Budget |
|---|---|---:|
| Air precooling skid | 100–120 Nm³/h; refrigerated chiller; moisture separator | $20,000–40,000 |
| Molecular-sieve purifier | Twin tower; regenerated; outlet dew point ≤−70°C; CO₂ removal | $30,000–60,000 |
| Main heat exchanger | Brazed aluminium plate-fin; cryogenic service | Included in cold box |
| Expansion turbine | Small turboexpander or expansion-engine refrigeration package | Included in ASU |
| Cryogenic cold box | Double-column distillation with argon side draw | $250,000–500,000 |
| Crude argon column | Approximately 0.7–1.0 Nm³/h crude-argon capacity | Included/custom |
| Pure argon purification | Cryogenic pure-argon column or deoxo/dryer system | $60,000–130,000 |
| Product analyzer | O₂, N₂ and moisture monitoring | $15,000–35,000 |
| PLC and MCC | PLC/HMI, VFDs, interlocks and remote diagnostics | $25,000–50,000 |
| Argon pressure system | Liquid pump or oil-free compressor to 15 MPa | $25,000–55,000 |
| **Chinese equipment subtotal** | Custom Hangyang, Sichuan Air Separation or equivalent package | **$500,000–1,000,000** |
| **Chinese installed total** | Including civil work, erection and commissioning | **$800,000–1,600,000** |

#### European custom cryogenic ASU

| Equipment | Proposed technical specification | Budget |
|---|---|---:|
| Feed-air compressor | Atlas Copco GA 15 VSD+ FF | $35,000–50,000 |
| Precooling and purification | European twin-bed molecular-sieve skid | $70,000–130,000 |
| Cryogenic ASU | SIAD or Linde custom cold box with double-column separation | $900,000–1,800,000 |
| Crude/pure argon system | Cryogenic argon column and final purification | $300,000–650,000 |
| Control and analyzers | Siemens PLC, O₂/N₂/moisture analyzers | $80,000–160,000 |
| 15 MPa argon pressure and storage | Cryostar pump or SIAD compressor, vaporizer and cylinder banks | $120,000–250,000 |
| **European equipment subtotal** | Bespoke system | **$1,500,000–3,000,000** |
| **European installed total** | Including engineering, civil work, erection and commissioning | **$2,000,000–4,000,000** |

---

### E. Cost comparison summary

| System | Chinese equipment | Chinese installed | European equipment | European installed |
|---|---:|---:|---:|---:|
| Liquid-argon pump/vaporizer system | $63,000–120,000 | **$91,000–180,000** | $139,000–256,000 | **$187,000–351,000** |
| Low-pressure vaporizer plus gas compressor | $80,000–145,000 | **$115,000–205,000** | $175,000–330,000 | **$235,000–430,000** |
| True cryogenic argon production from air | $500,000–1,000,000 | **$800,000–1,600,000** | $1,500,000–3,000,000 | **$2,000,000–4,000,000** |

### Final selection

For **12 Nm³/day**, the recommended combination is:

> **Chinese 700 L liquid-argon tank + Chinese 5 Nm³/h vaporizer and storage banks + European or high-quality Chinese cryogenic pump + Siemens PLC**

Recommended purchasing budget:

- **Main equipment:** approximately **$80,000–115,000**
- **Installed system:** approximately **$110,000–150,000**
- **Normal production/storage pressure:** 15 MPa
- **Product purity:** determined by delivered liquid argon, normally much higher than 99.5%
- **Operation:** automatic intermittent filling of the high-pressure banks

A dedicated argon-from-air plant is technically possible, but at this consumption its capital cost would be roughly **7–25 times higher** than the liquid-argon solution.

---

## Question 3

> Please provide a list of the single integrated Argon production system (combined compressor and Argon maker), technical specifications, equipment layout, pipeline arrangement, cost budget, etc.
>
> The compressor and Argon manufacturing equipment can be divided into Chinese and European, respectively.

## Response 3 — Integrated argon-production system proposal

### 1. Important engineering clarification

A genuine on-site argon maker cannot use PSA or membrane technology. It must use a **cryogenic air-separation process** containing:

- Feed-air compression and purification
- Cryogenic refrigeration
- High-pressure and low-pressure distillation columns
- A crude-argon column
- Final argon purification
- A product-argon booster compressor
- High-pressure storage

Argon represents only about **0.934% of atmospheric air**. Therefore, producing only 0.6 Nm³/h of argon requires roughly 80–110 Nm³/h of feed air after allowing for recovery losses.

At this very small capacity, neither Chinese nor European manufacturers publish a standard catalog model. The systems below would be **custom-engineered integrated micro-ASUs**. The model names used here are project designations, not existing catalog numbers.

---

### 2. Common design basis

| Parameter | Proposed value |
|---|---:|
| Project designation | MASU-Ar-0.6/150 |
| Argon production | 0.6 Nm³/h nominal |
| Maximum argon production | 0.75 Nm³/h |
| Annual production capability | Approximately 4,500–4,800 Nm³/year |
| Required annual production | 3,500 Nm³/year |
| Required daily production | 12 Nm³/day |
| Product purity | ≥99.5% Ar |
| Oxygen impurity target | ≤0.2% |
| Nitrogen impurity target | ≤0.3% |
| Product dew point | ≤−60°C |
| ASU argon outlet pressure | 0.2–0.8 MPa |
| High-pressure storage | 15 MPa normal |
| Compressor/storage design pressure | 16.5–20 MPa |
| Feed-air flow | 90–110 Nm³/h |
| Feed-air pressure | 0.75–0.85 MPa |
| Electrical supply | 380 V, three-phase, 50 Hz |
| Control | Central PLC and HMI |
| Operating philosophy | Continuous or multi-day campaigns |
| High-pressure storage capacity | Approximately 90–120 Nm³ |
| Outdoor plant area | Approximately 18 × 10 m |

With a nominal output of 0.6 Nm³/h, the plant produces 14.4 Nm³/day when operating continuously, providing approximately 20% daily capacity margin.

---

### 3. Integrated process arrangement

```text
Atmospheric air
      │
      ▼
Inlet filter and silencer
      │
      ▼
Oil-free feed-air compressor
90–110 Nm³/h, 0.8 MPa
      │
      ▼
Aftercooler + water separator
      │
      ▼
Compressed-air receiver
      │
      ▼
Twin-bed molecular-sieve purifier
CO₂, water and hydrocarbon removal
      │
      ▼
Main cryogenic heat exchanger
      │
      ▼
Expansion turbine / refrigeration unit
      │
      ▼
High-pressure and low-pressure columns
      │
      ├──────────► Nitrogen-rich gas
      │
      ├──────────► Oxygen-rich gas
      │
      ▼
Argon-rich side draw
      │
      ▼
Crude-argon column
      │
      ▼
Deoxo purification + twin-tower dryer
or pure-argon cryogenic column
      │
      ▼
Low-pressure argon buffer
      │
      ▼
Oil-free argon booster compressor
0.6–1.0 Nm³/h, 15 MPa
      │
      ▼
High-pressure storage banks
      │
      ▼
Pressure regulation, flow metering
and user outlet
```

A European integrated system would normally use a prefabricated modular ASU philosophy with integrated cryogenic components, optimized layouts and reduced deployment time.

---

### 4. Chinese integrated system

#### 4.1 Proposed package name

> **CN-MASU-Ar-0.6/150 Integrated Argon Plant**

Suggested EPC/manufacturing basis:

- Hangyang-class cryogenic ASU
- Chinese oil-free feed-air compressor
- Hangyang or equivalent high-pressure argon booster
- Chinese pressure vessels, storage manifolds and vapor piping
- Siemens, Schneider or Inovance PLC

#### 4.2 Chinese equipment list

| No. | Equipment name | Proposed technical specification | Approximate dimensions | Budget |
|---:|---|---|---|---:|
| 1 | Oil-free feed-air compressor skid | 90–120 Nm³/h FAD; 0.8 MPa; 18.5–22 kW; VFD; air cooled; 380 V/50 Hz | 1.8 × 1.1 × 1.5 m | $18,000–30,000 |
| 2 | Aftercooler and separator | Outlet air ≤40°C; automatic condensate drain; stainless separator | 1.0 × 0.7 × 1.3 m | $4,000–7,000 |
| 3 | Feed-air receiver | 1.0 m³; 1.0 MPa design; pressure gauge, PSV and drain | Ø0.9 × H2.4 m | $3,000–5,000 |
| 4 | Molecular-sieve purifier | Twin alternating towers; 100–120 Nm³/h; CO₂ ≤1 ppm; dew point ≤−70°C | 3.0 × 1.8 × 2.6 m | $28,000–48,000 |
| 5 | Regeneration heater and silencer | 8–15 kW heater; automatic regeneration and switching | Included with purifier | Included |
| 6 | Main plate-fin exchanger | Cryogenic aluminium exchanger; 100–120 Nm³/h feed-air duty | Inside cold box | Included |
| 7 | Expansion turbine package | Small turboexpander, brake or generator loaded; PLC-controlled speed and temperature | 1.8 × 1.2 × 1.5 m | Included |
| 8 | Cryogenic ASU cold box | HP/LP distillation columns; argon side draw; vacuum/perlite insulated | 2.5 × 2.5 × 8–10 m | $280,000–450,000 |
| 9 | Crude-argon column | 0.8–1.0 Nm³/h crude-argon capacity; structured packing | Integrated with cold box | Included |
| 10 | Argon deoxo skid | Catalytic oxygen removal; H₂ dosing; outlet O₂ target ≤0.2% | 2.4 × 1.4 × 2.0 m | $35,000–60,000 |
| 11 | Product-argon dryer | Twin regenerative molecular-sieve towers; dew point ≤−60°C | 2.0 × 1.2 × 2.0 m | $30,000–50,000 |
| 12 | Low-pressure argon receiver | 1–2 m³; 1.0 MPa design; approximately 10–20 Nm³ storage | Ø1.0–1.3 × H2.5 m | $8,000–14,000 |
| 13 | High-pressure argon booster | Oil-free reciprocating or diaphragm compressor; 0.6–1.0 Nm³/h; suction 0.3–0.8 MPa; discharge 15–16.5 MPa; 3–7.5 kW | 1.8 × 1.1 × 1.5 m | $35,000–65,000 |
| 14 | High-pressure Bank A | 6 × 50 L cylinders; 20 MPa working pressure; approximately 45 Nm³ at 15 MPa | 1.8 × 0.8 × 1.9 m | $8,000–13,000 |
| 15 | High-pressure Bank B | 6 × 50 L cylinders; independently isolated | 1.8 × 0.8 × 1.9 m | $8,000–13,000 |
| 16 | High-pressure manifold | 25 MPa design; individual isolation and check valves; purge and relief connections | 1.5 × 0.5 × 1.2 m | $6,000–10,000 |
| 17 | Product analyzer panel | Ar balance calculation; O₂, moisture and optional N₂ analyzer | 0.8 × 0.6 × 1.8 m | $15,000–28,000 |
| 18 | PLC/MCC/HMI cabinet | Siemens S7-1200, Schneider M241 or Inovance; 10-inch HMI; VFDs and safety relays | 1.2 × 0.6 × 2.0 m | $25,000–42,000 |
| 19 | Cooling-water skid | 10–20 m³/h; pump, tank and air cooler; closed-loop design | 3.0 × 1.8 × 2.2 m | $18,000–30,000 |
| 20 | O₂-deficiency monitoring | Two or three fixed oxygen monitors, horn and beacon | Field mounted | $4,000–7,000 |
| 21 | Integrated piping and valves | Cryogenic, low-pressure product, H₂ and 25 MPa high-pressure piping | — | $35,000–60,000 |

#### Chinese package budget

| Cost category | Budget |
|---|---:|
| Main equipment, ex-works | $560,000–900,000 |
| Packing and international freight | $25,000–60,000 |
| Civil work and foundations | $45,000–80,000 |
| Site piping and electrical installation | $55,000–100,000 |
| Erection and insulation | $40,000–80,000 |
| Testing, training and commissioning | $30,000–60,000 |
| Engineering contingency | $50,000–100,000 |
| **Estimated installed total** | **$805,000–1,380,000** |

A practical purchasing target for a Chinese EPC package is approximately:

> **$900,000–1,200,000 installed**

---

### 5. European integrated system

#### 5.1 Proposed package name

> **EU-MASU-Ar-0.6/150 Integrated Argon Plant**

Suggested equipment basis:

- SIAD or Linde cryogenic ASU engineering
- Atlas Copco ZT 15–22 oil-free feed-air compressor
- SIAD or Burckhardt oil-free argon booster compressor
- Siemens S7-1500 PLC
- Servomex, Michell or equivalent European analyzers
- European PED-certified vessels and manifolds

#### 5.2 European equipment list

| No. | Equipment name | Proposed technical specification | Approximate dimensions | Budget |
|---:|---|---|---|---:|
| 1 | Atlas Copco ZT 15–22 VSD compressor | Oil-free Class 0; approximately 90–140 Nm³/h selected duty; 7–8 bar; 15–22 kW; air cooled; integrated controller | Approximately 2.0 × 1.0 × 1.7 m | $55,000–90,000 |
| 2 | European aftercooler and receiver | 1.0 m³ PED vessel; automatic separator and drain | Ø0.9 × H2.4 m | $10,000–18,000 |
| 3 | SIAD/Linde air-purification skid | Twin-bed molecular sieve; 100–120 Nm³/h; CO₂ ≤1 ppm; dew point ≤−70°C | 3.2 × 2.0 × 2.7 m | $80,000–140,000 |
| 4 | Cryogenic cold box | HP/LP columns, main exchanger, subcooler and argon side draw | 2.5–3.0 × 2.5–3.0 × 9–12 m | $850,000–1,400,000 |
| 5 | European turboexpander | Oil-free bearing system; speed, vibration and temperature protection | 2.0 × 1.3 × 1.6 m | Included |
| 6 | Crude-argon column | Structured packing; 0.8–1.0 Nm³/h design capacity | Cold-box integrated | Included |
| 7 | Pure-argon purification skid | Pure-argon column or catalytic deoxo/dryer system; Ar ≥99.5% | 3.0 × 1.8 × 2.5 m | $220,000–380,000 |
| 8 | Low-pressure product receiver | 1–2 m³; 10–20 Nm³ effective gas buffer | Ø1.0–1.3 × H2.5 m | $20,000–35,000 |
| 9 | SIAD/Burckhardt argon booster | Oil-free reciprocating; 0.6–1.0 Nm³/h; 15–16.5 MPa discharge; 4–11 kW | 1.7–2.5 × 0.8–1.3 × 0.8–1.5 m | $120,000–200,000 |
| 10 | PED high-pressure Bank A | 6 × 50 L, 20–30 MPa certified cylinders | 1.8 × 0.8 × 1.9 m | $18,000–30,000 |
| 11 | PED high-pressure Bank B | 6 × 50 L, separate fill and supply isolation | 1.8 × 0.8 × 1.9 m | $18,000–30,000 |
| 12 | High-pressure valve panel | 25–30 MPa rating; European-certified valves and transmitters | 1.5 × 0.6 × 1.8 m | $18,000–30,000 |
| 13 | Process analyzer system | O₂, N₂ and H₂O analysis; automatic calibration and sample conditioning | 1.2 × 0.8 × 2.0 m | $45,000–80,000 |
| 14 | Siemens PLC/MCC | S7-1500 PLC; redundant safety functions where required; remote service interface | 1.8 × 0.8 × 2.2 m | $75,000–120,000 |
| 15 | European cooling-water package | Closed-loop cooler; redundant pumps optional | 3.5 × 2.0 × 2.4 m | $45,000–75,000 |
| 16 | Integrated piping package | PED cryogenic and high-pressure piping, supports and relief system | — | $100,000–170,000 |

#### European package budget

| Cost category | Budget |
|---|---:|
| Main equipment, ex-works | $1,600,000–2,650,000 |
| Packing and international freight | $60,000–130,000 |
| Civil work and foundations | $90,000–170,000 |
| Mechanical and electrical installation | $150,000–280,000 |
| Cryogenic piping and insulation | $100,000–180,000 |
| Testing, training and commissioning | $100,000–180,000 |
| Engineering contingency | $150,000–300,000 |
| **Estimated installed total** | **$2,250,000–3,890,000** |

A realistic European purchasing target is approximately:

> **$2.5–3.4 million installed**

---

### 6. Equipment layout

The system is a **single integrated plant from one EPC supplier**, but it should not be installed inside one small container. The cold box is tall, the compressor requires ventilation and the 15 MPa storage must be segregated.

#### 6.1 Proposed site plan

```text
        INTEGRATED ARGON PRODUCTION AREA
              Approximately 18 × 10 m

 ┌──────────────────────────────────────────────────────────────┐
 │                                                              │
 │  AIR INTAKE                                                   │
 │      │                                                       │
 │      ▼                                                       │
 │ ┌─────────────┐   ┌───────────────┐   ┌─────────────────┐   │
 │ │ Feed-air    │──►│ Aftercooler + │──►│ Molecular-sieve│   │
 │ │ compressor  │   │ air receiver  │   │ purifier       │   │
 │ └─────────────┘   └───────────────┘   └─────────────────┘   │
 │                                                   │          │
 │                                                   ▼          │
 │                    Minimum 3 m clear       ┌──────────────┐  │
 │                    maintenance zone        │ Cryogenic    │  │
 │                                            │ cold box     │  │
 │                                            │ H = 8–12 m   │  │
 │                                            └──────────────┘  │
 │                                                   │          │
 │                                                   ▼          │
 │ ┌────────────────┐   ┌────────────────┐   ┌──────────────┐  │
 │ │ Argon deoxo +  │◄──│ Crude-argon   │   │ Cooling-water│  │
 │ │ dryer skid     │   │ outlet        │   │ skid         │  │
 │ └────────────────┘   └────────────────┘   └──────────────┘  │
 │          │                                                   │
 │          ▼                                                   │
 │ ┌────────────────┐      ┌─────────────────────┐             │
 │ │ Low-pressure   │─────►│ HP argon booster   │             │
 │ │ Ar receiver    │      │ compressor         │             │
 │ └────────────────┘      └─────────────────────┘             │
 │                                    │                         │
 │                                    ▼                         │
 │                    ┌────────────┐       ┌────────────┐       │
 │                    │ HP Bank A  │       │ HP Bank B  │       │
 │                    │ 6 × 50 L   │       │ 6 × 50 L   │       │
 │                    └────────────┘       └────────────┘       │
 │                                    │                         │
 │                                    ▼                         │
 │                        Product control panel                 │
 │                                    │                         │
 └────────────────────────────────────┼─────────────────────────┘
                                      ▼
                              Argon user pipeline
```

#### 6.2 Recommended clearances

| Location | Minimum proposed clearance |
|---|---:|
| Around compressor | 1.0 m |
| Purifier valve side | 1.2 m |
| Cold-box perimeter | 2.0–3.0 m |
| High-pressure storage | 1.5 m maintenance access |
| Electrical panel front | 1.2 m |
| Vehicle and crane access | 3.5 m |
| Cold-box overhead | Unobstructed |
| HP bank from heat sources | Project/code dependent; normally separately fenced |

The European package may require a slightly larger footprint—approximately 20 × 12 m—because of PED access, packaged skids and maintenance clearances.

---

### 7. Pipeline arrangement

#### 7.1 Feed-air and purification piping

| Line | Service | Proposed pipe |
|---|---|---|
| PA-001 | Compressor discharge | DN32 carbon steel or 304L stainless steel |
| PA-002 | Aftercooler to receiver | DN32 |
| PA-003 | Receiver to purifier | DN25–DN32 |
| PA-004 | Purifier to cold box | DN25 304L stainless steel |
| RV-001 | Purifier regeneration vent | DN40, routed outdoors |
| CD-001 | Condensate drain | DN15 stainless steel |

Requirements:

- Slope wet compressed-air piping toward separators.
- Install automatic and manual drains.
- Provide isolation and bypass around filters and receiver.
- Install non-return and relief valves after the compressor.
- Keep the purified-air line stainless and internally clean.

#### 7.2 Cryogenic piping

| Line | Service | Proposed material |
|---|---|---|
| CA-001 | Purified air to main exchanger | 304L/316L stainless steel |
| CA-002 | HP/LP column connections | Aluminium or stainless steel, vendor designed |
| AR-001 | Argon-rich side draw | 316L stainless steel |
| AR-002 | Crude argon to purification | DN10–DN15 316L |
| VN-001 | Nitrogen-rich vent/product | DN25–DN40 |
| VO-001 | Oxygen-rich vent/product | DN25–DN40 |

Cryogenic lines inside the cold box should be factory fabricated, inspected and insulated by the ASU manufacturer.

#### 7.3 Deoxo and final-purification piping

| Line | Service | Proposed pipe |
|---|---|---|
| AR-101 | Crude argon | DN10–DN15 316L |
| H2-101 | Hydrogen dosing | 6 mm OD 316L tubing |
| AR-102 | Reactor outlet | DN10–DN15 316L |
| AR-103 | Dryer outlet | DN10 316L |
| AR-104 | Analyzer sample | 6 mm OD electropolished tubing |

Safety requirements for the hydrogen-assisted deoxo system:

- Double-block-and-bleed H₂ isolation
- H₂ flow-limiting orifice
- Automatic shutoff on low argon flow
- Combustible-gas detector
- Reactor high-temperature trip
- Purge sequence before and after H₂ introduction

A hydrogen-free pure-argon cryogenic column can be specified instead, but it will increase the capital cost and cold-box complexity.

#### 7.4 High-pressure argon piping

| Line | Service | Proposed specification |
|---|---|---|
| AR-201 | Buffer to booster suction | DN10–DN15 316L |
| AR-202 | Booster interstage piping | Compressor-vendor package |
| AR-203 | Booster discharge | 8–10 mm OD seamless 316L |
| AR-204 | Storage-bank manifold | 10–12 mm OD seamless 316L |
| AR-205 | User supply | ½-inch 316L, sized for peak flow |
| SV-201 | Relief discharge | Routed to safe outdoor location |

All high-pressure tubing, valves, fittings and instruments should have a design rating of at least **25 MPa**, even though normal storage pressure is 15 MPa.

Each storage bank should have:

- Individual cylinder isolation valves
- Main bank isolation valve
- Check valve
- Pressure transmitter
- Local pressure gauge
- Manual bleed valve
- Pressure relief device
- Remotely operated fill valve
- Remotely operated supply valve

---

### 8. Electrical and utility requirements

| Utility | Chinese package | European package |
|---|---:|---:|
| Feed-air compressor | 18.5–22 kW | 15–22 kW |
| Purifier regeneration heater | 8–15 kW intermittent | 8–12 kW intermittent |
| Expansion turbine auxiliaries | 2–5 kW | 2–5 kW |
| Argon booster | 3–7.5 kW | 4–11 kW |
| Cooling-water pumps/fans | 4–7.5 kW | 4–7.5 kW |
| PLC, analyzers and trace heating | 2–4 kW | 3–5 kW |
| Total connected load | 40–60 kW | 40–65 kW |
| Normal average load | 25–38 kW | 23–35 kW |
| Recommended incoming feeder | 100–125 A | 100–125 A |
| Cooling-water duty | 10–20 m³/h | 10–20 m³/h |
| Instrument air | Derived from feed-air system | Derived from feed-air system |

---

### 9. PLC control philosophy

#### 9.1 Automatic startup

```text
Check cooling water and electrical system
              │
              ▼
Start air compressor
              │
              ▼
Pressurize and regenerate purifier
              │
              ▼
Confirm low dew point and low CO₂
              │
              ▼
Start cold-box cooldown
              │
              ▼
Start expansion turbine
              │
              ▼
Establish HP/LP column pressure
              │
              ▼
Stabilize oxygen and nitrogen separation
              │
              ▼
Enable crude-argon withdrawal
              │
              ▼
Start argon purification
              │
              ▼
Verify Ar purity ≥99.5%
              │
              ▼
Open product valve to buffer
              │
              ▼
Start HP booster on storage demand
```

#### 9.2 High-pressure control

| Function | Preliminary setting |
|---|---:|
| Booster start | 13.0–13.5 MPa |
| Booster stop | 15.0 MPa |
| High-pressure warning | 15.3 MPa |
| High-high shutdown | 15.5 MPa |
| Storage low-pressure warning | 10 MPa |
| Off-spec product diversion | Ar purity <99.5% |
| Low buffer-pressure booster trip | Vendor selected |
| High interstage-temperature trip | Compressor vendor selected |

#### 9.3 Product-quality interlock

Off-spec argon must automatically go to:

- Vent
- Recycle
- Or a separate off-spec receiver

The 15 MPa storage fill valve should only open when:

- Argon purity is acceptable
- Dew point is acceptable
- Booster suction pressure is adequate
- Storage bank is selected
- No high-pressure trip exists
- Analyzer validation is active

---

### 10. Operating mode for intermittent demand

The process demand can be intermittent, but the cryogenic ASU should not be started and stopped for every small withdrawal.

Recommended strategy:

1. Keep the cryogenic section running continuously during production campaigns.
2. Fill both 15 MPa storage banks.
3. Supply the customer from storage.
4. Use cold standby when storage is full.
5. Avoid daily warm starts.
6. Schedule longer operating campaigns rather than short cycles.

With two banks containing 12 × 50 L cylinders in total:

- Total water volume: 600 L
- Approximate gas capacity at 15 MPa: 90 Nm³
- Storage autonomy at 12 Nm³/day: approximately 7.5 days

For two weeks of autonomy, increase to approximately:

- 20 × 50 L cylinders
- About 150 Nm³ nominal storage
- Approximately 12.5 days at full daily consumption

---

### 11. Cost comparison

| Item | Chinese integrated plant | European integrated plant |
|---|---:|---:|
| Feed-air compressor and receiver | $25,000–42,000 | $65,000–108,000 |
| Air purification | $28,000–48,000 | $80,000–140,000 |
| Cryogenic cold box and columns | $280,000–450,000 | $850,000–1,400,000 |
| Argon final purification | $65,000–110,000 | $220,000–380,000 |
| Argon buffer and booster | $43,000–79,000 | $140,000–235,000 |
| High-pressure storage and manifold | $22,000–36,000 | $54,000–90,000 |
| Cooling and utilities | $18,000–30,000 | $45,000–75,000 |
| PLC, electrical and analyzers | $44,000–77,000 | $120,000–200,000 |
| Package piping and valves | $35,000–60,000 | $100,000–170,000 |
| Equipment subtotal | **$560,000–900,000** | **$1,600,000–2,650,000** |
| Installed project total | **$805,000–1,380,000** | **$2,250,000–3,890,000** |

These are rough-order-of-magnitude estimates, not manufacturer quotations. The final vendor quotation must be based on ambient temperature, altitude, cooling-water conditions, required argon impurity limits, applicable pressure code and the destination country.

---

### 12. Recommended selection

#### Best true on-site production option

For a mandatory argon-from-air plant, the best cost-performance configuration is:

> **Chinese CN-MASU-Ar-0.6/150 package with a Chinese cryogenic ASU, oil-free feed-air compressor, Hangyang-type 15 MPa argon booster, Siemens PLC and European product analyzers.**

Recommended target:

| Parameter | Recommended selection |
|---|---|
| Net argon capacity | 0.6 Nm³/h |
| Product purity | ≥99.5% |
| Feed-air capacity | 100 Nm³/h |
| Feed-air compressor | 18.5–22 kW oil-free VSD |
| Final argon compressor | 0.6–1.0 Nm³/h, 15 MPa |
| HP storage | 90–150 Nm³ |
| Average plant load | 25–38 kW |
| Site area | Approximately 18 × 10 m |
| Installed budget | **Approximately $900,000–1,200,000** |

#### Economic warning

This small ASU will simultaneously create large nitrogen-rich and oxygen-rich streams. Unless those coproducts are used or sold, the system will consume substantial electricity and capital merely to recover the less-than-1% argon fraction of the air.

Therefore:

- **Chinese true production plant:** technically feasible, but expensive.
- **European true production plant:** highest equipment quality and lifecycle support, but economically difficult to justify.
- **Delivered liquid argon with a cryogenic pump:** remains the strongest cost-performance solution for only 3,500 Nm³/year.

---

## Closing engineering note

All dimensions, pressures, electrical loads and prices in this discussion are preliminary planning values. Final design requires:

- Vendor process guarantees
- Local pressure-vessel and piping-code review
- Relief-valve sizing
- Hazard and operability review
- Oxygen-deficiency assessment
- Structural and seismic verification
- Confirmed local utility conditions
- Factory and site acceptance tests
