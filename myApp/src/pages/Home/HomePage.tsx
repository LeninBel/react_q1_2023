import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/header';
import SearchBar from '../../components/Search/searchBar';
import CardList from '../../components/CardList/cardList';
import { getItem } from '../../services/localStorage/localStorageService';
import books from '../../data/mockedData';

function HomePage(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInput = (value: string) => {
    return setSearchTerm(value);
  };

  useEffect(() => {
    setSearchTerm(getItem('searchTerm') ?? '');
  }, []);

  return (
    <>
      <Header title="Home" />
      <SearchBar inputValue={searchTerm} onChange={handleInput} />
      <CardList books={books} searchTerm={searchTerm} />
    </>
  );
}

export default HomePage;
