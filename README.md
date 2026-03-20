# Mute-UI: A "Muted" React Component Library

**A small, opinionated set of React components for building clean, consistent, and visually "muted" user interfaces with minimal effort.**

[![npm version](https://badge.fury.io/js/%40michaelcdavids%2Fmute-ui.svg)](https://badge.fury.io/js/%40michaelcdavids%2Fmute-ui)

## 🌟 Features

*   **Theming:** A `ThemeProvider` at its core, allowing for easy customization of colors, spacing, and more.
*   **Smart Components:** The `Box` component intelligently adapts its style based on its nesting level, creating a natural visual hierarchy.
*   **Effortless Layout:** The `Stack` component simplifies layout and spacing, eliminating common CSS frustrations like margin collapse.
*   **Rich Color Palette:** Includes a set of 20 beautiful, muted gradients.
*   **Subtle Animations:** Add a touch of interactivity with pre-defined animations like "pulse," "shake," and "jiggle."
*   **Responsive by Design:** Components are designed to work seamlessly across different screen sizes.
*   **Publicly Available:** Yes! `@MichaelCDavids/mute-ui` is a public package available on npm for you to use in your projects.

## 🚀 Getting Started

### Installation

Install the package using npm or your favorite package manager:

```bash
npm install @MichaelCDavids/mute-ui
```

### Basic Usage

Wrap your application with the `ThemeProvider` and start building with `Box` and `Stack`.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, Box, Stack } from '@MichaelCDavids/mute-ui';

const App = () => (
    <ThemeProvider>
        <Box padding="lg">
            <Stack gap="md">
                <h1>My Muted App</h1>
                <p>Welcome to my new app!</p>
                <Box as="button" onClick={() => alert('Clicked!')}>
                    Click me
                </Box>
            </Stack>
        </Box>
    </ThemeProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## Advanced Usage

### Custom Theming

You can easily override the default theme by passing a `customTheme` object to the `ThemeProvider`. This object is deep-merged with the default theme.

```tsx
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
            <h1>My Custom Themed App</h1>
        </Box>
    </ThemeProvider>
);
```

### Gradients and Animations

Mute-UI comes with a set of predefined gradients and animations. Here's how you might use them to create an animated button.

```tsx
import { useTheme, Box } from '@MichaelCDavids/mute-ui';
import { useState } from 'react';

const AnimatedButton = ({ gradient, animation, children }) => {
  const theme = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500); // Animation duration
  };

  return (
    <Box
      as="button"
      onClick={handleClick}
      style={{
        backgroundImage: theme.colors.gradients[gradient],
        animation: isAnimating ? `${animation} 0.5s ease-in-out` : 'none',
        color: theme.colors.button.text,
      }}
    >
      {children}
    </Box>
  );
};

// Usage
<AnimatedButton gradient="aurora" animation="pulse">
  Pulse Me
</AnimatedButton>
```

## Component API

### `ThemeProvider`

The provider component that makes the theme available to the rest of your application.

| Prop          | Type                  | Description                                        |
|---------------|-----------------------|----------------------------------------------------|
| `children`    | `React.ReactNode`     | The child components to render.                    |
| `customTheme` | `DeepPartial<Theme>`  | A theme object to merge with the default theme.    |

### `Box`

The fundamental, polymorphic building block.

| Prop | Type | Description |
|---|---|---|
| `as` | `React.ElementType` | The HTML element to render. Defaults to `div`. |
| `style` | `React.CSSProperties` | Standard React inline styles. |
| `...rest` | | All other props are passed to the underlying element. |

### `Stack`

A component for managing layout and spacing between elements.

| Prop | Type | Description |
|---|---|---|
| `direction` | `'row' \| 'column'` | The direction of the stack. Defaults to `'column'`. |
| `gap` | `keyof Theme['spacing']` | The space between elements, based on theme tokens. |
| `style` | `React.CSSProperties` | Standard React inline styles. |


## Theming

The theme object has the following structure. You can override any of these values using the `customTheme` prop on the `ThemeProvider`.

```ts
export interface Theme {
  colors: {
    primary: string;
    surface: string;
    inset: string;
    text: string;
    gradients: {
      // 20 gradient keys
    };
     button: {
      text: string;
      hover: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  shadows: {
    0: string;
    1: string;
    2: string;
  };
  animations: {
    pulse: string;
    shake: string;
    jiggle: string;
  };
}
```

## Versioning

This project adheres to [Semantic Versioning](https://semver.org/). Given that the project is in its initial development phase (version 0.x.x), breaking changes may be introduced in minor versions.

## Feedback and Contributions

This package is developed by Michael Davids. You can find the package on npm as `@MichaelCDavids/mute-ui`. Feel free to reach out with any feedback or suggestions for improvement.
