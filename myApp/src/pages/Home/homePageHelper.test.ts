import { describe, it } from 'vitest';
import filterBooks from './homePageHelper';
import { Book } from '../../data/mockedData';

const books: Array<Book> = [
  {
    title: 'Python for Finance Cookbook',
    image: '3.jpeg',
    category: 'Python',
    author: 'Eryk Lewinson',
    releaseDate: '23-23-2003',
    onSale: true,
  },
  {
    title: 'JavaScript and jQuery',
    image: '7.jpeg',
    category: 'jQuery',
    author: 'Jon Duckett',
    releaseDate: '23-23-2003',
    onSale: false,
  },
];

describe('homePageHelper', () => {
  it('should should return correct book by category match', () => {
    const result = filterBooks(books, 'Python');
    expect(result).toStrictEqual([books[0]]);
  });

  it('should should return correct book by title match', () => {
    const result = filterBooks(books, 'JavaScript and jQuery');
    expect(result).toStrictEqual([books[1]]);
  });

  it('should should return correct book by author match', () => {
    const result = filterBooks(books, 'Lewinson');
    expect(result).toStrictEqual([books[0]]);
  });

  it('should should return correct books by ', () => {
    const result = filterBooks(books, 'y');
    expect(result).toStrictEqual(books);
  });

  it('should should not return any books', () => {
    const result = filterBooks(books, 'X');
    expect(result).toStrictEqual([]);
  });

  it('should should return all books', () => {
    const result = filterBooks(books, '');
    expect(result).toStrictEqual(books);
  });
});
