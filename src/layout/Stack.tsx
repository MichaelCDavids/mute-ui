
import React, { ElementType, forwardRef, useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { PolymorphicProps } from '../types';

// 1. Base props for styling
type StyleProps = {
  direction?: 'row' | 'column';
  gap?: keyof ReturnType<typeof useTheme>['spacing'];
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
};

// 2. Final StackProps
type StackProps<E extends ElementType> = PolymorphicProps<E> & StyleProps;

// 3. The base component logic
const StackBase = <E extends ElementType = 'div'>(
  { as, children, style, direction = 'column', gap = 'md', align, justify, ...props }: StackProps<E>,
  ref: React.ForwardedRef<E>
) => {
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

  const Component = as || 'div';

  return (
      <Component ref={ref as React.ForwardedRef<HTMLDivElement>} style={stackStyle} {...props}>
        {children}
      </Component>
  );
};

// 4. Wrap with forwardRef and memo for performance
const ForwardedRefStack = forwardRef(StackBase);
export const Stack = React.memo(ForwardedRefStack) as typeof ForwardedRefStack;
