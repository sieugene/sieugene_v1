"use client";

import { MoonIcon, SunIcon } from "@/shared/ui";
import { useThemeToggle } from "../hooks/useThemeToggle";

export default function ThemeToggle() {
  const { dark, toggle } = useThemeToggle();

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
