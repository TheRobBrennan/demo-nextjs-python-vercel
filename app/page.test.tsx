import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from './page';

// Mock the Header and APIDebug components
vi.mock('./components/Header/Header', () => ({
  default: () => <div data-testid="mock-header">Mock Header</div>,
}));

vi.mock('./components/APIDebug/APIDebug', () => ({
  default: () => <div data-testid="mock-api-debug">Mock APIDebug</div>,
}));

describe('Home', () => {
  it('renders Header and APIDebug components', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('mock-header')).toBeInTheDocument();
    expect(getByTestId('mock-api-debug')).toBeInTheDocument();
  });

  it('has the correct structure', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toHaveClass('min-h-screen flex flex-col');
    expect(container.querySelector('.flex-grow.overflow-auto')).toBeInTheDocument();
  });
});