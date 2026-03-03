# 🔇 mute-ui

**mute-ui** is a React component library designed for building focused, low-distraction interfaces. By prioritizing subtle transitions, intentional whitespace, and a cohesive elevation system, it allows content to take center stage without visual noise.

## 💡 Philosophy

Most UI libraries are "loud"—filled with heavy borders, bright primary colors, and complex shadows. **mute-ui** takes the opposite approach:

* **Subtle Elevation:** We use soft tints and light shadows to define depth 🌊.
* **Contextual Intelligence:** Components like the `Box` automatically adjust their appearance based on their nesting level 🌲.
* **Layout Rhythm:** The `Stack` component manages vertical and horizontal space to ensure a consistent visual beat 📏.

## 🏗️ Core Pillars

### 1. The Theme System 🎨
Everything is powered by a central `ThemeProvider`. It holds your design tokens for colors, spacing, and shadows, ensuring that a change in one place updates your entire app consistently.

### 2. The Box (The Smart Atom) 🧱
The `Box` is the fundamental building block. It uses an internal context to track nesting levels.
* **Level 0:** Primary surface with a subtle border.
* **Level 1+:** Automatically switches to an inset background color to create visual hierarchy without manual styling.

### 3. The Stack (The Layout Engine) 📏
The `Stack` handles the "breathing room" between elements. By using a `gap` prop linked to theme tokens, it eliminates the need for manual margins and prevents margin-collapse issues.

## 🚀 Quick Start

### Installation

```bash
npm install mute-ui
