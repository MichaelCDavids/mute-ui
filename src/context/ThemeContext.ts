import { createContext } from 'react';
import { Theme, defaultTheme } from './theme';

export const ThemeContext = createContext<Theme>(defaultTheme);
