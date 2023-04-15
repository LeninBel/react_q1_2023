import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Header from '../../components/Header/header';
import SearchBar from '../../components/Search/searchBar';
import CardList from '../../components/CharactersList/charactersList';
import { getItem, addItem } from '../../services/localStorage/localStorageService';
import { useFetchCharacters } from '../../hooks/myFetch';
import FetchError from '../../components/FetchError/fetchError';
import Loading from '../../components/Loading/loading';
import { saveSearch } from '../../store/searchSlice';

function HomePage(): JSX.Element {
  const search = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const { loading, characters, error } = useFetchCharacters(search);
  const onSubmit = (searchValue: string) => {
    dispatch(saveSearch(searchValue));
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
