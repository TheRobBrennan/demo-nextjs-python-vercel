import { describe, it, expect } from 'vitest';
import { formatLocalTimestamp } from './dateUtils';

describe('formatLocalTimestamp', () => {
  it('formats the date correctly', () => {
    const date = new Date('2023-05-01T12:00:00Z');
    const result = formatLocalTimestamp(date);
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} PDT$/);
  });

  it('uses PDT timezone', () => {
    const date = new Date('2023-05-01T12:00:00Z');
    const result = formatLocalTimestamp(date);
    expect(result).toContain('PDT');
  });

  it('handles different dates correctly', () => {
    const winterDate = new Date('2023-01-01T00:00:00Z');
    const summerDate = new Date('2023-07-01T00:00:00Z');

    const winterResult = formatLocalTimestamp(winterDate);
    const summerResult = formatLocalTimestamp(summerDate);

    expect(winterResult).not.toBe(summerResult);
  });
});