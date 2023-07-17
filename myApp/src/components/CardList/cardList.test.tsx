import React from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from './cardList';
import books from '../../data/mockedData';

vi.mock('../../data/mockedData', () => {
  return {
    default: [
      {
        title: 'TestBook',
        image: 'TestImage',
        category: 'TestCategory',
        author: 'TestAuthor',
      },
      {
        title: 'TestBook1',
        image: 'TestImage1',
        category: 'TestCategory1',
        author: 'TestAuthor1',
      },
    ],
  };
});

describe('CardList', () => {
  beforeEach(() => {
    render(<CardList books={books} searchTerm="" />);
  });

  it('renders all books category', () => {
    screen
      .getAllByTestId('category')
      .forEach((c, i) => expect(c).toHaveTextContent(books[i].category));
  });

  it('renders all books title', () => {
    screen.getAllByTestId('title').forEach((c, i) => expect(c).toHaveTextContent(books[i].title));
  });

  it('renders all books author', () => {
    screen.getAllByTestId('author').forEach((c, i) => expect(c).toHaveTextContent(books[i].author));
  });
});
