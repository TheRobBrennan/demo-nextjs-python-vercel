import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RootLayout from './layout';

// Mock the next/font/google import
vi.mock('next/font/google', () => ({
  Inter: () => ({ className: 'mocked-inter-class' }),
}));

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('applies a font class', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );
    const body = container.querySelector('body');
    expect(body).toHaveClass('mocked-inter-class');
  });

  it('has correct lang attribute', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );
    const html = container.querySelector('html');
    expect(html).toHaveAttribute('lang', 'en');
  });
});