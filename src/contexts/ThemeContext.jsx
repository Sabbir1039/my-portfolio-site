import { createContext, useState, useContext, useMemo, useCallback, useEffect } from "react";

const STORAGE_KEY = "theme";

// Stored choice wins; otherwise follow the OS.
const resolveInitialTheme = () =>
  (localStorage.getItem(STORAGE_KEY) ??
    (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")) === "light";

// Applied at module load — before ReactDOM renders — so the very first paint uses
// the right tokens. Doing this only in the effect below would paint dark first and
// then snap to light, which is the flash this is here to prevent.
const initialIsLightTheme = resolveInitialTheme();
document.documentElement.dataset.theme = initialIsLightTheme ? "light" : "dark";

// Not exported — every consumer goes through useTheme().
const ThemeContext = createContext();

// Custom hook for easier access to theme context. Co-located with its provider on
// purpose — 12 files import it from this path. Costs fast-refresh granularity for
// this one file only.
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(initialIsLightTheme);

  // Drives the whole palette: index.css keys its token values off this attribute.
  // Components never branch on the theme themselves — they use semantic classes.
  useEffect(() => {
    const theme = isLightTheme ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [isLightTheme]);

  // Memoize the toggle function to prevent unnecessary re-renders
  const handleThemeToggle = useCallback(() => {
    setIsLightTheme(prev => !prev);
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    isLightTheme,
    toggleTheme: handleThemeToggle
  }), [isLightTheme, handleThemeToggle]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;