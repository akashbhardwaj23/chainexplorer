"use client";

import { useEffect, useState } from "react";

type ThemeType = "light" | "dark" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>("system");
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    if (theme === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark").matches) {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add("dark");
        setResolvedTheme('dark')
      } else {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add("light");
        setResolvedTheme('light')
      }
    } else {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        setResolvedTheme(theme)
    }
  }, [theme]);

  return {
    theme,
    setTheme,
    resolvedTheme
  };
}