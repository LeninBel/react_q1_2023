import React from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import { getItem } from '../../services/localStorage/localStorageService';
import filterBooks from './homePageHelper';
import books from '../../data/mockedData';

vi.mock('../../services/localStorage/localStorageService', () => {
  return {
    getItem: vi.fn(() => 'test'),
    addItem: vi.fn(),
  };
});

vi.mock('./homePageHelper', () => {
  return {
    default: vi.fn(() => [
      {
        title: 'Python for Finance Cookbook',
        image: '3.jpeg',
        category: 'Python',
        author: 'Eryk Lewinson',
      },
    ]),
  };
});

describe('HomePage', () => {
  it('renders title ', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('Home');
  });

  it('should call getItem while first rendering', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(getItem).toHaveBeenCalledWith('searchTerm');
  });

  it('should call filterBooks while first rendering', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(filterBooks).toHaveBeenCalledWith(books, 'test');
  });

  it('should call filterBooks after entering search term', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const searchBar = screen.getByTestId('searchBar');
    fireEvent.change(searchBar, { target: { value: '23' } });

    expect(filterBooks).toHaveBeenCalledWith(books, '23');
  });
});
