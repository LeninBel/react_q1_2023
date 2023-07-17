import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './AboutUs';

describe('AboutUs', () => {
  it('renders title ', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('About Us');
  });
});
