import { describe, it, expect, vi } from 'vitest';
import { fetchPing } from './fetchPing';

describe('fetchPing', () => {
  it('fetches data successfully', async () => {
    const mockResponse = { message: 'Test message', timestamp: '2023-05-01T12:00:00Z' };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await fetchPing('/api/test');
    expect(result).toEqual(mockResponse);
  });

  it('throws an error when fetch fails', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    await expect(fetchPing('/api/test')).rejects.toThrow('HTTP error! status: 500');
  });
});