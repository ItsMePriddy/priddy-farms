---
version: alpha
name: Priddy Farms
description: Two farms, one family — warm, hand-tended Mid-South farm branding that shifts palette by season.
colors:
  # Core roles
  primary: "#8A3324"      # Barn Red — brand anchor, primary buttons, phone links
  secondary: "#33261A"    # Bark Ink — headlines and core text
  tertiary: "#C05F17"     # Pumpkin — the handwritten/seasonal accent
  neutral: "#F7EFDD"      # Cream — default page/section background
  # Text ramp
  ink: "#33261A"          # Darkest text
  body: "#4A3A29"         # Body copy
  muted: "#6B5843"        # Secondary/meta text
  creamText: "#FBF3E0"    # Text on dark (barn-red) backgrounds
  # Brand & seasonal
  barnRedDark: "#6E2819"  # Barn Red hover/pressed
  pumpkin: "#C05F17"      # Fall accent
  fallDeep: "#9C470B"     # Fall Festival page background
  evergreen: "#2F4A33"    # Christmas accent + page background
  brown: "#6B4A2E"        # Visit Us page background
  # Surfaces
  cream: "#F7EFDD"        # Section background (light)
  tan: "#F3E7CE"          # Section background (tint), chips, badges
  card: "#FFFDF6"         # Card surface
  cardBorder: "#E3D5B8"   # Card hairline border
  slotBorder: "#D4C5A0"   # image-slot dashed border
typography:
  h1:
    fontFamily: Besley
    fontSize: 60px
    fontWeight: 800
    lineHeight: 1.08
  h2:
    fontFamily: Besley
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.2
  h3:
    fontFamily: Besley
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.3
  kicker:
    fontFamily: Caveat
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.3
  body-md:
    fontFamily: Nunito Sans
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: Nunito Sans
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.4
  button:
    fontFamily: Nunito Sans
    fontSize: 15px
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  sm: 12px    # image-slot
  md: 16px    # cards, season links
  pill: 999px # buttons, chips, badges
spacing:
  xs: 6px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.creamText}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px
  button-primary-hover:
    backgroundColor: "{colors.barnRedDark}"
    textColor: "{colors.creamText}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.body}"
    rounded: "{rounded.md}"
    padding: 28px
  chip:
    backgroundColor: "{colors.tan}"
    textColor: "{colors.body}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 6px
  badge-fall:
    backgroundColor: "{colors.tan}"
    textColor: "{colors.fallDeep}"
    rounded: "{rounded.pill}"
    padding: 6px
  badge-christmas:
    backgroundColor: "{colors.tan}"
    textColor: "{colors.evergreen}"
    rounded: "{rounded.pill}"
    padding: 6px
  season-label-fall:
    backgroundColor: "{colors.pumpkin}"
    textColor: "{colors.card}"
    rounded: "{rounded.pill}"
    padding: 6px
  season-label-christmas:
    backgroundColor: "{colors.evergreen}"
    textColor: "{colors.card}"
    rounded: "{rounded.pill}"
    padding: 6px
  image-slot:
    backgroundColor: "{colors.tan}"
    rounded: "{rounded.sm}"
---

## Overview

Priddy Farms is a two-location, family-run pumpkin patch and Christmas-tree farm
in the Mid-South. The brand voice is warm, plain-spoken, and unhurried —
"y'all come make a memory with us." Design should feel hand-tended and
seasonal, never corporate or techy: most visitors are non-technical and value
simple, elegant navigation over power features.

The identity is a single warm base palette (barn red + bark ink + cream) that
**re-tints by season**. The home page anchors on Barn Red; seasonal pages swap
their background to a deep seasonal tone (Fall pumpkin, Christmas evergreen,
Visit Us warm brown) while keeping the same type, cards, and buttons. This
keeps the family "story" consistent while letting each page carry its own mood.

## Colors

- **Primary — Barn Red (#8A3324):** The brand anchor. Primary buttons, phone
  links, the home background, and announcement banners. Hover/pressed uses
  **Barn Red Dark (#6E2819)**.
- **Secondary — Bark Ink (#33261A):** All headlines and the darkest text.
- **Tertiary — Pumpkin (#C05F17):** The seasonal/handwritten accent — kickers,
  fall labels, "learn more" energy. Use sparingly as the spark, not the field.
- **Neutral — Cream (#F7EFDD):** The default light section background. **Tan
  (#F3E7CE)** is the alternating tint background and the fill for chips/badges.
- **Text ramp:** Bark Ink (#33261A) for headings, **Body (#4A3A29)** for copy,
  **Muted (#6B5843)** for meta/addresses. On dark backgrounds use **Cream Text
  (#FBF3E0)**.
- **Seasonal backgrounds:** Fall Festival deep pumpkin **#9C470B**, Christmas
  evergreen **#2F4A33**, Visit Us warm brown **#6B4A2E**. Sections inside a
  seasonal page still use Cream/Tan panels and white cards so text contrast
  stays comfortable.
- **Surfaces:** Cards are near-white **#FFFDF6** with a **#E3D5B8** hairline
  border. Empty image placeholders use a Tan fill with a **#D4C5A0** dashed
  border.

## Typography

Three families, each with one job:

- **Besley** (serif, weights 700–800): every heading (h1–h3). Gives the farm
  its journalistic, storybook gravitas.
- **Caveat** (handwritten, 700): kickers and the "letter from the family" —
  the personal, y'all-come voice. Never for body or UI.
- **Nunito Sans** (400/600/700/800): all body copy, buttons, chips, labels,
  and data. The friendly, legible workhorse.

Headings scale fluidly in the app (`clamp()` between the small and the token
sizes above); the tokens record the desktop maximum.

## Layout

- Section rhythm: **80px** vertical padding, **24px** horizontal gutters.
- Content max-width **1080px**, centered; prose blocks cap at ~680px for
  readability.
- Card/feature grids use `auto-fit` columns with a **280–290px** minimum and
  **24–32px** gaps, so they reflow gracefully on phones.
- Most marketing content is center-aligned; dense info (hours, addresses)
  left-aligns inside cards.

## Shapes

- **image-slot / small (12px):** photo placeholders.
- **Cards & season links (16px):** the primary rounded surface.
- **Pill (999px):** every button, chip, badge, and announcement banner.
  The pill is the signature shape — approachable and hand-rounded.

## Components

- **button-primary:** The one high-emphasis action. Barn Red pill, Cream Text,
  800 weight. Hover darkens to Barn Red Dark. Used for "Plan your visit",
  "Learn more", "See pricing".
- **card:** Near-white surface, hairline border, soft shadow. Holds farm
  cards, seasonal features, hours/admission/find-us.
- **chip:** Tan pill for feature tags ("Pumpkin Patch", "Hayrides").
- **badge / season-label:** Small pills that color-code by season — Pumpkin
  and deep-pumpkin for fall, Evergreen for Christmas, Barn Red for events.
- **image-slot:** Custom element for drop-in photos; Tan fill, dashed border
  until an image is placed.

## Do's and Don'ts

- **Do** keep one Barn Red primary button per view — it's the only high-emphasis
  action. Everything else is a link or a pill chip.
- **Do** re-tint the page background by season, but keep type, cards, and
  buttons identical across pages.
- **Do** reserve Caveat for genuinely personal, human moments (kickers, the
  family letter).
- **Don't** put Pumpkin text on Tan for anything that must be read at a glance —
  it's a low-contrast decorative pairing, fine only for tiny badges.
- **Don't** introduce new fonts, new corner radii, or square-cornered buttons.
- **Don't** add complex navigation. Simple but elegant — most visitors are not
  tech-savvy.
