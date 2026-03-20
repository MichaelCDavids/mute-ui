
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
  'ruby-red': {
    colors: {
      primary: '#9A1111',
      surface: '#F9E7E7',
      inset: '#F2C3C3',
      text: '#3D0606',
    },
  },
  'goldenrod': {
    colors: {
      primary: '#B7860D',
      surface: '#FCF8E8',
      inset: '#F7E5B3',
      text: '#4D3804',
    },
  },
  'charcoal': {
    colors: {
      primary: '#36454F',
      surface: '#D3D3D3',
      inset: '#A9A9A9',
      text: '#000000',
    },
  },
  'emerald-green': {
    colors: {
      primary: '#009B77',
      surface: '#E0F2F1',
      inset: '#B2DFDB',
      text: '#004D40',
    },
  },
  'amethyst-purple': {
    colors: {
      primary: '#9B59B6',
      surface: '#F4ECF7',
      inset: '#E8DAEF',
      text: '#3C1361',
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
    }, 1000); // Animation duration

  };

  const background = gradient.startsWith('radial-gradient')
    ? gradient
    : theme.colors.gradients[gradient];

  return (
    <Box
      as="button"
      onClick={handleClick}
      style={{
        backgroundImage: background,
        animation: isAnimating ? `${animation} 1s ease-in-out` : 'none',
        color: theme.colors.text,
        flexGrow: 0,
        flexShrink: 0,
      }}
    >
      {children}
    </Box>
  );
};

const GradientButtons = () => {
    const theme = useTheme();

    const themedGradients = {
        primary: `radial-gradient(circle, ${theme.colors.surface}, ${theme.colors.primary})`,
        secondary: `radial-gradient(circle, ${theme.colors.inset}, ${theme.colors.surface})`,
        tertiary: `radial-gradient(circle, #FFFFFF, ${theme.colors.inset})`
    };

    const staticGradients = ['aurora', 'dusk', 'sand', 'sky', 'mist', 'stone', 'meadow'];

  return (
    <Box>
      <h2>Gradient Buttons</h2>
      <p>A selection of 10 themed gradient buttons. The first three are generated from the current theme.</p>
      <Stack direction="row" gap="md" style={{ marginTop: '20px', flexWrap: 'wrap' }}>
        {Object.entries(themedGradients).map(([name, gradient]) => (
            <AnimatedButton key={name} gradient={gradient} animation="pulse">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </AnimatedButton>
        ))}
        {staticGradients.map(name => (
            <AnimatedButton key={name} gradient={name} animation="pulse">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </AnimatedButton>
        ))}
      </Stack>
    </Box>
  );
};


const AnimationButtons = () => {
    const animations = [
        { name: 'pulse', gradient: 'primary' },
        { name: 'shake', gradient: 'secondary' },
        { name: 'jiggle', gradient: 'tertiary' },
        { name: 'bounce', gradient: 'aurora' },
        { name: 'flash', gradient: 'dusk' },
        { name: 'headShake', gradient: 'sand' },
        { name: 'jello', gradient: 'sky' },
        { name: 'rubberBand', gradient: 'mist' },
        { name: 'swing', gradient: 'stone' },
        { name: 'tada', gradient: 'meadow' },
    ];

    return (
        <Box>
            <h2>Animated Buttons</h2>
            <p>A selection of 10 subtle, industry-standard animations.</p>
            <Stack direction="row" gap="md" style={{ marginTop: '20px', flexWrap: 'wrap' }}>
                {animations.map(anim => (
                    <AnimatedButton key={anim.name} gradient={anim.gradient} animation={anim.name}>
                        {anim.name.charAt(0).toUpperCase() + anim.name.slice(1)}
                    </AnimatedButton>
                ))}
            </Stack>
        </Box>
    );
};

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
      <h2>Common UI Elements</h2>
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
          </Stack>
        </Box>

        {/* Form Elements */}
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

              <Stack direction="row" gap="md">
                <input type="checkbox" id="checkbox" name="checkbox" style={{ accentColor: colors.primary }}/>
                <label htmlFor="checkbox">Checkbox</label>
              </Stack>

              <Stack direction="row" gap="md">
                <input type="radio" id="radio1" name="radio" value="1" style={{ accentColor: colors.primary }}/>
                <label htmlFor="radio1">Radio 1</label>
                <input type="radio" id="radio2" name="radio" value="2" style={{ accentColor: colors.primary }}/>
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

