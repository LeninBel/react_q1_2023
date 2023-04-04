import React from 'react';
import { describe, it, Mock, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import { getItem, addItem } from '../../services/localStorage/localStorageService';
import { useFetchCharacters, UseFetchCharacters } from '../../hooks/myFetch';

vi.mock('../../services/localStorage/localStorageService', () => {
  return {
    getItem: vi.fn(() => 'test'),
    addItem: vi.fn(),
  };
});

vi.mock('../../hooks/myFetch');

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

describe('HomePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders title ', () => {
    (useFetchCharacters as unknown as Mock<UseFetchCharacters[]>).mockReturnValue({
      loading: false,
      error: false,
      response: null,
    });
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('Home');
  });

  it('should call getItem while first rendering', () => {
    (useFetchCharacters as unknown as Mock<UseFetchCharacters[]>).mockReturnValue({
      loading: false,
      error: false,
      response: null,
    });
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(getItem).toHaveBeenCalledWith('searchTerm');
  });

  it('should invoke addItem while unmounting', () => {
    (useFetchCharacters as unknown as Mock<UseFetchCharacters[]>).mockReturnValue({
      loading: false,
      error: false,
      response: null,
    });
    const component = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const searchBar = screen.getByTestId('searchBar');
    fireEvent.change(searchBar, { target: { value: '23' } });
    component.unmount();
    expect(addItem).toBeCalledWith('searchTerm', '23');
  });

  it('should render Loading', async () => {
    (useFetchCharacters as unknown as Mock<UseFetchCharacters[]>).mockReturnValue({
      loading: true,
      error: false,
      response: null,
    });
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  it('should render FetchError', () => {
    (useFetchCharacters as unknown as Mock<UseFetchCharacters[]>).mockReturnValue({
      loading: false,
      error: true,
      response: null,
    });
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByTestId('fetch_error')).toBeInTheDocument();
  });

  it('should render results', () => {
    (useFetchCharacters as unknown as Mock<UseFetchCharacters[]>).mockReturnValue({
      loading: false,
      error: false,
      response: results,
    });

    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const cardTitle = screen.getByText('MyTest');
    expect(cardTitle).toBeInTheDocument();
  });
});
