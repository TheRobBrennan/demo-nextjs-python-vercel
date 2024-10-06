import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PingDisplay from './PingDisplay';

describe('PingDisplay', () => {
  it('renders with data', () => {
    const mockData = { message: 'Test message', timestamp: '2023-05-01T12:00:00Z' };
    render(<PingDisplay title="Test Ping" data={mockData} onRefresh={() => {}} />);
    expect(screen.getByText('Test Ping')).toBeInTheDocument();
    expect(screen.getByText(/Test message/)).toBeInTheDocument();
    expect(screen.getByText(/2023-05-01T12:00:00Z/)).toBeInTheDocument();
  });

  it('renders without data', () => {
    render(<PingDisplay title="Test Ping" data={null} onRefresh={() => {}} />);
    expect(screen.getByText('Test Ping')).toBeInTheDocument();
    expect(screen.getByText('null')).toBeInTheDocument();
  });

  it('calls onRefresh when refresh button is clicked', () => {
    const mockOnRefresh = vi.fn();
    render(<PingDisplay title="Test Ping" data={null} onRefresh={mockOnRefresh} />);
    fireEvent.click(screen.getByText('Refresh Test Ping'));
    expect(mockOnRefresh).toHaveBeenCalledTimes(1);
  });
});