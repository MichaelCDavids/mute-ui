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
  lavender: {
    colors: {
      primary: '#673AB7',
      surface: '#EDE7F6',
      inset: '#D1C4E9',
      text: '#311B92',
    },
  },
  mint: {
    colors: {
      primary: '#009688',
      surface: '#E0F2F1',
      inset: '#B2DFDB',
      text: '#004D40',
    },
  },
};

const GradientButton = ({ gradient, children }) => {
  const theme = useTheme();
  const [isPulsing, setIsPulsing] = useState(false);

  const handleClick = () => {
    setIsPulsing(true);
    // Remove the animation class after it completes
    setTimeout(() => {
      setIsPulsing(false);
    }, 500); // must match animation duration
  };

  return (
    <Box
      as="button"
      onClick={handleClick}
      style={{
        backgroundImage: theme.colors.gradients[gradient],
        animation: isPulsing ? 'pulse 0.5s ease-in-out' : 'none',
        color: theme.colors.button.text,
      }}
    >
      {children}
    </Box>
  );
};

const GradientButtons = () => {
  return (
    <Box>
      <h2>Gradient Buttons with Pulse Animation</h2>
      <p>
        These buttons showcase the new radial gradients. Click them to see the pulse effect.
      </p>
      <Stack direction="row" gap="md" style={{ marginTop: '20px', flexWrap: 'wrap' }}>
        <GradientButton gradient="aurora">Aurora</GradientButton>
        <GradientButton gradient="dusk">Dusk</GradientButton>
        <GradientButton gradient="sand">Sand</GradientButton>
        <GradientButton gradient="sky">Sky</GradientButton>
        <GradientButton gradient="mist">Mist</GradientButton>
        <GradientButton gradient="stone">Stone</GradientButton>
        <GradientButton gradient="meadow">Meadow</GradientButton>
      </Stack>
    </Box>
  );
};


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
            <Stack direction="row" gap="md" style={{ marginTop: '20px', flexWrap: 'wrap' }}>
                <Box as="button" onClick={() => setCurrentTheme(themes.default)}>Default</Box>
                <Box as="button" onClick={() => setCurrentTheme(themes.sunset)}>Sunset</Box>
                <Box as="button" onClick={() => setCurrentTheme(themes.ocean)}>Ocean</Box>
                <Box as="button" onClick={() => setCurrentTheme(themes.forest)}>Forest</Box>
                <Box as="button" onClick={() => setCurrentTheme(themes.lavender)}>Lavender</Box>
                <Box as="button" onClick={() => setCurrentTheme(themes.mint)}>Mint</Box>
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
            <h2>What can you build with Mute-UI?</h2>
            <p>
                Mute-UI is perfect for a variety of applications where a clean and consistent design is a priority. Here are a few ideas:
            </p>
            <ul>
                <li><b>Personal dashboards:</b> Create a personalized dashboard to track your habits, goals, or finances.</li>
                <li><b>Admin panels:</b> Build intuitive and easy-to-use admin interfaces for your applications.</li>
                <li><b>Blogs and portfolios:</b> Showcase your work with a clean and minimalist design.</li>
                <li><b>Prototyping:</b> Quickly prototype ideas and layouts without getting bogged down in design details.</li>
            </ul>
        </Box>
        <Box>
            <h2>Getting Started</h2>
            <p>
                To use Mute-UI in your own project, install it from npm:
            </p>
            <pre><code>
                npm install @MichaelCDavids/mute-ui
            </code></pre>
            <p>
                Then, wrap your application with the <code>ThemeProvider</code> and start using the components:
            </p>
            <pre><code>
{`import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, Box, Stack } from '@MichaelCDavids/mute-ui';

const App = () => (
    <ThemeProvider>
        <Box>
            <Stack>
                <h1>My Muted App</h1>
                <p>Welcome to my new app!</p>
            </Stack>
        </Box>
    </ThemeProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
            </code></pre>
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
