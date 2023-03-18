import React from 'react';
import Header from '../../components/Header/header';
import SearchBar from '../../components/Search/searchBar';
import books, { Book } from '../../data/mockedData';
import filterBooks from './homePageHelper';
import CardList from '../../components/CardList/cardList';
import { getItem } from '../../services/localStorage/localStorageService';

interface IState {
  jsBooks: Array<Book>;
  inputValue: string;
}

class HomePage extends React.Component<Record<string, never>, IState> {
  constructor(props: Record<string, never>) {
    super(props);
    const savedSearch = getItem('searchTerm') ?? '';
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
        <CardList books={jsBooks} />
      </>
    );
  }
}

export default HomePage;
