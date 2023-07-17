import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Toast from './toast';

describe('Toast', () => {
  it('should not render toast', () => {
    render(<Toast show={false} />);
    expect(screen.getByTestId('toast')).not.toHaveClass('show_toast');
  });
  it('renders toast', () => {
    render(<Toast show />);
    expect(screen.getByText('Book added')).toBeVisible();
  });
});
