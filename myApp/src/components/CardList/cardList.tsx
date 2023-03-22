import React from 'react';
import Card from '../Card/card';
import { Book } from '../../data/mockedData';
import filterBooks from '../../pages/Home/homePageHelper';
import './cardList.css';

interface IProps {
  searchTerm: string;
  books: Array<Book>;
}

class CardList extends React.Component<IProps> {
  render() {
    const { searchTerm, books } = this.props;
    const filteredBooks = filterBooks(books, searchTerm);
    return (
      <div className="results">
        {filteredBooks &&
          filteredBooks.map((book) => (
            <Card
              key={book.title}
              title={book.title}
              image={book.image}
              category={book.category}
              author={book.author}
              releaseDate={book.releaseDate}
            />
          ))}
      </div>
    );
  }
}

export default CardList;
