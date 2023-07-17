import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

describe('App', () => {
  it('renders Home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Home');
  });

  it('renders Abount Us page', () => {
    render(
      <MemoryRouter initialEntries={['/aboutUs']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('About Us');
  });

  it('renders Form page', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Form');
  });

  it('renders Not Found page', () => {
    render(
      <MemoryRouter initialEntries={['/notExistPage']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Page Not Found');
  });
});
