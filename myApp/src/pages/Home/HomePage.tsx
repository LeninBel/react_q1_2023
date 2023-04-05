import React, { useState } from 'react';
import Header from '../../components/Header/header';
import SearchBar from '../../components/Search/searchBar';
import CardList from '../../components/CharactersList/charactersList';
import { getItem, addItem } from '../../services/localStorage/localStorageService';
import { useFetchCharacters } from '../../hooks/myFetch';
import FetchError from '../../components/FetchError/fetchError';
import Loading from '../../components/Loading/loading';

function HomePage(): JSX.Element {
  const [search, setSearch] = useState(() => getItem('searchTerm') ?? '');
  const { loading, characters, error } = useFetchCharacters(search);
  const onSubmit = (searchValue: string) => {
    setSearch(searchValue);
    addItem('searchTerm', searchValue);
  };

  return (
    <>
      <Header title="Home" />
      <SearchBar onSubmit={onSubmit} value={search} />
      {loading ? <Loading /> : <CardList characters={characters} />}
      {error && <FetchError />}
    </>
  );
}

export default HomePage;
