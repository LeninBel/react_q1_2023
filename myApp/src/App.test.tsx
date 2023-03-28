import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  it('renders Home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Home');
  });

  it('renders Abount Us page', () => {
    render(
      <MemoryRouter initialEntries={['/aboutUs']}>
        <App />
      </MemoryRouter>
    );
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('About Us');
  });

  it('renders Form page', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    );
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Form');
  });

  it('renders Not Found page', () => {
    render(
      <MemoryRouter initialEntries={['/notExistPage']}>
        <App />
      </MemoryRouter>
    );
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Page Not Found');
  });
});
