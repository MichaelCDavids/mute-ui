// src/Demo.tsx
import React, { useState } from 'react';
import { ThemeProvider, Theme, useTheme } from './context/ThemeContext';
import { Box } from './atoms/Box';
import { Stack } from './layout/Stack';

// Define some color presets
const themes: Record<string, Partial<Theme>> = {
  default: {},
  sunset: {
    colors: {
      primary: '#A24C2A',
      surface: '#F2E9E4',
      inset: '#E0D8D3',
      text: '#4A4A4A',
    },
  },
  ocean: {
    colors: {
      primary: '#0D47A1',
      surface: '#E3F2FD',
      inset: '#BBDEFB',
      text: '#000000',
    },
  },
   forest: {
    colors: {
      primary: '#2E7D32',
      surface: '#E8F5E9',
      inset: '#C8E6C9',
      text: '#1B5E20',
    },
  },
};

const GradientButtons = () => {
  const theme = useTheme();
  return (
    <Box>
      <h2>Gradient Buttons with Pulse Animation</h2>
      <p>
        These buttons showcase the new radial gradients and pulse animation. 
        Click them to see the effect.
      </p>
      <Stack direction="row" gap="md" style={{ marginTop: '20px' }}>
        <Box 
          as="button" 
          style={{ 
            backgroundImage: theme.colors.gradients.aurora,
            animation: 'pulse 2s infinite',
          }}
        >
          Aurora
        </Box>
        <Box 
          as="button" 
          style={{ 
            backgroundImage: theme.colors.gradients.dusk,
            animation: 'pulse 2s infinite',
          }}
        >
          Dusk
        </Box>
        <Box 
          as="button" 
          style={{ 
            backgroundImage: theme.colors.gradients.sand,
            animation: 'pulse 2s infinite',
          }}
        >
          Sand
        </Box>
        <Box 
          as="button" 
          style={{ 
            backgroundImage: theme.colors.gradients.sky,
            animation: 'pulse 2s infinite',
          }}
        >
          Sky
        </Box>
      </Stack>
    </Box>
  );
}


export const Demo = () => {
  const [currentTheme, setCurrentTheme] = useState<Partial<Theme>>(themes.default);

  return (
    <ThemeProvider customTheme={currentTheme}>
      <div style={{ padding: '40px', backgroundColor: '#eee', minHeight: '100vh' }}>
        <Stack gap="lg">
          {/* Header */}
          <Box>
            <h1>Welcome to Mute-UI</h1>
            <p>
              Mute-UI is a small, opinionated set of React components for building clean and visually "muted" user interfaces. 
              It provides a foundational design system to help you create consistent layouts with minimal effort. 
              The core idea is to let the components handle the design, so you can focus on building your application.
            </p>
            <p>
              Try changing the theme to see how the components adapt:
            </p>

             {/* Theme-switching buttons */}
            <Stack direction="row" gap="md" style={{ marginTop: '20px' }}>
                <Box as="button" onClick={() => setCurrentTheme(themes.default)}>Default</Box>
                <Box as="button" onClick={() => setCurrentTheme(themes.sunset)}>Sunset</Box>
                <Box as="button" onClick={() => setCurrentTheme(themes.ocean)}>Ocean</Box>
                <Box as="button" onClick={() => setCurrentTheme(themes.forest)}>Forest</Box>
            </Stack>
          </Box>

          <GradientButtons />

          {/* Demonstration of nested boxes */}
          <Box>
            I am a Level 0 Box (Base Surface)
            
            <Box style={{ marginTop: '20px' }}>
              I am a Level 1 Box (Nested)
              
              <Box style={{ marginTop: '20px' }}>
                I am a Level 2 Box (Deeply Nested)
              </Box>
            </Box>
          </Box>
           <Box>
            <h2>Feedback and Suggestions</h2>
            <p>
              This package is developed by Michael Davids. You can find the package on npm as @MichaelCDavids/mute-ui. 
              Feel free to reach out with any feedback or suggestions for improvement.
            </p>
          </Box>
        </Stack>
      </div>
    </ThemeProvider>
  );
};
