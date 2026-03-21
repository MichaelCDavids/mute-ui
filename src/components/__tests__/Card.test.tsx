
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Card } from '../Card';

describe('Card', () => {
    it('should render a basic card', () => {
        render(<Card>Hello</Card>);
        const card = screen.getByText('Hello');
        expect(card).toBeInTheDocument();
    });

    it('should render a card with a header, body, and footer', () => {
        render(
            <Card>
                <Card.Header>Header</Card.Header>
                <Card.Body>Body</Card.Body>
                <Card.Footer>Footer</Card.Footer>
            </Card>
        );

        const header = screen.getByText('Header');
        const body = screen.getByText('Body');
        const footer = screen.getByText('Footer');

        expect(header).toBeInTheDocument();
        expect(body).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    });

    it('should render with default styles', () => {
        render(<Card>Hello</Card>);
        const card = screen.getByText('Hello');
        expect(card).toHaveStyle(`
            border-radius: 8px;
            background-color: #F8F9FA;
            padding: 16px;
        `);
    });

    it('should render a card with custom styles', () => {
        render(<Card style={{ backgroundColor: 'red' }}>Hello</Card>);
        const card = screen.getByText('Hello');
        expect(card).toHaveStyle(`
            background-color: red;
        `);
    });

    it('should render a card with a custom element', () => {
        render(<Card as="article">Hello</Card>);
        const card = screen.getByText('Hello');
        expect(card.tagName).toBe('ARTICLE');
    });
});
