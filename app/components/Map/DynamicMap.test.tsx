import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DynamicMap from './DynamicMap';

// Mock the Map component
const MockMap = () => <div data-testid="map-container">Map Component</div>;

// Mock the dynamic import
vi.mock('next/dynamic', () => ({
  default: (callback: () => Promise<any>) => {
    const DynamicComponent = (props: any) => {
      const [Component, setComponent] = React.useState<React.ComponentType | null>(null);

      React.useEffect(() => {
        callback().then((mod) => setComponent(() => MockMap));
      }, []);

      if (!Component) return <p>Loading map...</p>;

      return <Component {...props} />;
    };

    return DynamicComponent;
  },
}));

describe('DynamicMap', () => {
  it('renders loading state initially', () => {
    render(<DynamicMap />);
    expect(screen.getByText('Loading map...')).toBeInTheDocument();
  });

  it('renders Map component after loading', async () => {
    render(<DynamicMap />);
    await waitFor(() => {
      expect(screen.getByTestId('map-container')).toBeInTheDocument();
    });
  });
});