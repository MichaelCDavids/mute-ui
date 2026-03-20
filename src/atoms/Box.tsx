
import React, { ElementType, forwardRef, useContext } from 'react';
import { useTheme } from '../hooks/useTheme';
import { BoxLevelContext } from '../context/BoxLevelContext';
import { PolymorphicProps } from '../types';

// 1. Base props for styling
type StyleProps = {
  padding?: keyof ReturnType<typeof useTheme>['spacing'];
  elevation?: 0 | 1 | 2;
};

// 2. Final BoxProps
type BoxProps<E extends ElementType> = PolymorphicProps<E> & StyleProps;

// 3. The base component logic
const BoxBase = <E extends ElementType = 'div'>(
  { as, children, style, padding = 'md', elevation, ...props }: BoxProps<E>,
  ref: React.ForwardedRef<E>
) => {
  const { colors, spacing, shadows } = useTheme();
  const level = useContext(BoxLevelContext);
  const newLevel = level + 1;

  const currentElevation = elevation ?? (level > 2 ? 2 : (level as 0 | 1 | 2));

  const boxStyle: React.CSSProperties = {
    backgroundColor: level > 0 ? colors.accent : colors.surface,
    boxShadow: shadows[currentElevation],
    borderRadius: '8px',
    border: level === 0 ? `1px solid ${colors.accent}` : 'none',
    padding: spacing[padding],
    color: colors.text,
    transition: 'all 0.2s ease-in-out',
    ...style,
  };

  const Component = as || 'div';

  return (
    <BoxLevelContext.Provider value={newLevel}>
      <Component ref={ref as React.ForwardedRef<HTMLDivElement>} style={boxStyle} {...props}>
        {children}
      </Component>
    </BoxLevelContext.Provider>
  );
};

// 4. Wrap with forwardRef and memo for performance
const ForwardedRefBox = forwardRef(BoxBase);
export const Box = React.memo(ForwardedRefBox) as typeof ForwardedRefBox;
