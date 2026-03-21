import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Box } from '../atoms/Box';

describe('Polymorphism', () => {
    it('should render as a button', () => {
        render(<Box as="button">Click me</Box>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('should render as a span', () => {
        render(<Box as="span">I am a span</Box>);
        const span = screen.getByText('I am a span');
        expect(span.tagName).toBe('SPAN');
    });

    it('should render as an article', () => {
        render(<Box as="article">I am an article</Box>);
        const article = screen.getByText('I am an article');
        expect(article.tagName).toBe('ARTICLE');
    });

    it('should pass down props to the underlying element', () => {
        render(<Box as="button" disabled>Click me</Box>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });
});
