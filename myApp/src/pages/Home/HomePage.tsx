import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header/header';
import SearchBar from '../../components/Search/searchBar';
import CardList from '../../components/CharactersList/charactersList';
import { getItem, addItem } from '../../services/localStorage/localStorageService';
import { useFetchCharacters } from '../../hooks/myFetch';
import { isEmpty } from '../../components/Form/validationRules';
import FetchError from '../../components/FetchError/fetchError';
import Loading from '../../components/Loading/loading';

function HomePage(): JSX.Element {
  const [inputError, setInputError] = useState(false);
  const [search, setSearch] = useState('');
  const { loading, response, error } = useFetchCharacters(search);
  const inputref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedSearch = getItem('searchTerm') ?? '';
    setSearch(savedSearch);
    const currentInput = inputref.current;
    return function saveInLs() {
      addItem('searchTerm', currentInput?.value.trim() ?? '');
    };
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== 'Enter') return;
    const searchValue = inputref.current?.value;
    const hasError = isEmpty(searchValue);

    setInputError(hasError);
    if (hasError) return;
    setSearch(inputref.current?.value ?? '');
  };

  return (
    <>
      <Header title="Home" />
      <SearchBar
        hasError={inputError}
        ref={inputref}
        defaultValue={search}
        onKeyDown={handleKeyPress}
      />
      {loading ? <Loading /> : <CardList characters={response} />}
      {error && <FetchError />}
    </>
  );
}

export default HomePage;
