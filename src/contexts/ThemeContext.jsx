import { createContext, useState, useContext, useMemo, useCallback } from "react";

// Create context with default values
export const ThemeContext = createContext();

// Custom hook for easier access to theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);

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