# Canon imageRUNNER 2002 E0002 Fuser Troubleshooting Discussion

**Date compiled:** July 23, 2026  
**Printer:** Canon imageRUNNER 2002  
**Reported error:** E0002 / E002

> **Safety warning:** The fixing unit becomes extremely hot and contains mains-voltage electrical parts. Turn off and unplug the copier, then allow it to cool for at least 30–45 minutes before touching accessible areas. Do not bypass the thermostat or thermal fuse. If the error returns after one reset, stop using the copier and have the fixing system tested or repaired.

---

## 1. Initial E0002 error

### User

I encountered error code E0002 while using a Canon iR 2002 printer.

### Assistant

Error **E0002 / E002** on a Canon imageRUNNER 2002 normally indicates a **fixing-unit (fuser) temperature fault**. The fuser is not reaching or maintaining the required temperature.

Try these safe checks:

1. Turn the machine off using the main power switch.
2. Disconnect it from power for 10–15 minutes.
3. Connect it directly to a stable wall outlet—not an extension cable or a weak voltage stabilizer.
4. Turn it on once.

If E0002 returns, stop using the machine. Possible causes include:

- Dirty or poorly contacting thermistor
- Failed fuser heater
- Damaged fixing film
- Loose or burned fuser wiring
- Defective thermal fuse or thermostat
- Less commonly, a power-supply or DC-controller failure

A technician should inspect the fixing assembly and repair the underlying problem before clearing the stored error. Do not repeatedly reset the fault through service mode: the fuser operates at high temperature and mains voltage, and resetting an unrepaired heater fault can damage the copier or create a fire hazard.

The complete displayed subcode—such as `E002-0000` or `E000-0002`—should be recorded because the digits after the hyphen help identify the precise failure.

Reference:

