import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import APIDebug from './APIDebug';

// Mock the global fetch function
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('APIDebug', () => {
  beforeEach(() => {
    mockFetch.mockClear();
    // Default mock response
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ message: 'Test message', timestamp: '2023-05-01T12:00:00Z' }),
    });
  });

  it('renders without crashing', () => {
    render(<APIDebug />);
    expect(screen.getByText('API Debug')).toBeInTheDocument();
  });

  it('displays ping data when fetch is successful', async () => {
    render(<APIDebug />);
    await waitFor(() => {
      expect(screen.getAllByText(/Test message/).length).toBe(2);
      expect(screen.getAllByText(/2023-05-01T12:00:00Z/).length).toBe(2);
    });
  });

  it('displays error message when fetch fails', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Fetch failed'));
    render(<APIDebug />);
    await waitFor(() => {
      expect(screen.getByTestId('error-message')).toHaveTextContent('Fetch failed: Fetch failed');
    }, { timeout: 2000 });
  });

  it('displays error message when response is not ok', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: () => Promise.resolve({}),
    });
    render(<APIDebug />);
    await waitFor(() => {
      expect(screen.getByTestId('error-message')).toHaveTextContent('Fetch failed: HTTP error! status: 500');
    }, { timeout: 2000 });
  });

  it('refreshes data when "Refresh All" button is clicked', async () => {
    render(<APIDebug />);
    await waitFor(() => {
      expect(screen.getAllByText(/Test message/).length).toBe(2);
    });

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ message: 'Updated message', timestamp: '2023-05-02T12:00:00Z' }),
    });

    fireEvent.click(screen.getByText('Refresh All'));

    await waitFor(() => {
      expect(screen.getByText(/Updated message/)).toBeInTheDocument();
      expect(screen.getByText(/2023-05-02T12:00:00Z/)).toBeInTheDocument();
    });
  });
});