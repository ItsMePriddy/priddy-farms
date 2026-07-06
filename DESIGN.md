---
version: alpha
name: Priddy Farms
description: Two farms, one family — warm, hand-tended Mid-South farm branding that re-tints by season over a shared cream-and-barn-red base.
colors:
  # ── Core roles ──
  primary: "#8A3324"      # Barn Red — brand anchor: primary buttons, phone links, active nav
  secondary: "#33261A"    # Bark Ink — headlines, core text, footer field
  tertiary: "#C05F17"     # Pumpkin — the warm seasonal spark (accents on LIGHT surfaces)
  neutral: "#F7EFDD"      # Cream — default light page/section background
  # ── Text ramp ──
  body: "#4A3A29"         # Body copy on light
  muted: "#6B5843"        # Meta / addresses / secondary text
  creamText: "#FBF3E0"    # Primary text on dark (barn-red / seasonal) backgrounds
  paleCream: "#EFE3CC"    # Body text on the ink footer and brown Visit page
  # ── Brand states / deep tones ──
  barnRedDark: "#6E2819"  # Barn Red hover / pressed
  espresso: "#241B12"     # Deepest brown — Fall "after dark" cards + secondary dark button
  # ── Surfaces ──
  tan: "#F3E7CE"          # Alternating tint section bg; chips, badges, active nav
  paleTint: "#F5ECD5"     # Softest tint — Visit "Hours" band
  card: "#FFFDF6"         # Card surface (near-white)
  cardBorder: "#E3D5B8"   # Card / header hairline border
  slotBorder: "#D4C5A0"   # image-slot dashed border
  # ── Seasonal accents · FALL / HARVEST ──
  fallDeep: "#9C470B"     # Fall Festival page bg + AA-safe fall label/badge fill
  gold: "#E8B96A"         # Wheat gold — the accent on DARK backgrounds (kickers, footer phone)
  amber: "#DFA032"        # Harvest gold — Events kickers + Summer Camp label
  # ── Seasonal accents · CHRISTMAS / EVERGREEN ──
  evergreen: "#2F4A33"    # Christmas page bg + Christmas accent + canonical "THE ORIGINAL" badge
  holly: "#3A7D44"        # Bright holly green — bordered green badges
  sage: "#5C7A4A"         # Muted farm green — Field Trips / group labels
  # ── Seasonal accents · WINTER-SPRING / EARTH ──
  walnut: "#6B4A2E"       # Visit page bg + parties chip text
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
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
  eyebrow:
    fontFamily: Nunito Sans
    fontSize: 13px
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0.1em"
  button:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  sm: 12px    # image-slot
  md: 16px    # standard cards
  lg: 20px    # feature cards / hero media
  pill: 999px # buttons, chips, badges, banners
spacing:
  xs: 6px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 80px
elevation:
  card: "0 2px 10px rgba(59,42,29,0.06)"
  cardRaised: "0 3px 14px rgba(59,42,29,0.12)"
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
  button-dark:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.creamText}"
    rounded: "{rounded.pill}"
    padding: 14px
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.body}"
    rounded: "{rounded.md}"
    padding: 22px
  card-dark:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.creamText}"
    rounded: "{rounded.lg}"
    padding: 32px
  footer:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.paleCream}"
    padding: 32px
  nav-active:
    backgroundColor: "{colors.tan}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.pill}"
    padding: 8px
  chip:
    backgroundColor: "{colors.tan}"
    textColor: "{colors.body}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 6px
  chip-walnut:
    backgroundColor: "{colors.tan}"
    textColor: "{colors.walnut}"
    rounded: "{rounded.pill}"
    padding: 6px
  badge-fall:
    backgroundColor: "{colors.tan}"
    textColor: "{colors.fallDeep}"
    rounded: "{rounded.pill}"
    padding: 6px
  badge-evergreen:
    backgroundColor: "{colors.tan}"
    textColor: "{colors.evergreen}"
    rounded: "{rounded.pill}"
    padding: 6px
  season-label-fall:
    backgroundColor: "{colors.fallDeep}"
    textColor: "{colors.creamText}"
    rounded: "{rounded.pill}"
    padding: 6px
  season-label-christmas:
    backgroundColor: "{colors.evergreen}"
    textColor: "{colors.card}"
    rounded: "{rounded.pill}"
    padding: 6px
  season-label-events:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.card}"
    rounded: "{rounded.pill}"
    padding: 6px
  image-slot:
    backgroundColor: "{colors.tan}"
    rounded: "{rounded.sm}"
---

## Overview

Priddy Farms is a two-location, family-run pumpkin patch and Christmas-tree farm
in the Mid-South (Millington & Bartlett, TN). The voice is warm, plain-spoken,
and unhurried — "y'all come make a memory with us." The design must feel
hand-tended and seasonal, never corporate or techy: most visitors are
non-technical and value simple, elegant navigation over power features.

**The core idea: one warm base, re-tinted by season.** Every page shares the
same type, cards, buttons, and pill shapes. What changes is the page
*background* and its *accent*:

| Page            | Background          | Accent on dark        |
|-----------------|---------------------|-----------------------|
| Home            | Cream `#F7EFDD`     | Pumpkin `#C05F17`     |
| Fall Festival   | Fall Deep `#9C470B` | Gold `#E8B96A`        |
| Christmas       | Evergreen `#2F4A33` | Gold `#E8B96A`        |
| Parties & Events| Cream `#F7EFDD`     | Amber `#DFA032`       |
| Visit Us        | Walnut `#6B4A2E`    | Pumpkin `#C05F17`     |

This keeps the family "story" consistent while letting each page carry its own
mood.

