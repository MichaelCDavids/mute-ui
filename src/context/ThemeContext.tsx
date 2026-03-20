import React, { createContext, useContext, useMemo } from 'react';

// 1. Define the shape of the theme
export interface Theme {
  colors: {
    primary: string;
    surface: string;
    inset: string;
    text: string;
    accent: string;
    gradients: {
      primary: string;
      secondary: string;
      tertiary: string;
      aurora: string;
      dusk: string;
      sand: string;
      sky: string;
      mist: string;
      stone: string;
      meadow: string;
      rose: string;
      peach: string;
      ice: string;
      lavender: string;
      mint: string;
      butter: string;
      coral: string;
      ocean: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    0: string;
    1: string;
    2: string;
  };
  // ... add other theme properties like typography, breakpoints, etc.
}

// 2. Create the default "Muted" values
const defaultTheme: Theme = {
  colors: {
    primary: '#4A4A4A',
    surface: '#FFFFFF',
    inset: '#F5F5F5',
    text: '#212529',
    accent: '#E0E0E0',
    gradients: {
      primary: 'radial-gradient(circle, #D4D4D4, #BDBDBD)',
      secondary: 'radial-gradient(circle, #EAEAEA, #CFCFCF)',
      tertiary: 'radial-gradient(circle, #F5F5F5, #DEDEDE)',
      aurora: 'radial-gradient(circle, #b1e1c4, #83c1a3)',
      dusk: 'radial-gradient(circle, #d1b1e1, #a383c1)',
      sand: 'radial-gradient(circle, #e1d4b1, #c1a883)',
      sky: 'radial-gradient(circle, #b1d4e1, #83a8c1)',
      mist: 'radial-gradient(circle, #d7e0e4, #b0c0c8)',
      stone: 'radial-gradient(circle, #c8c8c8, #a8a8a8)',
      meadow: 'radial-gradient(circle, #c4e1b1, #a3c183)',
      rose: 'radial-gradient(circle, #e1b1b1, #c18383)',
      peach: 'radial-gradient(circle, #e1c4b1, #c1a383)',
      ice: 'radial-gradient(circle, #b1e1e1, #83c1c1)',
      lavender: 'radial-gradient(circle, #e1d1e1, #c1a3c1)',
      mint: 'radial-gradient(circle, #d1e1d1, #a3c1a3)',
      butter: 'radial-gradient(circle, #e1e1d1, #c1c1a3)',
      coral: 'radial-gradient(circle, #e1b1a0, #c1836f)',
      ocean: 'radial-gradient(circle, #a0b1e1, #6f83c1)',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  shadows: {
    0: 'none',
    1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  },
};


// 3. Create the ThemeContext
const ThemeContext = createContext<Theme>(defaultTheme);

// 4. Create a ThemeProvider component
interface ThemeProviderProps {
  children: React.ReactNode;
  customTheme?: Partial<Theme>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, customTheme }) => {
  const theme = useMemo(() => {
    if (!customTheme) return defaultTheme;
    return {
        ...defaultTheme,
        ...customTheme,
        colors: {
            ...defaultTheme.colors,
            ...customTheme.colors,
            gradients: {
                ...defaultTheme.colors.gradients,
                ...customTheme.colors?.gradients,
            },
        },
        spacing: {
            ...defaultTheme.spacing,
            ...customTheme.spacing,
        },
        shadows: {
            ...defaultTheme.shadows,
            ...customTheme.shadows,
        },
    };
}, [customTheme]);


  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

// 5. Create a hook to access the theme
export const useTheme = () => useContext(ThemeContext);

// 6. Create a context for the Box component's level
export const BoxLevelContext = createContext(0);