import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    server: {
        deps: {
            inline: ['css-color', '@asamuzakjp/css-color', '@csstools/css-calc']
        }
    }
  },
});