const UncommonElements = () => {
    const { colors, spacing } = useTheme();
    const [sliderValue, setSliderValue] = useState(50);

    const avatarStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: colors.primary,
        color: colors.surface,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
    };

    const progressContainerStyle = {
        width: '100%',
        backgroundColor: colors.inset,
        borderRadius: '4px',
        height: spacing.md,
        overflow: 'hidden',
    };

    const progressBarFillStyle = {
        width: `${sliderValue}%`,
        height: '100%',
        backgroundColor: colors.primary,
        transition: 'width 0.3s ease-in-out',
    };

    return (
        <Box>
            <h2>Uncommon UI Elements</h2>
            <p>A few less common elements to showcase versatility.</p>
            <Stack gap="lg" style={{ marginTop: spacing.lg }}>
                <Box>
                    <h3>Avatar</h3>
                    <div style={avatarStyle}>MD</div>
                </Box>
                <Box>
                    <h3>Progress Bar</h3>
                    <div style={progressContainerStyle}>
                        <div style={progressBarFillStyle}></div>
                    </div>
                </Box>
                <Box>
                    <h3>Slider</h3>
                     <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderValue}
                        onChange={(e) => setSliderValue(Number(e.target.value))}
                        style={{ width: '100%', accentColor: colors.primary }}
                    />
                    <p>Value: {sliderValue}</p>
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
    xl: '40px',
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

    const customComponents = `
import React from 'react';
import { Box, useTheme } from '@MichaelCDavids/mute-ui';

const CustomButton = ({ children }) => {
    const { colors, spacing } = useTheme();

    return (
        <Box
            as="button"
            style={{
                padding: \`\${spacing.sm} \${spacing.md}\`,
                backgroundColor: colors.primary,
                color: colors.surface,
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.accent}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary}
        >
            {children}
        </Box>
    );
};

const App = () => (
    <CustomButton>Click Me</CustomButton>
);
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
            </p>
            <p>
              Try changing the theme to see how the components adapt:
            </p>
            <Stack direction="row" gap="md" style={{ marginTop: '20px', flexWrap: 'wrap' }}>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.default)}>Default</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.sunset)}>Sunset</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.ocean)}>Ocean</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.forest)}>Forest</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.lavender)}>Lavender</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes.mint)}>Mint</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes['ruby-red'])}>Ruby Red</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes['goldenrod'])}>Goldenrod</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes['charcoal'])}>Charcoal</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes['emerald-green'])}>Emerald</Box>
                <Box as="button" style={buttonStyle} onClick={() => setCurrentTheme(themes['amethyst-purple'])}>Amethyst</Box>
            </Stack>
          </Box>

          <GradientButtons />
          <AnimationButtons />
          <DemoElements />
          <UncommonElements />

          <Box>
            <h2>Getting Started</h2>
            <p>Install Mute-UI from npm:</p>
            <CodeSnippet code="npm install @MichaelCDavids/mute-ui" />

            <h3>Basic Usage</h3>
            <p>Wrap your application with the <code>ThemeProvider</code> and import components from <code>@MichaelCDavids/mute-ui</code>.</p>
            <CodeSnippet code={basicUsage} />

            <h2>Customization</h2>

            <h3>Custom Theming</h3>
            <p>
                You can easily override the default theme by passing a <code>customTheme</code> object to the <code>ThemeProvider</code>.
                This object is deep-merged with the default theme, allowing you to change as much or as little as you want.
            </p>
            <CodeSnippet code={advancedUsage} />

            <h3>Styling and Creating Custom Components</h3>
            <p>
                Mute-UI is designed to be lightweight and focuses on providing a theming and layout foundation.
                It gives you the tools to style your own components or standard HTML elements consistently using the <code>useTheme</code> hook.
            </p>
            <CodeSnippet code={customComponents} />

        </Box>
           <Box>
            <h2>Feedback</h2>
            <p>
              This package is developed by Michael Davids. Find it on npm as @MichaelCDavids/mute-ui.
            </p>
          </Box>
        </Stack>
      </div>
    </ThemeProvider>
  );
};
