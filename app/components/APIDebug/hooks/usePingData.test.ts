import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import usePingData from './usePingData';
import { fetchPing } from '../utils/fetchPing';

vi.mock('../utils/fetchPing');

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
    vi.mocked(fetchPing).mockResolvedValue({ message: 'Test message', timestamp: '2023-05-01T12:00:00Z' });
    const { result } = renderHook(() => usePingData());
    await waitFor(() => {
      expect(result.current.nextJsPing).toEqual({ message: 'Test message', timestamp: '2023-05-01T12:00:00Z' });
      expect(result.current.fastApiPing).toEqual({ message: 'Test message', timestamp: '2023-05-01T12:00:00Z' });
    });
  });

  it('handles errors', async () => {
    vi.mocked(fetchPing).mockRejectedValue(new Error('Fetch failed'));
    const { result } = renderHook(() => usePingData());
    await waitFor(() => {
      expect(result.current.error).toBe('Fetch failed: Fetch failed');
    });
  });

  it('handles unknown errors', async () => {
    // Mock fetchPing to throw a non-Error object
    vi.mocked(fetchPing).mockRejectedValue('Unknown error');

    const { result } = renderHook(() => usePingData());

    await waitFor(() => {
      expect(result.current.error).toBe('An unknown error occurred');
    });

    expect(result.current.nextJsPing).toBeNull();
    expect(result.current.fastApiPing).toBeNull();
  });

  it('refreshes Next.js ping', async () => {
    vi.mocked(fetchPing).mockResolvedValue({ message: 'Refreshed message', timestamp: '2023-05-01T13:00:00Z' });
    const { result } = renderHook(() => usePingData());
    await waitFor(() => expect(result.current.nextJsPing).not.toBeNull());
    act(() => {
      result.current.refreshNextJs();
    });
    await waitFor(() => {
      expect(result.current.nextJsPing).toEqual({ message: 'Refreshed message', timestamp: '2023-05-01T13:00:00Z' });
    });
  });

  it('refreshes FastAPI ping', async () => {
    vi.mocked(fetchPing).mockResolvedValue({ message: 'Refreshed message', timestamp: '2023-05-01T13:00:00Z' });
    const { result } = renderHook(() => usePingData());
    await waitFor(() => expect(result.current.fastApiPing).not.toBeNull());
    act(() => {
      result.current.refreshFastApi();
    });
    await waitFor(() => {
      expect(result.current.fastApiPing).toEqual({ message: 'Refreshed message', timestamp: '2023-05-01T13:00:00Z' });
    });
  });

  it('refreshes all pings', async () => {
    vi.mocked(fetchPing).mockResolvedValue({ message: 'Refreshed message', timestamp: '2023-05-01T13:00:00Z' });
    const { result } = renderHook(() => usePingData());
    await waitFor(() => expect(result.current.nextJsPing).not.toBeNull());
    act(() => {
      result.current.refreshAll();
    });
    await waitFor(() => {
      expect(result.current.nextJsPing).toEqual({ message: 'Refreshed message', timestamp: '2023-05-01T13:00:00Z' });
      expect(result.current.fastApiPing).toEqual({ message: 'Refreshed message', timestamp: '2023-05-01T13:00:00Z' });
    });
  });
});