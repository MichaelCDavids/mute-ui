import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { type Theme } from './context/theme.ts';
import { useTheme } from './hooks/useTheme.ts';
import { Box } from './atoms/Box.tsx';
import { Stack } from './layout/Stack.tsx';

// Define some color presets
const themes: Record<string, Partial<Theme>> = {
  default: {
    colors: {
        primary: '#3F51B5',
        surface: '#F5F5F5',
        inset: '#E8EAF6',
        text: '#212121',
        accent: '#C5CAE9',
    }
  },
  ocean: {
    colors: {
      primary: '#0D47A1',
      surface: '#E3F2FD',
      inset: '#BBDEFB',
      text: '#000000',
      accent: '#90CAF9',
    },
  },
};

const CodeSnippet = ({ code }: { code: string }) => {
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

const DemoElements = () => {
  const { colors, spacing } = useTheme();

  return (
    <Box>
      <h2>Common UI Elements</h2>
      <p>A collection of common UI elements to demonstrate theme consistency.</p>
      <Stack gap="lg" style={{ marginTop: spacing.lg }}>
        <Box>
          <h3>Text Elements</h3>
          <Stack gap="md">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p>This is a paragraph of text. It demonstrates the default text color and font size.</p>
            <blockquote>
              This is a blockquote. It can be used to highlight a section of text.
            </blockquote>
          </Stack>
        </Box>

        <Box>
          <h3>Form Elements</h3>
          <form>
            <Stack gap="md">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" style={{ padding: spacing.sm, borderRadius: '4px', border: `1px solid ${colors.accent}` }} />

              <label htmlFor="select">Select</label>
              <select id="select" name="select" style={{ padding: spacing.sm, borderRadius: '4px', border: `1px solid ${colors.accent}` }}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>

              <Box as="button" style={{ alignSelf: 'flex-start' }}>Submit</Box>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Box>
  );
};

export const Demo = () => {
  const [currentTheme, setCurrentTheme] = useState<Partial<Theme>>(themes.default);

  const basicUsage = `
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, Box, Stack } from '@michaelcdavids/mute-ui';

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
import { ThemeProvider, Box } from '@michaelcdavids/mute-ui';

const customTheme = {
  colors: {
    primary: '#6A0DAD', // A vibrant purple
    surface: '#F3E5F5',
    inset: '#E1BEE7',
    text: '#311B92',
    accent: '#D5A6E9',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
   }
};

const App = () => (
    <ThemeProvider customTheme={customTheme}>
        <Box>
            <h1>My Custom Themed App</h1>
        </Box>
    </ThemeProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
  `;

  const buttonStyle = {
    flexGrow: 0,
    flexShrink: 0,
  };

  return (
    <ThemeProvider customTheme={currentTheme}>
      <div style={{ padding: '20px', backgroundColor: '#eee', minHeight: '100vh' }}>
        <Stack gap="lg">
          <Box>
            <h1>Welcome to Mute-UI</h1>
            <p>
              Mute-UI is a small, opinionated set of React components for building clean and visually "muted" user interfaces.
            </p>
            <p>
              Try changing the theme to see how the components adapt:
            </p>
            <Stack direction="row" gap="md" style={{ marginTop: '20px', flexWrap: 'wrap' }}>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.default)}>Default</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.ocean)}>Ocean</Box>
            </Stack>
          </Box>

          <DemoElements />

          <Box>
            <h2>Getting Started</h2>
            <p>Install Mute-UI from npm:</p>
            <CodeSnippet code="npm install @michaelcdavids/mute-ui" />

            <h3>Basic Usage</h3>
            <p>Wrap your application with the <code>ThemeProvider</code> and import components from <code>@michaelcdavids/mute-ui</code>.</p>
            <CodeSnippet code={basicUsage} />

            <h2>Customization</h2>

            <h3>Custom Theming</h3>
            <p>
                You can easily override the default theme by passing a <code>customTheme</code> object to the <code>ThemeProvider</code>.
            </p>
            <CodeSnippet code={advancedUsage} />
        </Box>
           <Box>
            <h2>Feedback</h2>
            <p>
              This package is developed by Michael Davids. Find it on npm as @michaelcdavids/mute-ui.
            </p>
          </Box>
        </Stack>
      </div>
    </ThemeProvider>
  );
};
