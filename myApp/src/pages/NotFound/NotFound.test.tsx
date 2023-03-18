import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('renders title ', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('Page Not Found');
  });
});
