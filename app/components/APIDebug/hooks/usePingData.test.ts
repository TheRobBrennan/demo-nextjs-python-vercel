import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import usePingData from './usePingData';
import { fetchPing } from '../utils/fetchPing';
import type { RenderHookResult } from '@testing-library/react';

vi.mock('../utils/fetchPing');

type UsePingDataHook = ReturnType<typeof usePingData>;

describe('usePingData', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('initializes with null values', () => {
    const { result } = renderHook(() => usePingData());
    expect(result.current.nextJsPing).toBeNull();
    expect(result.current.fastApiPing).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('fetches data on mount', async () => {
    const mockData = { message: 'Test message', timestamp: '2023-05-01T12:00:00Z' };
    vi.mocked(fetchPing).mockResolvedValue(mockData);

    const { result } = renderHook(() => usePingData());

    // Wait for the initial fetch to complete
    await vi.waitFor(() => {
      expect(result.current.nextJsPing).toEqual(mockData);
      expect(result.current.fastApiPing).toEqual(mockData);
    });
  });

  it('handles errors', async () => {
    vi.mocked(fetchPing).mockRejectedValue(new Error('Fetch failed'));

    const { result } = renderHook(() => usePingData());

    await vi.waitFor(() => {
      expect(result.current.error).toBe('Fetch failed: Fetch failed');
    });
  });

  it('handles unknown errors', async () => {
    vi.mocked(fetchPing).mockRejectedValue('Unknown error');

    const { result } = renderHook(() => usePingData());

    await vi.waitFor(() => {
      expect(result.current.error).toBe('An unknown error occurred');
      expect(result.current.nextJsPing).toBeNull();
      expect(result.current.fastApiPing).toBeNull();
    });
  });

  it('refreshes Next.js ping', async () => {
    const mockData = { message: 'Refreshed message', timestamp: '2023-05-01T13:00:00Z' };
    vi.mocked(fetchPing).mockResolvedValue(mockData);

    const { result } = renderHook(() => usePingData());

    // Wait for initial fetch
    await vi.waitFor(() => {
      expect(result.current.nextJsPing).toEqual(mockData);
    });

    // Trigger refresh
    await act(async () => {
      result.current.refreshNextJs();
    });

    expect(result.current.nextJsPing).toEqual(mockData);
  });

  it('refreshes FastAPI ping', async () => {
    const mockData = { message: 'Refreshed message', timestamp: '2023-05-01T13:00:00Z' };
    vi.mocked(fetchPing).mockResolvedValue(mockData);

    const { result } = renderHook(() => usePingData());

    // Wait for initial fetch
    await vi.waitFor(() => {
      expect(result.current.fastApiPing).toEqual(mockData);
    });

    // Trigger refresh
    await act(async () => {
      result.current.refreshFastApi();
    });

    expect(result.current.fastApiPing).toEqual(mockData);
  });

  it('refreshes all pings', async () => {
    const mockData = { message: 'Refreshed message', timestamp: '2023-05-01T13:00:00Z' };
    vi.mocked(fetchPing).mockResolvedValue(mockData);

    const { result } = renderHook(() => usePingData());

    // Wait for initial fetch
    await vi.waitFor(() => {
      expect(result.current.nextJsPing).toEqual(mockData);
      expect(result.current.fastApiPing).toEqual(mockData);
    });

    // Trigger refresh
    await act(async () => {
      result.current.refreshAll();
    });

    expect(result.current.nextJsPing).toEqual(mockData);
    expect(result.current.fastApiPing).toEqual(mockData);
  });
});