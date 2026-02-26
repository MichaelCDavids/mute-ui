// src/Demo.tsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Box } from './atoms/Box';
import { Stack } from './layout/Stack';

export const Demo = () => {
  return (
    <ThemeProvider>
      <div style={{ padding: '40px', backgroundColor: '#eee', minHeight: '100vh' }}>
        <Stack gap="lg">
          {/* Level 0: Base Surface */}
          <Box>
            I am a Level 0 Box (Base Surface)
            
            {/* Level 1: Automatically nested */}
            <Box style={{ marginTop: '20px' }}>
              I am a Level 1 Box (Nested)
              
              {/* Level 2: Deeply nested */}
              <Box style={{ marginTop: '20px' }}>
                I am a Level 2 Box (Deeply Nested)
              </Box>
            </Box>
          </Box>
        </Stack>
      </div>
    </ThemeProvider>
  );
};
