
import React, { createContext, useContext, useMemo } from 'react';

// Define a deep partial utility type
type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

// 1. Define the shape of our theme
export interface Theme {
  colors: {
    primary: string;
    surface: string;
    inset: string;
    text: string;
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
    };
     button: {
      text: string;
      hover: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  shadows: {
    0: string;
    1: string;
    2: string;
  };
  animations: {
    pulse: string;
  };
}

// 2. Create the default "Muted" values
const defaultTheme: Theme = {
  colors: {
    primary: '#4A4A4A',
    surface: '#FFFFFF',
    inset: '#F5F5F5',
    text: '#212529',
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
    },
    button: {
      text: '#FFFFFF',
      hover: '#333333',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
  shadows: {
    0: 'none',
    1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  },
  animations: {
    pulse: `
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }
    `,
  },
};

// 3. Create the Context objects
const ThemeContext = createContext<Theme>(defaultTheme);
export const BoxLevelContext = createContext(0); // For nested Box styles

// 4. Create the Provider component
interface ThemeProviderProps {
  children: React.ReactNode;
  customTheme?: DeepPartial<Theme>;
}

// Helper for deep merging themes
const deepMerge = (target: { [key: string]: any }, source: { [key:string]: any }) => {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, { [key]: source[key] });
        else
          output[key] = deepMerge(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

const isObject = (item: any): item is object => {
  return (item && typeof item === 'object' && !Array.isArray(item));
};


export const ThemeProvider = React.memo(({ children, customTheme }: ThemeProviderProps) => {
  // Memoize the theme value to prevent unnecessary re-renders
  const theme = useMemo(() => {
    if (customTheme) {
      return deepMerge(defaultTheme, customTheme) as Theme;
    }
    return defaultTheme;
  }, [customTheme]);

  return (
    <ThemeContext.Provider value={theme}>
      <style>{theme.animations.pulse}</style>
      {children}
    </ThemeContext.Provider>
  );
});

// 5. Create a custom hook for easy access
export const useTheme = () => useContext(ThemeContext);
