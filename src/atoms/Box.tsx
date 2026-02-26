// src/atoms/Box.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface BoxProps {
  as?: React.ElementType; // The HTML tag to render
  children?: React.ReactNode;
  elevation?: 0 | 1 | 2;   // Our muted shadow levels
  padding?: string;
}

export const Box = ({ as: Component = 'div', children, elevation = 0, ...props }: BoxProps) => {
  const { colors, shadows } = useTheme();

  const style = {
    backgroundColor: colors.surface,
    boxShadow: shadows[elevation],
    borderRadius: '8px',
    border: `1px solid ${colors.accent}`,
    ...props.style
  };

  return <Component style={style}>{children}</Component>;
};