- [Canon imageRUNNER 2202N/2002/2002N Quick Guide](https://gdlp01.c-wss.com/gds/0/0300014160/01/iR2202N_QG_en_uv_R.pdf)
- [Canon iR 2002/2202 service-manual listing](https://iteminc.info/manuals/920/canon-imagerunner-ir-2002-2202-service-manual)

---

## 2. What are the fuser and thermistor?

### User

What is the fuser and thermistor?

### Assistant

The correct terms are **fuser** and **thermistor**.

- **Fuser (fixing unit):** The hot assembly that melts and presses toner powder permanently onto the paper. It normally contains a heater, fixing film or hot roller, pressure roller, thermistor, and safety thermostat.
- **Thermistor:** A small temperature sensor touching or positioned very close to the fuser’s heated surface. It continuously reports the fuser temperature to the copier controller.

The control process is:

```text
Heater warms fuser
        ↓
Thermistor measures temperature
        ↓
Controller regulates heater
        ↓
Heat and pressure bond toner to paper
```

For an E0002/E002 error, the controller believes the fuser is not heating correctly or cannot maintain the expected temperature. A dirty or defective thermistor can report an incorrect temperature even when the heater itself is working.

The fuser can be extremely hot and carries dangerous electrical voltage. Allow the copier to cool and have a qualified technician inspect it rather than touching or bypassing the thermistor.

---

## 3. Pictures and identification of the parts

### User

Can you give me a picture of the fuser and thermistor of the Canon 2002 printer?

### Assistant

Reference pictures were provided showing:

1. The complete Canon imageRUNNER 2002 fuser/fixing-unit assembly.
2. The small thermistor installed inside the fuser, close to or touching the fixing-film/heater surface.

The **fuser** is the large removable assembly in the paper-exit path. The **thermistor** is a small sensor inside that assembly and can be difficult to see until the fuser housing is opened.

For many 220–240 V iR 2002 machines, commonly advertised fixing-assembly numbers include:

- `FM1-F160-000`
- `FM1-F163-000`

The exact part number and voltage must be verified from the label on the existing unit or from the machine serial-number parts catalog before purchasing a replacement.

For an E002 fault, inspect:

- Thermistor surface for baked-on toner
- Thermistor wiring and connector
- Ceramic-heater continuity
- Thermal fuse or thermostat
- Fixing-film condition

---

## 4. How to clean the fuser

### User

Then how do I clean up the fuser?

### Assistant

You can clean accessible surfaces of the Canon iR 2002 fuser, but do not disassemble it unless you are trained.

### Safe cleaning procedure

1. Turn off the copier using its main power switch.
2. Unplug the power cable.
3. Wait at least **30–45 minutes** for the fuser to cool.
4. Open the rear/right cover and locate the fixing unit in the paper-exit path.
5. Carefully remove loose paper scraps.
6. Wipe accessible paper guides and rollers using:
   - A soft, lint-free cloth
   - A cloth only slightly dampened with clean water
   - A dry lint-free cloth afterward
7. Rotate only rollers that turn easily. Never force them.
8. Allow everything to dry completely, close all covers, and reconnect power.

### Cleaning the thermistor

Cleaning the thermistor requires removing and opening the fuser and is normally technician work:

1. Remove the fuser assembly.
2. Open its housing.
3. Locate the small thermistor contacting or positioned very close to the fixing-film/heater area.
4. Carefully remove baked-on toner using a lint-free swab and a very small amount of **90% or higher isopropyl alcohol**.
5. Do not bend, scratch, reposition, or press hard on the sensor.
6. Inspect the thermistor cable and connector before reassembly.
7. Ensure the assembly is completely dry before reconnecting it.

### Do not do the following

- Do not use water inside an opened fuser.
- Do not scrape the thermistor with a screwdriver, knife, or blade.
- Do not clean the fixing film with abrasive material.
- Do not touch or damage the heater element.
- Do not bypass the thermostat or thermal fuse.
- Do not repeatedly clear E002 without correcting its cause.

Cleaning helps only when contamination causes a false or unstable temperature reading. If E002 returns, the ceramic heater, thermistor, thermal fuse, wiring, power supply, or complete fixing assembly may need replacement. A torn, wrinkled, or heavily damaged fixing film generally requires replacement rather than cleaning.

---

## 5. What to do after cleaning the thermistor

### User

I fixed all the issues related to the thermistor by cleaning it. What is next?

### Assistant

Proceed in this order.

### Step 1: Recheck the fuser assembly before applying power

Confirm that:

- Both thermistor faces are positioned correctly against or close to the fixing-film/heating area.
- Thermistor wires are not pinched, broken, or disconnected.
- All fuser connectors are fully seated.
- The fixing film is not torn, wrinkled, or difficult to rotate.
- No toner, alcohol, water, or other cleaning liquid remains inside.
- All covers and guards are correctly reinstalled.

### Step 2: Clear the stored fixing error once

After reassembling all covers:

1. Turn on the copier.
2. Enter service mode:

   `Additional Functions → press 2 and 8 simultaneously → Additional Functions`

3. Select:

   `COPIER → FUNCTION → CLEAR → ERR`

4. Press `OK`.
5. Turn the copier off using its main power switch.
6. Wait about 10 seconds.
7. Turn it on again.

The reset should be performed **only once after correcting and rechecking the physical problem**.

### Step 3: Observe the result

- If the copier starts normally, allow it to finish warming up and make one test copy.
- If E002 returns immediately, cleaning was not sufficient. Check the fuser connector, ceramic heater, thermal fuse/thermostat, and thermistor electrically.
- If it starts warming but E002 returns later, suspect poor thermistor contact, a weak/intermittent heater, damaged fixing film, loose wiring, or unstable input power.

Do not clear the error repeatedly. If it returns after this single reset, disconnect the power. The remaining components should be tested with the proper meter and service procedure, or the complete fixing assembly should be replaced. If a known-good fuser does not solve the problem, the power supply and controller circuitry require diagnosis.

Reference:

- [Canon iR 2002/2202 service-manual information](https://www.scribd.com/document/373086961/1service-Manual-Canon-Ir2202-2002s)

---

## 6. Practical troubleshooting sequence

```text
Record complete E002 subcode
            ↓
Power off, unplug, and cool copier
            ↓
Inspect fixing film, thermistors, wiring, and connectors
            ↓
Clean contamination and reassemble correctly
            ↓
Clear COPIER → FUNCTION → CLEAR → ERR once
            ↓
Warm up and make one test copy
       ┌────┴────┐
     Works      E002 returns
       ↓             ↓
Monitor use     Stop and unplug
                     ↓
Test heater, thermistor,
thermal fuse/thermostat,
wiring, and power supply
                     ↓
Repair or replace fuser;
diagnose controller if needed
```

## 7. Key conclusion

Cleaning the thermistor can correct E002 when toner contamination caused a false temperature reading. After cleaning, carefully recheck its position, wiring, connectors, fixing film, and dryness. Then clear the stored error one time and test the copier. If the code returns, the copier still has a real fixing-temperature problem and requires electrical testing or replacement of the fixing assembly; repeated resetting is unsafe.

