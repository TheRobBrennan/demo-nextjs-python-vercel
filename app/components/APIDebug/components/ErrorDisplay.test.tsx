import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ErrorDisplay from './ErrorDisplay';

describe('ErrorDisplay', () => {
  it('renders error message when error is provided', () => {
    render(<ErrorDisplay error="Test error" />);
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });

  it('does not render anything when error is null', () => {
    const { container } = render(<ErrorDisplay error={null} />);
    expect(container.firstChild).toBeNull();
  });
});