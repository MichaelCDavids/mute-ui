import React, { useMemo } from 'react';
import { Theme, defaultTheme } from './theme';
import { ThemeContext } from './ThemeContext';

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