## Colors

- **Primary — Barn Red (#8A3324):** brand anchor. Primary buttons, phone links,
  the Home background accent, active nav pill, announcement banners. Hover
  darkens to **Barn Red Dark (#6E2819)**.
- **Secondary — Bark Ink (#33261A):** headlines, darkest text, the footer field.
- **Tertiary — Pumpkin (#C05F17):** the warm seasonal spark. Use on **light**
  surfaces (kickers, Home/Visit accents) and only at **large sizes** — see
  Do's & Don'ts for the contrast rule.
- **Neutral — Cream (#F7EFDD)** / **Tan (#F3E7CE)** / **Pale Tint (#F5ECD5):**
  the three light backgrounds, lightest to warmest, that alternate down a page.
- **Text ramp:** Bark Ink for headings, **Body (#4A3A29)** for copy, **Muted
  (#6B5843)** for meta. On dark backgrounds use **Cream Text (#FBF3E0)**;
  **Pale Cream (#EFE3CC)** is the softer body tone on the footer and Visit page.
- **Deep tones:** **Espresso (#241B12)** is the "after dark" surface — Fall's
  haunted cards and the secondary dark button.
- **Seasonal accents:**
  - *Fall/Harvest* — **Fall Deep (#9C470B)** (page + AA-safe labels), **Gold
    (#E8B96A)** (the accent on dark backgrounds), **Amber (#DFA032)** (harvest
    kickers/labels).
  - *Christmas* — **Evergreen (#2F4A33)** (page + accent + canonical badge),
    **Holly (#3A7D44)** (bright bordered badge), **Sage (#5C7A4A)** (group
    labels).
  - *Earth* — **Walnut (#6B4A2E)** (Visit background, chip text).
- **Surfaces:** Cards are near-white **#FFFDF6** with an **#E3D5B8** hairline.
  Empty photo slots use Tan with a **#D4C5A0** dashed border.

## Typography

Three families, each with one job:

- **Besley** (serif, 700–800): every heading (h1–h3) and stat numerals.
  The farm's journalistic, storybook gravitas.
- **Caveat** (handwritten, 700): kickers and the family letter — the personal,
  y'all-come voice. Never for body or UI.
- **Nunito Sans** (400–800): all body copy, buttons, chips, eyebrows, and data.
  The friendly, legible workhorse.

Headings scale fluidly in-app (`clamp()` between a mobile min and the token
sizes above); tokens record the desktop maximum. Uppercase **eyebrow** labels
(13px/800, 0.1em tracking) sit above section headings.

## Layout

- Section rhythm: **80px** vertical (fluid `clamp(40px,7vw,72px)` on inner
  sections), **20–24px** horizontal gutters.
- Content max-width **1080px**, centered; prose blocks cap ~600–680px.
- Card grids use `auto-fit` columns, **240–290px** minimum, **16–32px** gaps —
  they reflow to one column on phones.
- Marketing copy centers; dense info (hours, addresses, offerings) left-aligns
  inside cards.

## Elevation & Depth

Shadows are soft and brown-tinted, never gray. Standard cards use
`0 2px 10px rgba(59,42,29,0.06)`; raised/dark feature cards use
`0 3px 14px rgba(59,42,29,0.12)`. No hard borders for depth — a hairline
(#E3D5B8) plus a soft shadow.

## Shapes

- **image-slot / sm (12px):** photo placeholders.
- **Cards (16px)** and **feature/hero cards (20px):** the rounded surfaces.
- **Pill (999px):** every button, chip, badge, eyebrow label, and banner.
  The pill is the signature shape — approachable and hand-rounded.

## Components

- **button-primary:** the one high-emphasis action per view. Barn Red pill,
  Cream Text, 800 weight; hover → Barn Red Dark. **button-dark** (Espresso) is
  the secondary action on Fall's dark sections.
- **card / card-dark:** near-white surface with hairline + soft shadow; the
  Espresso variant carries Cream Text on Fall's "after dark" band.
- **chip / chip-walnut:** Tan pills for feature tags; walnut text on the Events
  page, body text elsewhere.
- **badge / season-label:** small pills color-coded by season. Fall labels use
  **Fall Deep** (AA-safe) rather than raw Pumpkin; Christmas uses Evergreen;
  Events uses Barn Red. Badges on Tan use Fall Deep or Evergreen text.
- **footer:** Bark Ink field, Pale Cream body, Gold phone links.
- **nav-active:** Tan pill with Ink text; inactive links are Muted.
- **image-slot:** custom element for drop-in photos; Tan fill, dashed border
  until an image is placed.

## Do's and Don'ts

- **Do** keep one Barn Red primary button per view — it's the only
  high-emphasis action. Everything else is a link or a pill chip.
- **Do** re-tint the page background + accent by season, but keep type, cards,
  and buttons identical across pages.
- **Do** reserve Caveat for genuinely personal moments (kickers, family letter).
- **Do** put warm accents (Pumpkin, Gold, Amber) on **dark** backgrounds or at
  **large sizes** — that's where they sing and stay legible.
- **Don't** use Pumpkin (#C05F17) or Amber (#DFA032) for **small** text on Cream
  or Tan — it drops below WCAG AA. For small fall labels/badges use **Fall Deep
  (#9C470B)**; keep amber to large (≥24px) handwritten kickers only.
- **Don't** mix greens for the same meaning — the "THE ORIGINAL" badge is
  **Evergreen**; reserve Holly/Sage for their documented label roles.
- **Don't** introduce new fonts, new corner radii, or square-cornered buttons.
- **Don't** add complex navigation. Simple but elegant — most visitors are not
  tech-savvy.
