
import React from 'react';
import { useTheme } from '../context/ThemeContext';

// 1. Define Stack-specific props
interface StackProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  gap?: keyof ReturnType<typeof useTheme>['spacing'];
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
}

// 2. Build Stack using the Box component for styling
export const Stack = React.memo(({ 
  children, 
  direction = 'column', 
  gap = 'md', 
  align, 
  justify 
}: StackProps) => {
  const { spacing } = useTheme();

  // 3. Use a simple div, or Box if you need its features
  const stackStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    gap: spacing[gap],
    alignItems: align,
    justifyContent: justify,
  };

  return (
    <div style={stackStyle}>
      {children}
    </div>
  );
});
