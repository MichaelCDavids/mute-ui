
// src/Demo.tsx
import React, { useState } from 'react';
import { ThemeProvider, Theme } from './context/ThemeContext.tsx';
import { useTheme } from './hooks/useTheme.ts';
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
        color: theme.colors.text,
        flexGrow: 0, // Prevent buttons from growing
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
    'rose', 'peach', 'ice', 'lavender', 'mint', 'butter', 'coral',
    'ocean'
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

const DemoElements = () => {
  const { colors, spacing } = useTheme();

  return (
    <Box>
      <h2>UI Elements</h2>
      <p>A collection of common UI elements to demonstrate theme consistency.</p>
      <Stack gap="lg" style={{ marginTop: spacing.lg }}>
        {/* Text Elements */}
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
            <pre>
              <code>
                {
                  `// This is a code block.
function greet(name) {
  return \`Hello, \${name}!\`;
}`
                }
              </code>
            </pre>
          </Stack>
        </Box>

        {/* Form Elements */}
        <Box>
          <h3>Form Elements</h3>
          <form>
            <Stack gap="md">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" style={{ padding: spacing.sm, borderRadius: '4px', border: `1px solid ${colors.accent}` }} />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" style={{ padding: spacing.sm, borderRadius: '4px', border: `1px solid ${colors.accent}` }} />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" style={{ padding: spacing.sm, borderRadius: '4px', border: `1px solid ${colors.accent}` }} />

              <label htmlFor="select">Select</label>
              <select id="select" name="select" style={{ padding: spacing.sm, borderRadius: '4px', border: `1px solid ${colors.accent}` }}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>

              <Stack direction="row" gap="md">
                <input type="checkbox" id="checkbox" name="checkbox" />
                <label htmlFor="checkbox">Checkbox</label>
              </Stack>

              <Stack direction="row" gap="md">
                <input type="radio" id="radio1" name="radio" value="1" />
                <label htmlFor="radio1">Radio 1</label>
                <input type="radio" id="radio2" name="radio" value="2" />
                <label htmlFor="radio2">Radio 2</label>
              </Stack>

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

  const buttonStyle = {
    flexGrow: 0,
    flexShrink: 0,
  };

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
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.default)}>Default</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.sunset)}>Sunset</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.ocean)}>Ocean</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.forest)}>Forest</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.lavender)}>Lavender</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.mint)}>Mint</Box>
            </Stack>
          </Box>

          <GradientButtons />
          <AnimationButtons />
          <DemoElements />

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
            <h2>Philosophy</h2>
            <p>
              Mute-UI is built on the following principles:
            </p>
            <ul style={{ marginTop: 0, paddingLeft: '20px' }}>
              <li><b>Simplicity:</b> A small API surface and a minimal set of components make it easy to learn and use.</li>
              <li><b>Consistency:</b> The design system ensures a consistent look and feel across your application.</li>
              <li><b>Muted by Default:</b> The default theme is intentionally "muted" to provide a clean and unobtrusive user experience.</li>
              <li><b>Customizable:</b> The theme is easily customizable to match your brand and style.</li>
            </ul>
          </Box>
          <Box>
            <h2>Props</h2>
            <p>
              Here are the props for the main components:
            </p>
            <h3>Box</h3>
            <ul style={{ marginTop: 0, paddingLeft: '20px' }}>
              <li><b>as:</b> The HTML element to render (e.g., "div", "span", "button").</li>
              <li><b>style:</b> An object of inline styles.</li>
            </ul>
            <h3>Stack</h3>
            <ul style={{ marginTop: 0, paddingLeft: '20px' }}>
              <li><b>direction:</b> The direction of the stack ("row" or "column").</li>
              <li><b>gap:</b> The spacing between elements (e.g., "sm", "md", "lg").</li>
              <li><b>style:</b> An object of inline styles.</li>
            </ul>
          </Box>
          <Box>
            <h2>Contribute</h2>
            <p>
              Mute-UI is an open-source project. Contributions are welcome! Please feel free to open an issue or submit a pull request on GitHub.
            </p>
          </Box>
          <Box>
            <h2>License</h2>
            <p>
              Mute-UI is licensed under the MIT License.
            </p>
          </Box>
          <Box>
            <h2>Roadmap</h2>
            <p>
              Here are some of the features planned for future releases:
            </p>
            <ul style={{ marginTop: 0, paddingLeft: '20px' }}>
              <li>More components (e.g., Table, Modal, Tooltip)</li>
              <li>More themes and gradients</li>
              <li>Improved accessibility</li>
              <li>Better documentation</li>
            </ul>
          </Box>
          <Box>
            <h2>Changelog</h2>
            <p>
              <b>v1.1.0</b> - Added more themes, gradients, and animations.
            </p>
          </Box>
          <Box>
            <h2>Contact</h2>
            <p>
              If you have any questions or feedback, please feel free to reach out to me on Twitter @MichaelCDavids or by email at MichaelCDavids@gmail.com.
            </p>
          </Box>
          <Box>
            <h2>Support</h2>
            <p>
              If you like this project and want to support its development, you can buy me a coffee! It is greatly appreciated, but not expected.
            </p>
            <a href="https://www.buymeacoffee.com/michaelcdavids" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
                alt="Buy Me A Coffee"
                style={{
                  height: '41px',
                  width: '174px',
                  boxShadow: '0px 3px 2px 0px rgba(190, 190, 190, 0.5)',
                  WebkitBoxShadow: '0px 3px 2px 0px rgba(190, 190, 190, 0.5)'
                }}
              />
            </a>
          </Box>
        </Stack>
      </div>
    </ThemeProvider>
  );
};
