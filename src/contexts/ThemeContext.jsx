import { createContext, useState, useContext, useMemo, useCallback, useEffect } from "react";

const STORAGE_KEY = "theme";

// Stored choice wins; otherwise follow the OS. Resolved synchronously so React's
// first paint is already correct.
const resolveInitialTheme = () =>
  (localStorage.getItem(STORAGE_KEY) ??
    (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")) === "light";

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
  const [isLightTheme, setIsLightTheme] = useState(resolveInitialTheme);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, isLightTheme ? "light" : "dark");
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