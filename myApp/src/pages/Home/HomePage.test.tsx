import React from 'react';
import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { store } from '../../store/store';
import HomePage from './HomePage';

const results = [
  {
    id: 1,
    name: 'MyTest',
    image: 'fakeImage',
    status: 'fakeStatus',
    species: 'fakespecies',
    gender: 'fakegender',
  },
];

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json({ results }));
  })
);

describe('HomePage', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('renders title ', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </BrowserRouter>
    );
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('Home');
  });

  it('should render results', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </BrowserRouter>
    );
    await waitFor(() => {
      const cardTitle = screen.getByText('MyTest');
      expect(cardTitle).toBeInTheDocument();
    });
  });
});
