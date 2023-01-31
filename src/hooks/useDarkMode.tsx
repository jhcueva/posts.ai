import { useEffect } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { isDarkMode } from "../components/store";

function useDarkMode() {
  const $isDarkMode = useStore(isDarkMode);
  const colorTheme = $isDarkMode === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add($isDarkMode);
    localStorage.setItem("$isDarkMode", $isDarkMode);
  }, [$isDarkMode, colorTheme]);

  return { colorTheme, $isDarkMode };
}

export default useDarkMode;
