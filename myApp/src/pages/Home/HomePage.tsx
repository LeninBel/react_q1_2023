import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Header from '../../components/Header/header';
import SearchBar from '../../components/Search/searchBar';
import CardList from '../../components/CharactersList/charactersList';
import FetchError, { IError } from '../../components/FetchError/fetchError';
import Loading from '../../components/Loading/loading';
import { saveSearch } from '../../store/searchSlice';
import { useGetCharactersByNameQuery } from '../../services/cartoonApi/cartoonApi';

function HomePage(): JSX.Element {
  const search = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetCharactersByNameQuery(search);
  const onSubmit = (searchValue: string) => {
    dispatch(saveSearch(searchValue));
  };

  return (
    <>
      <Header title="Home" />
      <SearchBar onSubmit={onSubmit} value={search} />
      {isLoading ? (
        <Loading />
      ) : (
        <CardList status={(error as IError)?.status} characters={data?.results ?? []} />
      )}
      {error && <FetchError status={(error as IError)?.status} />}
    </>
  );
}

export default HomePage;
