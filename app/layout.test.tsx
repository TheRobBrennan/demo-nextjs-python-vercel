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
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );
    // The font class is applied to the body element
    expect(document.body.className).toContain('mocked-inter-class');
  });

  it('has correct lang attribute', () => {
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );
    // The lang attribute is applied to the html element
    expect(document.documentElement.getAttribute('lang')).toBe('en');
  });
});