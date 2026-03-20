
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../context/ThemeContext';
import { Box } from '../atoms/Box';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const TestComponent = () => {
    const theme = useContext(ThemeContext);
    return <Box>{JSON.stringify(theme)}</Box>
}

describe('ThemeProvider', () => {
  it('provides a default theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const theme = JSON.parse(screen.getByText(/{.+}/).innerHTML);

    expect(theme).toHaveProperty('colors');
    expect(theme).toHaveProperty('spacing');
    expect(theme).toHaveProperty('shadows');
  });

    it('allows theme customization', () => {
        const customTheme = {
            colors: {
                primary: 'red'
            }
        };

        render(
            <ThemeProvider customTheme={customTheme}>
                <TestComponent />
            </ThemeProvider>
        );

        const theme = JSON.parse(screen.getByText(/{.+}/).innerHTML);

        expect(theme.colors.primary).toBe('red');
    });
});
