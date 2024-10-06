import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from './page';

// Mock the Header component
vi.mock('./components/Header/Header', () => ({
  default: () => <div data-testid="mock-header">Mock Header</div>,
}));

// Mock the DynamicMap component
vi.mock('./components/Map/DynamicMap', () => ({
  default: () => <div data-testid="mock-dynamic-map">Mock Dynamic Map</div>,
}));

describe('Home', () => {
  it('renders Header and DynamicMap components', () => {
    render(<Home />);
    
    // Check if Header is rendered
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    
    // Check if DynamicMap is rendered
    expect(screen.getByTestId('mock-dynamic-map')).toBeInTheDocument();
  });

  it('has the correct structure', () => {
    const { container } = render(<Home />);
    
    // Check if the main element has the correct classes
    const mainElement = container.querySelector('main');
    expect(mainElement).toHaveClass('min-h-screen', 'flex', 'flex-col');
    
    // Check if the DynamicMap is a direct child of main
    const dynamicMap = screen.getByTestId('mock-dynamic-map');
    expect(mainElement).toContainElement(dynamicMap);

    // Log the structure for debugging
    console.log('Component structure:', container.innerHTML);
  });
});