import React, { useState } from 'react';
import Card from '../CharacterCard/characterCard';
import Modal from '../CharacterModal/characterModal';
import './charactersList.css';

interface IProps {
  characters: Array<ICharacter> | null;
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
}

function CharactersList({ characters }: IProps): JSX.Element {
  const [selectedCard, setSelectedCard] = useState<ICharacter | null | undefined>(null);

  const handleMoreClick = (id: number) => {
    const cardDetails = characters?.find((c) => c.id === id);
    setSelectedCard(cardDetails);
  };

  const onModalClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="results">
      {characters &&
        characters.map(({ id, name, image }) => (
          <Card onMoreClick={handleMoreClick} id={id} key={id} name={name} image={image} />
        ))}
      {selectedCard && (
        <Modal
          gender={selectedCard.gender}
          species={selectedCard.species}
          status={selectedCard.status}
          image={selectedCard.image}
          onClose={onModalClose}
          name={selectedCard.name}
        />
      )}
    </div>
  );
}
export default CharactersList;
