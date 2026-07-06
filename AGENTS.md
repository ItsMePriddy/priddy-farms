<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- ASTRYX:START -->
Astryx v0.1.3 · 149 components
CLI: run every command as `npx astryx <cmd>` (shown below as `astryx ...`).

SETUP (once, in your app entry e.g. main.tsx) — without these, components render unstyled:
  import "@astryxdesign/core/reset.css";
  import "@astryxdesign/core/astryx.css";

WORKFLOW — discover, don't guess. Before writing UI:
1. `astryx build "<idea>"` — START HERE: returns a kit (closest [page] + [block]s + [component]s). No args = full playbook.
2. `astryx template <name> [--skeleton]` — scaffold the [page]/[block]s it named, or study their layout. Templates are reference code.
3. `astryx component <Name>` — props + examples for every component you use.

RULES:
- No <div> — components do all layout/spacing. Full page → AppShell; sidebar nav → SideNav.
- Frame first: pick the shell (AppShell / Layout+LayoutPanel) and budget regions in px BEFORE writing content (`astryx docs layout`).
- Dense data = rows (Table, List/Item) edge-to-edge — never Card-wrapped list items. Card = dashboard widgets, galleries, settings groups only.
- Status → StatusDot/Token; Badge only for counts and enumerated states, never decoration.
- Custom styling: component props first; else Tailwind utilities backed by tokens (bg-surface, text-primary, rounded-lg) via tailwind-theme.css. No raw hex/px.
- Tokens for every value (`astryx docs tokens`). Brand/accent via `astryx theme` — never override --color-* in :root.

MORE CLI:
  search "<query>"   find any component / hook / doc / template / block
  component --list   149 components by category
  template --list    page + block recipes
  docs <topic>       color, elevation, icons, illustrations, layout, migration, motion, principles, shape, spacing, styling, theme, tokens, typography
  swizzle <Name>     eject component source for deep customization
  upgrade --apply    run after any @astryxdesign/core bump
<!-- ASTRYX:END -->

<!-- DESIGN.MD:START -->
# Design tokens — DESIGN.md is the source of truth

`DESIGN.md` (repo root) is the normative Priddy Farms design spec, in Google's
design.md format. Read it before writing or restyling any UI. Do NOT invent
new colors, fonts, or radii — every value already has a token there.

Palette (see DESIGN.md for the full ramp + rationale):
- Barn Red `#8A3324` (primary/hover `#6E2819`), Bark Ink `#33261A`,
  Pumpkin `#C05F17`, Cream `#F7EFDD` / Tan `#F3E7CE`, Card `#FFFDF6`.
- Seasonal page backgrounds: Fall `#9C470B`, Christmas `#2F4A33`, Visit `#6B4A2E`.
- Fonts: Besley (headings), Caveat (kickers/personal), Nunito Sans (body/UI).
- Pill (999px) is the signature shape; cards 16px; image-slots 12px.

Generated exports (regenerate after editing DESIGN.md — do not hand-edit):
- `design.tailwind.json`  — Tailwind theme.extend
- `design.tokens.json`    — W3C DTCG tokens

Commands (via the design-md skill):
  npx -y @google/design.md lint DESIGN.md
  npx -y @google/design.md export --format tailwind DESIGN.md > design.tailwind.json
  npx -y @google/design.md export --format dtcg DESIGN.md > design.tokens.json

Accessibility note: the small fall season-label (Cream on Pumpkin) is 4.22:1,
just under WCAG AA 4.5:1. Use `fallDeep #9C470B` as the label background if the
text must pass AA. Verify contrast with `lint` after palette changes.
<!-- DESIGN.MD:END -->
