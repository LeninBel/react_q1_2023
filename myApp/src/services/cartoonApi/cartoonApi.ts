import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharacter, ICharacters } from '../../hooks/myFetch';

type Req = {
  results: Array<ICharacters>;
};

export const cartoonApi = createApi({
  reducerPath: 'cartoonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: (builder) => ({
    getCharactersByName: builder.query<Req, string>({
      query: (name) => `/?name=${name}`,
    }),
    getCharacterById: builder.query<ICharacter, number>({
      query: (idCharacter) => `/${idCharacter}`,
    }),
  }),
});
export const { useGetCharactersByNameQuery, useGetCharacterByIdQuery } = cartoonApi;
