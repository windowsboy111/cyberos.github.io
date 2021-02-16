export function getThemeMode() {
  return isDarkMode() ? "dark" : "light";
}

export function isDarkMode() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
