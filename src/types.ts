
import { ElementType } from 'react';

// 1. Base props for styling
export type StyleProps = {
  padding?: string;
  elevation?: number;
  direction?: 'row' | 'column';
  gap?: string;
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
};

// 2. Polymorphic 'as' prop generics
export type PolymorphicAsProp<E extends ElementType> = {
  as?: E;
};

export type PolymorphicProps<E extends ElementType> = 
  PolymorphicAsProp<E> & 
  Omit<React.ComponentPropsWithRef<E>, keyof PolymorphicAsProp<E>>;
