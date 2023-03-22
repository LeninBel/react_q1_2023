import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Error from './error';

describe('Error', () => {
  it('should not render error', () => {
    render(<Error show={false} error="TestError2" />);
    expect(screen.getByTestId('error')).not.toHaveClass('show');
  });
  it('renders error with error text', () => {
    render(<Error show error="TestError" />);
    expect(screen.getByText('TestError')).toBeVisible();
  });
});
