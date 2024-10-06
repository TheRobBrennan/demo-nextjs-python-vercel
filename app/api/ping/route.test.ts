import { describe, it, expect, vi } from 'vitest';
import { GET } from './route';
import * as dateUtils from '../../utils/dateUtils';

describe('GET /api/ping', () => {
  it('returns the correct response', async () => {
    const mockDate = new Date('2023-05-01T12:00:00Z');
    vi.spyOn(global, 'Date').mockImplementation(() => mockDate);
    vi.spyOn(dateUtils, 'formatLocalTimestamp').mockReturnValue('2023-05-01 05:00:00 PDT');

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({
      message: "Houston, we have a ping!",
      timestamp: "2023-05-01T12:00:00.000Z",
      localTimestamp: "2023-05-01 05:00:00 PDT"
    });
  });

  it('handles errors correctly', async () => {
    vi.spyOn(global, 'Date').mockImplementation(() => {
      throw new Error('Date error');
    });

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data).toEqual({ error: 'Internal Server Error' });
  });
});