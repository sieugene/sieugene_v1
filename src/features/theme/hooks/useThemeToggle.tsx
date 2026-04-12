import { useEffect, useState } from "react";
import { STORAGE_THEME_KEY } from "../lib/constants";
import { Theme } from "../types";

function getTheme() {
  const storage = localStorage.getItem(STORAGE_THEME_KEY) as Theme;
  const isDarkThemeInDom = document.documentElement.classList.contains(
    Theme.DARK,
  );
  if (storage) {
    return storage;
  }
  return isDarkThemeInDom ? Theme.DARK : Theme.LIGHT;
}

function updateThemeStorage(theme: Theme) {
  localStorage.setItem(STORAGE_THEME_KEY, theme);
}

export const useThemeToggle = () => {
  const [dark, setDark] = useState(() => false);

  function updateTheme(theme: Theme) {
    const isDark = theme === Theme.DARK;
    document.documentElement.classList.toggle(Theme.DARK, isDark);
    updateThemeStorage(isDark ? Theme.DARK : Theme.LIGHT);
    setDark(isDark);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateTheme(getTheme());
  }, []);

  function toggle() {
    updateTheme(dark ? Theme.LIGHT : Theme.DARK);
  }

  return { toggle, dark };
};
