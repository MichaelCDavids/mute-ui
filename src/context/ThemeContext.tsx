// src/context/ThemeContext.tsx
import React, { createContext, useContext } from 'react';

// 1. Define the shape of our theme
interface Theme {
  colors: {
    surface: string;
    text: string;
    accent: string;
  };
  spacing: Record<string, string>;
}

// 2. Create the default "Muted" values
const defaultTheme: Theme = {
  colors: {
    surface: '#F8F9FA',
    text: '#212529',
    accent: '#DEE2E6',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
  }
};


// 3. Create the Context object
const ThemeContext = createContext<Theme>(defaultTheme);

// 4. Create the Provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // In a more advanced version, you could add state here to toggle "Dark Mode"
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

// 5. Create a custom hook for easy access
export const useTheme = () => useContext(ThemeContext);

