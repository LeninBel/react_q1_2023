import React from 'react';
import Card from '../CharacterCard/characterCard';
import './charactersList.css';

interface IProps {
  characters: Array<ICharacter> | null;
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
}

function CharactersList({ characters }: IProps): JSX.Element {
  return (
    <div className="results">
      {characters &&
        characters.map((character) => (
          <Card key={character.id} name={character.name} image={character.image} />
        ))}
    </div>
  );
}
export default CharactersList;
