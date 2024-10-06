import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useUserLocation } from './useUserLocation';

describe('useUserLocation', () => {
  const mockGeolocation = {
    getCurrentPosition: vi.fn(),
  };

  beforeEach(() => {
    // Mock localStorage
    const mockLocalStorage = {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
    };
    Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

    // Mock console methods
    console.log = vi.fn();
    console.error = vi.fn();

    // Mock navigator
    Object.defineProperty(global, 'navigator', {
      value: {
        geolocation: mockGeolocation
      },
      writable: true,
      configurable: true
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should use saved location from localStorage if available, otherwise use default location', () => {
    // Test with saved location
    const savedLocation = { latitude: 51.5074, longitude: -0.1278 };
    vi.spyOn(localStorage, 'getItem').mockReturnValueOnce(JSON.stringify(savedLocation));

    let { result } = renderHook(() => useUserLocation());
    expect(result.current).toEqual(savedLocation);
    expect(console.log).toHaveBeenCalledWith('Initial location:', JSON.stringify(savedLocation));

    // Reset mocks
    vi.clearAllMocks();

    // Test with no saved location
    vi.spyOn(localStorage, 'getItem').mockReturnValueOnce(null);

    ({ result } = renderHook(() => useUserLocation()));
    expect(result.current).toEqual({ latitude: 0, longitude: 0 }); // DEFAULT_LOCATION
    expect(console.log).toHaveBeenCalledWith('Initial location:', null);
  });

  it('should use default location when localStorage is empty', () => {
    const { result } = renderHook(() => useUserLocation());
    expect(result.current).toEqual({ latitude: 0, longitude: 0 });
    expect(console.log).toHaveBeenCalledWith('Initial location:', null);
    expect(console.log).toHaveBeenCalledWith('useUserLocation effect running');
  });

  it('should update location when geolocation is successful', async () => {
    const position = {
      coords: { latitude: 3, longitude: 4 },
    };

    mockGeolocation.getCurrentPosition.mockImplementation((successCallback) => {
      act(() => {
        successCallback(position);
      });
    });

    const { result } = renderHook(() => useUserLocation());

    // Wait for state to update
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current).toEqual({ latitude: 3, longitude: 4 });
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'userLocation',
      JSON.stringify({ latitude: 3, longitude: 4 })
    );
    expect(console.log).toHaveBeenCalledWith('Geolocation success:', position);
  });

  it('should handle geolocation error', async () => {
    const error = new Error('Geolocation error');

    mockGeolocation.getCurrentPosition.mockImplementation((_, errorCallback) => {
      act(() => {
        errorCallback(error);
      });
    });

    renderHook(() => useUserLocation());

    // Wait for the next tick to allow for the error callback to be called
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(console.error).toHaveBeenCalledWith('Error getting user location:', error);
  });

  it('should handle browser not supporting geolocation', () => {
    // Remove geolocation from navigator
    Object.defineProperty(global, 'navigator', {
      value: {},
      writable: true,
      configurable: true
    });

    renderHook(() => useUserLocation());

    // Wait for the effect to run
    act(() => {
      // This triggers the effect
    });

    expect(console.error).toHaveBeenCalledWith('Geolocation is not supported by this browser.');
  });
});