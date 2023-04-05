import React, { useState } from 'react';
import Card from '../CharacterCard/characterCard';
import Modal from '../CharacterModal/characterModal';
import { ICharacters } from '../../hooks/myFetch';
import './charactersList.css';

interface IProps {
  characters: Array<ICharacters> | null;
}

function CharactersList({ characters }: IProps): JSX.Element {
  const [selectedCard, setSelectedCard] = useState<number | undefined>(undefined);

  const handleMoreClick = (id: number) => {
    setSelectedCard(id);
  };

  const onModalClose = () => {
    setSelectedCard(undefined);
  };

  return (
    <div className="results">
      {characters == null ? (
        <div>Not found</div>
      ) : (
        characters.map(({ id, name, image }) => (
          <Card onMoreClick={handleMoreClick} id={id} key={id} name={name} image={image} />
        ))
      )}
      {selectedCard && <Modal id={selectedCard} onClose={onModalClose} />}
    </div>
  );
}
export default CharactersList;
