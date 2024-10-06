import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';
import styles from './Header.module.css';

describe('Header', () => {
  it('renders the title correctly', () => {
    render(<Header />);
    const titleElement = screen.getByText(/Landsat Reflectance Data: On the Fly and at Your Fingertips/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('has the correct CSS classes', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toHaveClass(styles.header);
    expect(container.querySelector(`.${styles.imageContainer}`)).toBeInTheDocument();
    expect(container.querySelector(`.${styles.overlay}`)).toBeInTheDocument();
    expect(container.querySelector(`.${styles.title}`)).toBeInTheDocument();
  });
});