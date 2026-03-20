
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

interface StackProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  gap?: keyof ReturnType<typeof useTheme>['spacing'];
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  style?: React.CSSProperties;
}

export const Stack = React.memo(({
  children,
  direction = 'column',
  gap = 'md',
  align,
  justify,
  style,
}: StackProps) => {
  const { spacing } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getResponsiveDirection = () => {
    if (direction === 'row' && isMobile) {
      return 'column';
    }
    return direction;
  };

  const stackStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: getResponsiveDirection(),
    gap: spacing[gap],
    alignItems: align,
    justifyContent: justify,
    ...style,
  };

  return (
    <div style={stackStyle}>
      {children}
    </div>
  );
});
