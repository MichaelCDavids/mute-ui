
import { render, screen } from '@testing-library/react';
import { Stack } from './Stack';
import { ThemeProvider } from '../ThemeProvider';

describe('Stack', () => {
  it('renders with the correct styles', () => {
    render(
      <ThemeProvider>
        <Stack gap="lg" data-testid="stack" />
      </ThemeProvider>,
    );
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle('gap: 24px');
  });
});
