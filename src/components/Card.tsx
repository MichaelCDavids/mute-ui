
import React, { ElementType } from 'react';
import { Box } from '../atoms/Box';
import { PolymorphicProps } from '../types';
import { Stack } from '../layout/Stack';

type CardProps<E extends ElementType> = PolymorphicProps<E>;

const CardRoot = <E extends ElementType = 'div'>({ children, ...props }: CardProps<E>) => {
  return (
    <Box elevation={1} {...props}>
      <Stack gap="md">{children}</Stack>
    </Box>
  );
};

const Header = <E extends ElementType = 'div'>({ children, ...props }: CardProps<E>) => {
  return (
    <Box elevation={0} {...props}>
      {children}
    </Box>
  );
};

const Body = <E extends ElementType = 'div'>({ children, ...props }: CardProps<E>) => {
  return <Box {...props}>{children}</Box>;
};

const Footer = <E extends ElementType = 'div'>({ children, ...props }: CardProps<E>) => {
  return (
    <Box elevation={0} {...props}>
      {children}
    </Box>
  );
};

export const Card = Object.assign(CardRoot, {
  Header,
  Body,
  Footer,
});
