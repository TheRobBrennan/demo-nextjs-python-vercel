import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, act } from '@testing-library/react';
import React from 'react';
import { useUserLocation } from '../../hooks/useUserLocation';

// Mock the useUserLocation hook
vi.mock('../../hooks/useUserLocation');

// Mock MapIcon
vi.mock('./MapIcon', () => ({
  default: {},
}));

// Mock Leaflet
vi.mock('leaflet', () => {
  const mockSetView = vi.fn().mockReturnThis();
  const mockAddTo = vi.fn().mockReturnThis();
  const mockSetLatLng = vi.fn().mockReturnThis();
  const mockBindPopup = vi.fn().mockReturnThis();
  const mockOpenPopup = vi.fn();
  const mockRemove = vi.fn();

  const mockMap = vi.fn(() => ({
    setView: mockSetView,
    remove: mockRemove,
  }));

  const mockTileLayer = vi.fn(() => ({
    addTo: mockAddTo,
  }));

  const mockMarker = vi.fn(() => ({
    setLatLng: mockSetLatLng,
    addTo: mockAddTo,
    bindPopup: mockBindPopup,
    openPopup: mockOpenPopup,
  }));

  const mockCircle = vi.fn(() => ({
    setLatLng: mockSetLatLng,
    addTo: mockAddTo,
  }));

  const mockIcon = vi.fn();

  return {
    default: {
      map: mockMap,
      tileLayer: mockTileLayer,
      marker: mockMarker,
      circle: mockCircle,
      icon: mockIcon,
    },
    map: mockMap,
    tileLayer: mockTileLayer,
    marker: mockMarker,
    circle: mockCircle,
    icon: mockIcon,
  };
});

// Import the Map component after the mocks
import Map from './Map';

describe('Map Component', () => {
  const mockLatitude = 51.505;
  const mockLongitude = -0.09;

  beforeEach(() => {
    vi.mocked(useUserLocation).mockReturnValue({ latitude: mockLatitude, longitude: mockLongitude });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('initializes the map with correct parameters', async () => {
    await act(async () => {
      render(<Map />);
    });

    const L = await import('leaflet');
    expect(L.map).toHaveBeenCalledWith('map');
    expect(L.map().setView).toHaveBeenCalledWith([mockLatitude, mockLongitude], 13);
  });

  it('adds tile layer to the map', async () => {
    await act(async () => {
      render(<Map />);
    });

    const L = await import('leaflet');
    expect(L.tileLayer).toHaveBeenCalledWith(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: '&copy; OpenStreetMap contributors' }
    );
    expect(L.tileLayer().addTo).toHaveBeenCalled();
  });

  it('adds marker and circle to the map', async () => {
    await act(async () => {
      render(<Map />);
    });

    const L = await import('leaflet');
    expect(L.marker).toHaveBeenCalledWith([mockLatitude, mockLongitude], { icon: {} });
    expect(L.marker().addTo).toHaveBeenCalled();
    expect(L.marker().bindPopup).toHaveBeenCalledWith("You are here!");
    expect(L.marker().openPopup).toHaveBeenCalled();

    expect(L.circle).toHaveBeenCalledWith([mockLatitude, mockLongitude], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: 500
    });
    expect(L.circle().addTo).toHaveBeenCalled();
  });

  it('updates marker and circle when location changes', async () => {
    const { rerender } = render(<Map />);

    const newLatitude = 40.7128;
    const newLongitude = -74.0060;

    vi.mocked(useUserLocation).mockReturnValue({ latitude: newLatitude, longitude: newLongitude });

    await act(async () => {
      rerender(<Map />);
    });

    const L = await import('leaflet');
    expect(L.marker().setLatLng).toHaveBeenCalledWith([newLatitude, newLongitude]);
    expect(L.circle().setLatLng).toHaveBeenCalledWith([newLatitude, newLongitude]);
  });

  it('removes the map when component unmounts', async () => {
    let mapInstance: any;
    const L = await import('leaflet');
    vi.mocked(L.map).mockImplementation(() => {
      mapInstance = {
        setView: vi.fn().mockReturnThis(),
        remove: vi.fn(),
      };
      return mapInstance;
    });

    const { unmount } = render(<Map />);

    await act(async () => {
      unmount();
    });

    expect(mapInstance.remove).toHaveBeenCalled();
  });
});