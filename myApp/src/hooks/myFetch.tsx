import { useState, useEffect } from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character';

export type UseFetchCharacters = {
  response: Array<ICharacter> | null;
  error: string;
  loading: boolean;
};

export interface ICharacters {
  id: number;
  name: string;
  image: string;
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
}

export function useFetchCharacters(search: string) {
  const [response, setResponse] = useState<Array<ICharacter> | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      try {
        const resultProm = await fetch(`${API_URL}/?name=${search}`);

        if (resultProm.status === 404) {
          setError(false);
          setResponse(null);
          setLoading(false);
          return;
        }

        const resJson = await resultProm.json();
        const { results } = resJson;
        const characters = results.map(({ id, name, image }: ICharacters) => {
          return { id, name, image };
        });

        setResponse(characters);
        setError(false);
      } catch (err) {
        setError(true);
        setResponse(null);
      }

      setTimeout(() => setLoading(false), 1000);
    };
    getCharacters();
  }, [search]);

  return { characters: response, error, loading };
}

export function useFetchCharacter(idCharacter: number | undefined) {
  const [response, setResponse] = useState<ICharacter | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (idCharacter === undefined) {
      setError(true);
      setResponse(null);
      setLoading(false);
      return;
    }

    const getCharacters = async () => {
      setLoading(true);
      try {
        const resultProm = await fetch(`${API_URL}/${idCharacter}`);

        if (resultProm.status === 404) {
          setError(true);
          setResponse(null);
          setLoading(false);
          return;
        }

        const resJson = await resultProm.json();

        const character = {
          id: resJson.id,
          image: resJson.image,
          name: resJson.name,
          status: resJson.status,
          species: resJson.species,
          gender: resJson.gender,
        };

        setResponse(character);
        setError(false);
      } catch (err) {
        setError(true);
        setResponse(null);
      }

      setTimeout(() => setLoading(false), 1000);
    };
    getCharacters();
  }, [idCharacter]);

  return { character: response, error, loading };
}
