
import { render, screen } from '@testing-library/react';
import { Stack } from '../layout/Stack';
import { ThemeProvider } from '../context/ThemeContext';
import { Box } from '../atoms/Box';

describe('Stack', () => {
  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <Stack>
          <Box>Child 1</Box>
          <Box>Child 2</Box>
        </Stack>
      </ThemeProvider>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });
});
