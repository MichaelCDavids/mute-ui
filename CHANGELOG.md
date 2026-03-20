# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2024-07-27

### Changed

*   Refactored `Demo.tsx` by extracting the `themes` object into a separate `themes.ts` file for better code organization and maintainability.

## [1.1.0] - 2024-07-26

### Added

*   `Card` component with `Header`, `Body`, and `Footer` sub-components for creating styled content containers.

## [1.0.0] - 2024-07-25

### Added

*   Initial stable release of Mute-UI.
*   `ThemeProvider` for easy customization of colors, spacing, and shadows.
*   `Box` component for fundamental layout and styling.
*   `Stack` for simplified layout and spacing.
*   A rich color palette with 20 muted gradients.
*   Subtle animations like "pulse," "shake," and "jiggle."
*   Comprehensive documentation in the `README.md` file.
*   `CONTRIBUTING.md` file with guidelines for contributors.
*   `CHANGELOG.md` file to track changes.

### Changed

*   The package is now scoped as `@michaelcdavids/mute-ui`.
*   The versioning scheme now follows Semantic Versioning for stable releases.

### Fixed

*   Corrected the live demo link in the `README.md` file.
*   Refactored the theme context and related files to improve code organization and resolve linter warnings.
