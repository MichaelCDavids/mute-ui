
# Mute-UI: A "Muted" React Component Library

**A small, opinionated set of React components for building clean, consistent, and visually "muted" user interfaces with minimal effort.**

[![npm version](https://badge.fury.io/js/%40michaelcdavids%2Fmute-ui.svg)](https://badge.fury.io/js/%40michaelcdavids%2Fmute-ui)

## Live Demo

A live demo of the component library is available at [https://mute-ui-8de44.web.app/](https://mute-ui-8de44.web.app/).

## 🌟 Features

*   **Theming:** A `ThemeProvider` at its core, allowing for easy customization of colors, spacing, and more.
*   **Smart Components:** The `Box` component intelligently adapts its style based on its nesting level, creating a natural visual hierarchy.
*   **Effortless Layout:** The `Stack` component simplifies layout and spacing, eliminating common CSS frustrations like margin collapse.
*   **Comprehensive Styling:** Comes with sensible defaults and provides tools to style most standard HTML elements for a consistent look and feel out of the box.
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
import React from \'react\';
import ReactDOM from \'react-dom/client\';
import { ThemeProvider, Box, Stack } from \'@MichaelCDavids/mute-ui\';

const App = () => (
    <ThemeProvider>
        <Box padding="lg">
            <Stack gap="md">
                <h1>My Muted App</h1>
                <p>Welcome to my new app!</p>
                <Box as="button" onClick={() => alert(\'Clicked!\')}>
                    Click me
                </Box>
            </Stack>
        </Box>
    </ThemeProvider>
);

const root = ReactDOM.createRoot(document.getElementById(\'root\'));
root.render(<App />);
```

## Advanced Usage

### Custom Theming

You can easily override the default theme by passing a `customTheme` object to the `ThemeProvider`. This object is deep-merged with the default theme.

```tsx
import { ThemeProvider, Box, Stack } from \'@MichaelCDavids/mute-ui\';

const customTheme = {
  colors: {
    primary: \'#6A0DAD\', // A vibrant purple
    surface: \'#F3E5F5\',
    inset: \'#E1BEE7\',
    text: \'#311B92\',
  },
  spacing: {
    xs: \'8px\',
    sm: \'16px\',
    md: \'24px\',
    lg: \'32px\',
    xl: \'40px\',
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

### Styling Standard Elements

Mute-UI is designed to be lightweight and focuses on providing a theming and layout foundation. It doesn\'t provide a component for every HTML element. Instead, it gives you the tools to style your own components or standard HTML elements consistently.

You can use the `useTheme` hook to access theme properties like colors and spacing to style your elements.

```tsx
import { useTheme, Box, Stack } from \'@MichaelCDavids/mute-ui\';

const MyForm = () => {
  const { colors, spacing } = useTheme();

  const inputStyle = {
    padding: spacing.sm,
    borderRadius: \'4px\',
    border: `1px solid ${colors.accent}`,
    backgroundColor: colors.surface,
    color: colors.text
  };

  return (
    <Box>
      <Stack gap="md">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" style={inputStyle} />
        <Box as="button" style={{ alignSelf: \'flex-start\' }}>Submit</Box>
      </Stack>
    </Box>
  );
};
```

### Gradients and Animations

Mute-UI comes with a set of predefined gradients and animations. Here\'s how you might use them to create an animated button.

```tsx
import { useTheme, Box } from \'@MichaelCDavids/mute-ui\';
import { useState } from \'react\';

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
        animation: isAnimating ? `${animation} 0.5s ease-in-out` : \'none\',
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
|---|---|---|\n| `as` | `React.ElementType` | The HTML element to render. Defaults to `div`. |
| `style` | `React.CSSProperties` | Standard React inline styles. |
| `padding` | `keyof Theme[\'spacing\']` | The padding to apply, based on theme tokens. |
| `elevation` | `0 \| 1 \| 2` | The shadow to apply, based on theme tokens. |
| `...rest` | | All other props are passed to the underlying element. |

### `Stack`

A component for managing layout and spacing between elements.

| Prop | Type | Description |
|---|---|---|\n| `direction` | `\'row\' \| \'column\'` | The direction of the stack. Defaults to `\'column\'`. |
| `gap` | `keyof Theme[\'spacing\']` | The space between elements, based on theme tokens. |
| `style` | `React.CSSProperties` | Standard React inline styles. |

### `Card`

A versatile component for displaying content in a styled container. `Card` is a composite component that includes `Header`, `Body`, and `Footer` sub-components.

| Prop      | Type              | Description                                     |
|-----------|-------------------|-------------------------------------------------|
| `as`      | `React.ElementType` | The HTML element to render. Defaults to `div`.  |
| `...rest` |                   | All other props are passed to the underlying `Box` component. |

**Sub-components:**

*   **`Card.Header`**: A `Box` component for the card's header section.
*   **`Card.Body`**: A `Box` component for the main content of the card.
*   **`Card.Footer`**: A `Box` component for the card's footer section.

**Example Usage:**

```tsx
import { Card, Box } from \'@MichaelCDavids/mute-ui\';

const MyCard = () => (
  <Card>
    <Card.Header>
      <h3>Card Title</h3>
    </Card.Header>
    <Card.Body>
      <p>This is the main content of the card. You can put anything you like in here.</p>
    </Card.Body>
    <Card.Footer>
      <Box as="button">Action</Box>
    </Card.Footer>
  </Card>
);
```

## Theming

The theme object has the following structure. You can override any of these values using the `customTheme` prop on the `ThemeProvider`.

```ts
export interface Theme {
  colors: {
    primary: string;
    surface: string;
    inset: string;
    text: string;
    accent: string;
    gradients: {
      primary: string;
      secondary: string;
      tertiary: string;
      aurora: string;
      dusk: string;
      sand: string;
      sky: string;
      mist: string;
      stone: string;
      meadow: string;
      rose: string;
      peach: string;
      ice: string;
      lavender: string;
      mint: string;
      butter: string;
      coral: string;
      ocean: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    0: string;
    1: string;
    2: string;
  };
}
```

## Versioning

This project adheres to [Semantic Versioning](https://semver.org/). With the release of version 1.0.0, the API is considered stable.

## Feedback and Contributions

This package is developed by Michael Davids. You can find the package on npm as `@MichaelCDavids/mute-ui`. Feel free to reach out with any feedback or suggestions for improvement.
