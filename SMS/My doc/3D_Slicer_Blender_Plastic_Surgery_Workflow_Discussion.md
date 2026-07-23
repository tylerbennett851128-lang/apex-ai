# 3D Slicer + Blender Plastic / Craniofacial Surgery Workflow Discussion

## 1. Problem: MRI imported into 3D Slicer but no 3D model appears

### Key point

Importing MRI data into 3D Slicer does not automatically create a 3D
surface model.

MRI is initially loaded as a volume: - Red view: axial slice - Yellow
view: sagittal slice - Green view: coronal slice

To see 3D:

1.  Use Volume Rendering for visualization.
2.  Use Segment Editor to create a true 3D anatomical model.

Volume Rendering: - Shows the image volume in 3D. - Does not create an
editable mesh.

For plastic surgery modeling:

    MRI/CT
      |
      v
    Segmentation
      |
      v
    3D surface model
      |
      v
    Editing/export

------------------------------------------------------------------------

# 2. Editing bone surface in 3D Slicer

## Important distinction

Volume Rendering: - Visualization only. - Cannot directly edit bone.

Segmentation: - Creates an editable anatomical structure. - Can be
exported as STL/OBJ.

Workflow:

    CT/MRI
      |
      v
    Segment Editor
      |
      v
    Bone segmentation
      |
      v
    Show 3D
      |
      v
    Edit / clean
      |
      v
    Export STL/OBJ

------------------------------------------------------------------------

# 3. Recommended workflow for plastic surgery

## Preferred data

For bone:

    CT / CBCT > MRI

CT is better because: - Bone has clear density differences. - Threshold
segmentation works well. - Facial bone reconstruction is easier.

MRI: - Better for soft tissue. - More difficult for bone extraction.

------------------------------------------------------------------------

# 4. 3D Slicer bone segmentation steps

## Step 1: Load DICOM

    DICOM
     -> Import
     -> Load

Verify the volume appears correctly.

------------------------------------------------------------------------

## Step 2: Open Segment Editor

Create a segment:

    Add
     |
    New segment
     |
    Rename: Bone / Jaw

------------------------------------------------------------------------

## Step 3: Create bone model

Common tools:

### Threshold

Used mainly for CT bone.

### Paint / Erase

Manual correction.

### Scissors

Cut unwanted regions.

### Islands

Remove disconnected fragments.

### Smoothing

Clean the surface.

------------------------------------------------------------------------

# 5. Cutting jaw bone using Scissors

The correct process:

1.  Open:

```{=html}
<!-- -->
```
    Modules
     -> Segment Editor

2.  Select the segment containing the jaw.

Example:

    Bone
    Jaw
    Skin

Select the actual segment containing the geometry.

3.  Choose:

```{=html}
<!-- -->
```
    Scissors

Recommended settings:

    Operation:
    Erase inside

    Shape:
    Free-form / Rectangle / Circle

    Slice cut:
    Unlimited

4.  Draw over the area to remove.

------------------------------------------------------------------------

# 6. Problem: Scissors does nothing

Possible causes:

## Cause 1: Empty segment

Example:

    Bone  <-- contains actual jaw
    Jaw   <-- empty

Selecting Jaw will do nothing.

Solution: - Select Bone. - Or duplicate Bone and create a real Jaw
segment.

------------------------------------------------------------------------

## Cause 2: Cutting volume rendering

Scissors works only on segmentation.

It does NOT cut:

-   Volume Rendering
-   Raw MRI volume

------------------------------------------------------------------------

## Cause 3: Masking restrictions

Check:

    Segment Editor
     -> Masking

Allow editing everywhere.

------------------------------------------------------------------------

## Cause 4: Wrong operation

Use:

    Erase inside

for removing bone.

------------------------------------------------------------------------

# 7. 3D Slicer vs InVesalius

## InVesalius

Good for: - DICOM import - Basic segmentation - STL generation

Limitations: - Limited editing tools. - Less flexible segmentation. - No
strong sculpting workflow.

------------------------------------------------------------------------

## 3D Slicer

Better for:

-   Advanced segmentation
-   Multiple anatomical structures
-   Bone + skin workflow
-   Manual correction
-   Extensions
-   Export to Blender

Recommended:

    3D Slicer
        |
        v
    Blender

------------------------------------------------------------------------

# 8. Blender workflow

Blender is used for:

-   Surface reshaping
-   Sculpting
-   Visualization
-   Before/after simulation

Workflow:

    3D Slicer
     |
     | export STL/OBJ
     v
    Blender
     |
     | sculpt/edit
     v
    Updated model

------------------------------------------------------------------------

# 9. Blender operations

Import:

    File
     -> Import
     -> STL / OBJ

Useful modes:

## Edit Mode

Modify: - vertices - edges - faces

## Sculpt Mode

Tools:

-   Grab
-   Smooth
-   Inflate
-   Flatten

------------------------------------------------------------------------

# 10. Skin simulation

After bone reshaping:

3D Slicer can display: - bone - skin

But:

It cannot automatically calculate realistic postoperative skin movement.

Possible approaches:

1.  Manual skin sculpting in Blender.
2.  Dedicated surgical simulation software.
3.  Finite element soft tissue simulation.

------------------------------------------------------------------------

# 11. Specialized surgical simulation software

Compared options:

## Materialise PROPLAN CMF / Mimics Enlight CMF

Best for: - Cranio-maxillofacial surgery - Orthognathic surgery -
Reconstruction - Surgical planning

## Dolphin 3D Surgery

Good for: - Orthodontics - Jaw surgery planning

## Canfield VECTRA

Good for: - Cosmetic face simulation - Patient consultation

## Crisalix

Good for: - Cosmetic visualization

------------------------------------------------------------------------

# 12. Chosen workflow

The selected approach:

    3D Slicer + Blender

Reason:

3D Slicer: - Medical image processing - Segmentation - Bone/skin
extraction

Blender: - Surface editing - Sculpting - Visualization

Complete workflow:

    CT/MRI
     |
     v
    3D Slicer
     |
     | segment bone
     | segment skin
     |
     v
    STL/OBJ
     |
     v
    Blender
     |
     | reshape bone
     | edit skin appearance
     |
     v
    Before / After visualization

------------------------------------------------------------------------

# 13. Recommended learning order

1.  Learn 3D Slicer:
    -   DICOM loading
    -   Segment Editor
    -   Threshold
    -   Scissors
    -   Export STL
2.  Learn Blender:
    -   Import STL
    -   Object management
    -   Sculpt Mode
    -   Mesh editing
3.  Combine both:
    -   Bone editing
    -   Skin visualization
    -   Surgical mockup
