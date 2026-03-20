import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Box } from '../atoms/Box';

describe('Polymorphism', () => {
    it('should render as a button', () => {
        render(<Box as="button">Click me</Box>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
});
