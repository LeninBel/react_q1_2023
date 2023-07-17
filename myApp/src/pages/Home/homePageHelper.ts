import { Book } from '../../data/mockedData';

const filterBooks = (books: Array<Book>, filter: string): Array<Book> => {
  const filteredBooks =
    filter === ''
      ? books
      : books.filter((book) => {
          return (
            book.author.includes(filter) ||
            book.category.includes(filter) ||
            book.title.includes(filter)
          );
        });

  return filteredBooks;
};

export default filterBooks;
