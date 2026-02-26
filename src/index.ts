// src/index.ts
import { Box } from './atoms/Box';
import { Stack } from './layout/Stack';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// 1. Named Exports
export { Box, Stack, ThemeProvider, useTheme };

// 2. Namespace Export (The "Muted" Object)
export const Muted = {
  Box,
  Stack,
  ThemeProvider,
};
