import React from 'react';
import Card from '../Card/card';
import { Book } from '../../data/mockedData';
import './cardList.css';

interface IProps {
  books: Array<Book>;
}

class CardList extends React.Component<IProps> {
  render() {
    const { books } = this.props;
    return (
      <div className="results">
        {books.map((book) => (
          <Card
            key={book.title}
            title={book.title}
            image={book.image}
            category={book.category}
            author={book.author}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
