// src/layout/Stack.tsx
import React from 'react';

// We'll define our spacing options based on a 4px or 8px scale
export type Spacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface StackProps {
  children: React.ReactNode;
  direction?: 'column' | 'row';
  gap?: Spacing;
  align?: 'start' | 'center' | 'end' | 'stretch';
}

export const Stack = ({ 
  children, 
  direction = 'column', 
  gap = 'md', 
  align = 'stretch' 
}: StackProps) => {
  // We will map our 'gap' strings to actual pixel values later
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: direction, 
      alignItems: align,
      // The 'gap' property is perfect for this!
    }}>
      {children}
    </div>
  );
};
