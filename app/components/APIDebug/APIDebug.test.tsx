import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import APIDebug from './APIDebug';
import usePingData from './hooks/usePingData';

vi.mock('./hooks/usePingData');

describe('APIDebug', () => {
  it('renders without crashing', () => {
    vi.mocked(usePingData).mockReturnValue({
      nextJsPing: null,
      fastApiPing: null,
      error: null,
      refreshNextJs: vi.fn(),
      refreshFastApi: vi.fn(),
      refreshAll: vi.fn(),
    });

    render(<APIDebug />);
    expect(screen.getByText('API Debug')).toBeInTheDocument();
  });

  it('displays ping data when available', () => {
    vi.mocked(usePingData).mockReturnValue({
      nextJsPing: { message: 'Next.js Ping', timestamp: '2023-05-01T12:00:00Z' },
      fastApiPing: { message: 'FastAPI Ping', timestamp: '2023-05-01T12:00:00Z' },
      error: null,
      refreshNextJs: vi.fn(),
      refreshFastApi: vi.fn(),
      refreshAll: vi.fn(),
    });

    render(<APIDebug />);
    expect(screen.getByText('Next.js Ping')).toBeInTheDocument();
    expect(screen.getByText('FastAPI Ping')).toBeInTheDocument();
  });

  it('displays error message when there is an error', () => {
    vi.mocked(usePingData).mockReturnValue({
      nextJsPing: null,
      fastApiPing: null,
      error: 'Test error',
      refreshNextJs: vi.fn(),
      refreshFastApi: vi.fn(),
      refreshAll: vi.fn(),
    });

    render(<APIDebug />);
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });
});