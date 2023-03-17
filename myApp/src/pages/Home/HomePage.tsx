import React from 'react';
import Header from '../../components/Header/header';
import SearchBar from '../../components/Search/searchBar';
import Card from '../../components/Card/card';
import books, { Book } from '../../data/mockedData';
import filterBooks from './homePageHelper';
import './homePage.css';

interface IState {
  jsBooks: Array<Book>;
  inputValue: string;
}

class HomePage extends React.Component<Record<string, never>, IState> {
  constructor(props: Record<string, never>) {
    super(props);
    const savedSearch = localStorage.getItem('searchTerm') ?? '';
    const filteredBooks = filterBooks(books, savedSearch);
    this.state = { jsBooks: filteredBooks, inputValue: savedSearch };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value;
    const filteredBooks = filterBooks(books, searchTerm);
    this.setState(() => {
      return { jsBooks: filteredBooks, inputValue: event.target.value };
    });
  }

  render() {
    const { jsBooks, inputValue } = this.state;
    return (
      <>
        <Header title="Home" />
        <SearchBar inputValue={inputValue} onChange={this.handleInput} />
        <div className="results">
          {jsBooks.map((book) => (
            <Card
              key={book.title}
              title={book.title}
              image={book.image}
              category={book.category}
              author={book.author}
            />
          ))}
        </div>
      </>
    );
  }
}

export default HomePage;
