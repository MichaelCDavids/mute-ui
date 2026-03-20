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

const AnimatedButton = ({ gradient, animation, children }) => {
  const theme = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Animation duration
  };

  return (
    <Box
      as="button"
      onClick={handleClick}
      style={{
        backgroundImage: theme.colors.gradients[gradient],
        animation: isAnimating ? `${animation} 0.5s ease-in-out` : 'none',
        color: theme.colors.button.text,
        flexShrink: 0, // Prevent buttons from shrinking
      }}
    >
      {children}
    </Box>
  );
};

const GradientButtons = () => {
  const gradients = [
    'aurora', 'dusk', 'sand', 'sky', 'mist', 'stone', 'meadow',
    'rose', 'peach', 'ice', 'lagoon', 'heather', 'moss', 'lilac',
    'apricot', 'seafoam', 'coral'
  ];

  return (
    <Box>
      <h2>Gradient Buttons</h2>
      <p>An expanded palette of 20 muted gradients.</p>
      <Stack direction="row" gap="md" style={{ marginTop: '20px', flexWrap: 'wrap' }}>
        {gradients.map(gradient => (
          <AnimatedButton key={gradient} gradient={gradient} animation="pulse">
            {gradient.charAt(0).toUpperCase() + gradient.slice(1)}
          </AnimatedButton>
        ))}
      </Stack>
    </Box>
  );
};

const AnimationButtons = () => (
    <Box>
        <h2>Animated Buttons</h2>
        <p>Subtle animations to provide user feedback.</p>
        <Stack direction="row" gap="md" style={{ marginTop: '20px', flexWrap: 'wrap' }}>
            <AnimatedButton gradient="primary" animation="pulse">Pulse</AnimatedButton>
            <AnimatedButton gradient="secondary" animation="shake">Shake</AnimatedButton>
            <AnimatedButton gradient="tertiary" animation="jiggle">Jiggle</AnimatedButton>
        </Stack>
    </Box>
);

const CodeSnippet = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{ position: 'relative', backgroundColor: '#f5f5f5', borderRadius: '4px', padding: '16px', marginTop: '16px', overflowX: 'auto' }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                <code>{code}</code>
            </pre>
            <button 
                onClick={handleCopy} 
                style={{ 
                    position: 'absolute', 
                    top: '8px', 
                    right: '8px', 
                    padding: '4px 8px', 
                    backgroundColor: copied ? '#4CAF50' : '#4A4A4A', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer' 
                }}
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
};


export const Demo = () => {
  const [currentTheme, setCurrentTheme] = useState<Partial<Theme>>(themes.default);

  const basicUsage = `
import React from 'react';
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
root.render(<App />);
  `;

  const advancedUsage = `
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, Box, Stack } from '@MichaelCDavids/mute-ui';

const customTheme = {
  colors: {
    primary: '#6A0DAD', // A vibrant purple
    surface: '#F3E5F5',
    inset: '#E1BEE7',
    text: '#311B92',
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
  }
};

const App = () => (
    <ThemeProvider customTheme={customTheme}>
        <Box>
            <Stack>
                <h1>My Custom Themed App</h1>
                <p>This app uses a custom theme with vibrant colors!</p>
            </Stack>
        </Box>
    </ThemeProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
  `;

  return (
    <ThemeProvider customTheme={currentTheme}>
      <div style={{ padding: '20px', backgroundColor: '#eee', minHeight: '100vh' }}>
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
          <AnimationButtons />

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
            <Box style={{ maxHeight: '150px', overflowY: 'auto', paddingRight: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
              <ul style={{ marginTop: 0, paddingLeft: '20px' }}>
                  <li><b>Personal dashboards:</b> Create a personalized dashboard to track your habits, goals, or finances.</li>
                  <li><b>Admin panels:</b> Build intuitive and easy-to-use admin interfaces for your applications.</li>
                  <li><b>Blogs and portfolios:</b> Showcase your work with a clean and minimalist design.</li>
                  <li><b>Prototyping:</b> Quickly prototype ideas and layouts without getting bogged down in design details.</li>
                  <li><b>Internal tools:</b> Develop straightforward internal tools for your team.</li>
                  <li><b>Documentation sites:</b> Present your documentation in a clear, readable format.</li>
              </ul>
            </Box>
        </Box>
        <Box>
            <h2>Getting Started</h2>
            <p>
                To use Mute-UI in your own project, install it from npm:
            </p>
            <CodeSnippet code="npm install @MichaelCDavids/mute-ui" />
            
            <h3>Basic Usage</h3>
            <p>
                Wrap your application with the <code>ThemeProvider</code> and start using the components.
            </p>
            <CodeSnippet code={basicUsage} />

            <h3>Advanced Usage: Custom Theming</h3>
            <p>
                You can easily customize the theme by passing a <code>customTheme</code> object to the <code>ThemeProvider</code>. 
                This allows you to override the default colors, spacing, and other theme properties.
            </p>
            <CodeSnippet code={advancedUsage} />
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
