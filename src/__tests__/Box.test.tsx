
import { render, screen } from '@testing-library/react';
import { Box } from '../atoms/Box';
import { ThemeProvider } from '../context/ThemeContext';

describe('Box', () => {
  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <Box>Hello, World!</Box>
      </ThemeProvider>
    );

    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
