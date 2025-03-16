"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";
import { colorPalette, generateCssVariables } from "@/config/colors";

function updateThemeColors() {
  const cssVars = generateCssVariables(colorPalette);

  // Update light theme variables
  Object.entries(cssVars.light).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });

  // Update dark theme variables
  const darkVars = Object.entries(cssVars.dark)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");

  // Update or create dark mode style
  let style = document.getElementById("theme-colors");
  if (!style) {
    style = document.createElement("style");
    style.id = "theme-colors";
    document.head.appendChild(style);
  }
  style.textContent = `.dark {\n${darkVars}\n}`;
}

export function ThemeProvider({ children, ...props }) {
  useEffect(() => {
    updateThemeColors();
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
