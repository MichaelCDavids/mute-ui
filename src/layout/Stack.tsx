// src/layout/Stack.tsx
import { useTheme } from '../context/ThemeContext';

export const Stack = ({ children, direction = 'column', gap = 'md' }) => {
  const { spacing } = useTheme();
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: direction,
      gap: spacing[gap] // Pulls the pixel value (e.g., '16px')
    }}>
      {children}
    </div>
  );
};
