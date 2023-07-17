import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Error from './error';

describe('Error', () => {
  it('renders error with error text', () => {
    render(<Error error="TestError" />);
    expect(screen.getByText('TestError')).toBeVisible();
  });
});
