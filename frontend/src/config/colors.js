export const colorPalette = {
  // Base colors that will be used to generate the theme
  primary: "#0066FF",
  secondary: "#6366F1",
  accent: "#F43F5E",
  neutral: "#1F2937",

  // Light mode specific overrides (optional)
  light: {
    background: "#FFFFFF",
    foreground: "#1F2937",
    muted: "#F3F4F6",
    border: "#E5E7EB",
  },

  // Dark mode specific overrides (optional)
  dark: {
    background: "#1F2937",
    foreground: "#F9FAFB",
    muted: "#374151",
    border: "#374151",
  },
};

// Function to generate CSS color variables
export function generateCssVariables(colors = colorPalette) {
  return {
    light: {
      "--background": colors.light?.background || "#FFFFFF",
      "--foreground": colors.light?.foreground || colors.neutral,
      "--primary": colors.primary,
      "--primary-foreground": "#FFFFFF",
      "--secondary": colors.secondary,
      "--secondary-foreground": "#FFFFFF",
      "--accent": colors.accent,
      "--accent-foreground": "#FFFFFF",
      "--muted": colors.light?.muted || "#F3F4F6",
      "--muted-foreground": "#6B7280",
      "--border": colors.light?.border || "#E5E7EB",
      "--ring": colors.primary,
    },
    dark: {
      "--background": colors.dark?.background || "#1F2937",
      "--foreground": colors.dark?.foreground || "#F9FAFB",
      "--primary": colors.primary,
      "--primary-foreground": "#FFFFFF",
      "--secondary": colors.secondary,
      "--secondary-foreground": "#FFFFFF",
      "--accent": colors.accent,
      "--accent-foreground": "#FFFFFF",
      "--muted": colors.dark?.muted || "#374151",
      "--muted-foreground": "#9CA3AF",
      "--border": colors.dark?.border || "#374151",
      "--ring": colors.primary,
    },
  };
}
