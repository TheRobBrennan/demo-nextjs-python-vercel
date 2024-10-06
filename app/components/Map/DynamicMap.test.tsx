import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DynamicMap from './DynamicMap';

// Mock the Map component
const MockMap = () => <div data-testid="map-container">Map Component</div>;

// Mock next/dynamic
vi.mock('next/dynamic', () => ({
  default: vi.fn((importFunc, options) => {
    const DynamicComponent = (props: any) => {
      const [Component, setComponent] = React.useState<React.ComponentType | null>(null);

      React.useEffect(() => {
        importFunc().then((mod) => setComponent(() => MockMap));
      }, []);

      if (!Component) {
        return options?.loading ? options.loading({}) : null;
      }

      return <Component {...props} />;
    };

    return DynamicComponent;
  }),
}));

describe('DynamicMap', () => {
  it('provides a loading function that renders "Loading map..."', async () => {
    render(<DynamicMap />);
    expect(screen.getByText('Loading map...')).toBeInTheDocument();
  });

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