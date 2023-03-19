import React from 'react';
import Header from '../../components/Header/header';
import SearchBar from '../../components/Search/searchBar';
import CardList from '../../components/CardList/cardList';
import { getItem } from '../../services/localStorage/localStorageService';

interface IState {
  searchValue: string;
}

class HomePage extends React.Component<Record<string, never>, IState> {
  constructor(props: Record<string, never>) {
    super(props);
    const savedSearch = getItem('searchTerm') ?? '';
    this.state = { searchValue: savedSearch };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return { searchValue: event.target.value };
    });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <>
        <Header title="Home" />
        <SearchBar inputValue={searchValue} onChange={this.handleInput} />
        <CardList searchTerm={searchValue} />
      </>
    );
  }
}

export default HomePage;
