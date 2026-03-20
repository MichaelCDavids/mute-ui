# Mute-UI: A "Muted" React Component Library

**Is this package available for other developers to use?**

Yes! `@MichaelCDavids/mute-ui` is a public package available on npm. You can install it and use it in your own React projects.

## What is Mute-UI?

Mute-UI is a small, opinionated set of React components designed for developers who want to build clean, consistent, and visually "muted" user interfaces with minimal effort. It provides a foundational design system that helps you create beautiful layouts without having to write a lot of custom CSS.

## How does it help you as a developer?

In modern web development, building UIs often involves a lot of repetitive styling and a constant struggle to maintain consistency. Mute-UI solves these problems by providing a set of "smart" components that handle the design system for you.

Here's how it helps:

*   **Enforces Consistency:** Mute-UI components are built on a shared theme, ensuring that all your UI elements have a consistent look and feel. This means you don't have to worry about picking the right colors, spacing, or shadows every time you create a new component.
*   **Reduces Boilerplate:** The `Box` and `Stack` components are the core of Mute-UI. They handle layout and spacing automatically, which means you can create complex UIs with very little code. The `Box` component even changes its appearance based on how deeply it's nested, creating a natural visual hierarchy.
*   **"Muted" by Default:** The design philosophy of Mute-UI is to be unobtrusive. The components have a clean, minimalist aesthetic that doesn't distract from the content. This makes it a great choice for a wide range of applications, from dashboards to content-heavy websites.
*   **Focus on What Matters:** By taking care of the design system for you, Mute-UI allows you to focus on what really matters: building a great user experience.

## Core Concepts

### 1. The ThemeProvider 🎨
The `ThemeProvider` is the heart of the library. It provides a shared theme to all components, which includes colors, spacing, and shadows. You can also customize the theme by passing a `customTheme` prop.

### 2. The Box (The Smart Atom) 🧱
The `Box` is the fundamental building block. It uses an internal context to track nesting levels.
* **Level 0:** Primary surface with a subtle border.
* **Level 1+:** Automatically switches to an inset background color to create visual hierarchy without manual styling.
* **Polymorphic `as` prop:** The `Box` component can be rendered as any HTML element using the `as` prop. This allows you to create complex layouts with semantic HTML.

### 3. The Stack (The Layout Engine) 📏
The `Stack` handles the "breathing room" between elements. By using a `gap` prop linked to theme tokens, it eliminates the need for manual margins and prevents margin-collapse issues.

## 🚀 Quick Start

### Installation

```bash
npm install @MichaelCDavids/mute-ui
```

### Usage

```tsx
import React from 'react';
import { ThemeProvider, Box, Stack } from '@MichaelCDavids/mute-ui';

const App = () => {
  return (
    <ThemeProvider>
      <Box padding="lg">
        <Stack gap="md">
          <h1>Welcome to mute-ui</h1>
          <Box as="button" onClick={() => alert('Clicked!')}>
            Click me
          </Box>
          <Box>
            <p>This is a nested Box.</p>
            <Box>
              <p>This is a deeply nested Box.</p>
            </Box>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
```
