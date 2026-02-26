// src/atoms/Box.tsx
import React, { createContext, useContext } from 'react';
import { useTheme } from '../context/ThemeContext';

interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children?: React.ReactNode;
  elevation?: 0 | 1 | 2;
}

// 1. Internal context to track nesting depth
const BoxLevelContext = createContext(0);

export const Box = ({ 
  as: Component = 'div', 
  children, 
  elevation: manualElevation, 
  style, 
  ...props 
}: BoxProps) => {
  const { colors, shadows } = useTheme();
  
  // 2. Consume the current level from a parent Box (defaults to 0)
  const level = useContext(BoxLevelContext);

  // 3. Logic: Manual elevation wins, otherwise it follows the nesting level
  const currentElevation = manualElevation ?? (level > 2 ? 2 : level);

  const boxStyle: React.CSSProperties = {
    backgroundColor: level > 0 ? colors.accent : colors.surface,
    boxShadow: shadows[currentElevation as 0 | 1 | 2],
    borderRadius: '8px',
    border: level === 0 ? `1px solid ${colors.accent}` : 'none',
    padding: '16px',
    transition: 'all 0.2s ease-in-out',
    ...style
  };

  return (
    // 4. Provide an incremented level to any children
    <BoxLevelContext.Provider value={level + 1}>
      <Component style={boxStyle} {...props}>
        {children}
      </Component>
    </BoxLevelContext.Provider>
  );
};
