
import { render, screen } from '@testing-library/react';
import { Box } from './Box';
import { ThemeProvider } from '../ThemeProvider';

describe('Box', () => {
  it('renders with the correct tag', () => {
    render(<Box as="button">Click me</Box>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders with the correct styles', () => {
    render(
      <ThemeProvider>
        <Box padding="lg" data-testid="box" />
      </ThemeProvider>,
    );
    const box = screen.getByTestId('box');
    expect(box).toHaveStyle('padding: 24px');
  });
});
