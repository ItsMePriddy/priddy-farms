/**
 * Priddy Farms per-page theme configurations.
 *
 * Each page gets a theme object that overrides accent and surface tokens
 * to create a warm, farm-like atmosphere. Uses only standard Astryx tokens.
 * Per-page Tailwind utilities provide the additional styling differentiation.
 */

import { defineTheme } from "@astryxdesign/core/theme";

/** Home: warm earth tones — wheat, brown, cream */
export const homeTheme = defineTheme({
  name: "priddy-home",
  tokens: {
    "--color-accent": "#8B6914",
    "--color-accent-muted": "#F5E6C833",
    "--color-on-accent": "#FFFFFF",
    "--color-text-accent": "#8B6914",
    "--color-icon-accent": "#8B6914",
    "--color-background-surface": "#FFFBF5",
    "--color-background-body": "#FAF5ED",
    "--color-text-primary": "#3E2C1A",
    "--color-text-secondary": "#6B5B45",
    "--color-border": "#D4C5A9",
  },
});

/** Pumpkin Patch: harvest orange/amber */
export const pumpkinTheme = defineTheme({
  name: "priddy-pumpkin",
  tokens: {
    "--color-accent": "#C7511A",
    "--color-accent-muted": "#FFF0E033",
    "--color-on-accent": "#FFFFFF",
    "--color-text-accent": "#C7511A",
    "--color-icon-accent": "#C7511A",
    "--color-background-surface": "#FFFDF8",
    "--color-background-body": "#FEF8F0",
    "--color-text-primary": "#3D2010",
    "--color-text-secondary": "#8B5E3C",
    "--color-border": "#E8A838",
  },
});

/** Christmas Trees: evergreen with cranberry accents */
export const christmasTheme = defineTheme({
  name: "priddy-christmas",
  tokens: {
    "--color-accent": "#1B5E20",
    "--color-accent-muted": "#E8F5E933",
    "--color-on-accent": "#FFFFFF",
    "--color-text-accent": "#1B5E20",
    "--color-icon-accent": "#1B5E20",
    "--color-background-surface": "#FAFDFA",
    "--color-background-body": "#F5FBF5",
    "--color-text-primary": "#1B3A1B",
    "--color-text-secondary": "#4A6741",
    "--color-border": "#B71C1C",
  },
});

/** Summer Camp: sunlit green with golden accents */
export const summerCampTheme = defineTheme({
  name: "priddy-summer-camp",
  tokens: {
    "--color-accent": "#4CAF50",
    "--color-accent-muted": "#E8F5E933",
    "--color-on-accent": "#FFFFFF",
    "--color-text-accent": "#4CAF50",
    "--color-icon-accent": "#4CAF50",
    "--color-background-surface": "#F9FFF9",
    "--color-background-body": "#F5FFF5",
    "--color-text-primary": "#1B3A1B",
    "--color-text-secondary": "#5A7D5A",
    "--color-border": "#FFC107",
  },
});

/** Visit: clean neutral */
export const visitTheme = defineTheme({
  name: "priddy-visit",
  tokens: {
    "--color-accent": "#6B8F71",
    "--color-accent-muted": "#EEF3EF33",
    "--color-on-accent": "#FFFFFF",
    "--color-text-accent": "#6B8F71",
    "--color-icon-accent": "#6B8F71",
    "--color-background-surface": "#FFFFFF",
    "--color-background-body": "#FAFAF7",
    "--color-text-primary": "#2D2D2D",
    "--color-text-secondary": "#6B6B6B",
    "--color-border": "#D4D4D4",
  },
});

/** Map section themes by path pattern for easy lookup */
export const themeByPath: Record<string, ReturnType<typeof defineTheme>> = {
  "/": homeTheme,
  "/millington": homeTheme,
  "/bartlett": homeTheme,
  "/pumpkin-patch": pumpkinTheme,
  "/christmas-trees": christmasTheme,
  "/summer-camp": summerCampTheme,
  "/visit": visitTheme,
};

export function getThemeForPath(pathname: string) {
  if (themeByPath[pathname]) return themeByPath[pathname];
  return homeTheme;
}
