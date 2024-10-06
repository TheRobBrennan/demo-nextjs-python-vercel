import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Map from './Map';
import L from 'leaflet';
import { useUserLocation } from '../../hooks/useUserLocation';

// Mock the MapIcon
vi.mock('./MapIcon', () => ({
  default: 'mocked-map-icon'
}));

// Mock the Leaflet library
const mockSetView = vi.fn().mockReturnThis();
const mockRemove = vi.fn();
const mockAddTo = vi.fn().mockReturnThis();
const mockBindPopup = vi.fn().mockReturnThis();
const mockOpenPopup = vi.fn();
const mockSetLatLng = vi.fn();

vi.mock('leaflet', () => ({
  default: {
    map: vi.fn(() => ({
      setView: mockSetView,
      remove: mockRemove,
    })),
    tileLayer: vi.fn(() => ({
      addTo: mockAddTo,
    })),
    marker: vi.fn(() => ({
      addTo: mockAddTo,
      setLatLng: mockSetLatLng,
      bindPopup: mockBindPopup,
      openPopup: mockOpenPopup,
    })),
    circle: vi.fn(() => ({
      addTo: mockAddTo,
      setLatLng: mockSetLatLng,
    })),
    icon: vi.fn(() => 'mocked-leaflet-icon'),
  },
}));

// Mock the useUserLocation hook
vi.mock('../../hooks/useUserLocation', () => ({
  useUserLocation: vi.fn().mockReturnValue({ latitude: 0, longitude: 0 }),
}));

describe('Map', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the map container', () => {
    render(<Map />);
    expect(screen.getByTestId('map-container')).toBeInTheDocument();
  });

  it('initializes the map with correct settings', () => {
    render(<Map />);
    expect(L.map).toHaveBeenCalledWith('map');
    expect(mockSetView).toHaveBeenCalledWith([0, 0], 13);
    expect(L.tileLayer).toHaveBeenCalledWith(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: '&copy; OpenStreetMap contributors' }
    );
  });

  it('creates a marker and circle on initial render', () => {
    render(<Map />);
    expect(L.marker).toHaveBeenCalledWith([0, 0], { icon: 'mocked-map-icon' });
    expect(L.circle).toHaveBeenCalledWith([0, 0], expect.any(Object));
  });

  it('updates marker and circle when location changes', async () => {
    const { rerender } = render(<Map />);
    
    vi.mocked(useUserLocation).mockReturnValue({ latitude: 1, longitude: 1 });
    
    await act(async () => {
      rerender(<Map />);
    });
    
    expect(mockSetView).toHaveBeenCalledWith([1, 1], 13);
    expect(mockSetLatLng).toHaveBeenCalledWith([1, 1]);
  });

  it('updates existing map view when location changes', async () => {
    // Mock initial location
    vi.mocked(useUserLocation).mockReturnValue({ latitude: 0, longitude: 0 });
  
    // Initial render
    const { rerender } = render(<Map />);
    
    // Ensure the map is created with initial coordinates
    expect(L.map).toHaveBeenCalledTimes(1);
    expect(mockSetView).toHaveBeenCalledWith([0, 0], 13);
  
    // Clear the mocks to check for new calls
    vi.clearAllMocks();
  
    // Update the location
    vi.mocked(useUserLocation).mockReturnValue({ latitude: 1, longitude: 1 });
  
    // Rerender the component
    await act(async () => {
      rerender(<Map />);
    });
  
    // The map should not be created again
    expect(L.map).not.toHaveBeenCalled();
  
    // setView should be called with the new coordinates
    expect(mockSetView).toHaveBeenCalledWith([1, 1], 13);
  });

});