/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()] as any,
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./.test-config/vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/**',
        '.next/**',
        'coverage/**',
        'vitest.config.ts',
        'next.config.js',
        'postcss.config.js',
        'tailwind.config.js',
        'htmlcov/**',
        'venv/**',
        '**/*.d.ts',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/index.{js,ts}',
        '**/types.{js,ts}',
        '**/__mocks__/**',
      ],
      include: ['app/**/*.{js,jsx,ts,tsx}'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});