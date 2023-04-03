import { useState, useEffect } from 'react';
import { ICharacter } from '../components/CharactersList/charactersList';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export type UseFetchCharacters = {
  response: Array<ICharacter> | null;
  error: string;
  loading: boolean;
};

export function useFetchCharacters(search: string) {
  const [response, setResponse] = useState<Array<ICharacter> | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (search === '') return;

    const getCharacters = async () => {
      setLoading(true);
      try {
        const resultProm = await fetch(`${API_URL}?name=${search}`);

        if (resultProm.status === 404) {
          setError(false);
          setResponse(null);
          setLoading(false);
          return;
        }

        const resJson = await resultProm.json();
        const { results } = resJson;
        const characters = results.map(
          ({ id, name, image, status, species, gender }: ICharacter) => {
            return { id, name, image, status, species, gender };
          }
        );

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

  return { response, error, loading };
}
