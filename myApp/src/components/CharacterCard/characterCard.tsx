import React from 'react';

import './characterCard.css';

interface IProps {
  id: number;
  name: string;
  image: string;
  onMoreClick: (id: number) => void;
}

function CharacterCard({ name, image, onMoreClick, id }: IProps): JSX.Element {
  return (
    <div className="card">
      <img src={image} alt="book_cover" className="card__image" />
      <div className="card_content">
        <div className="card_content__header">
          <p className="card_content__title" data-testid="title">
            {name}
          </p>
        </div>
      </div>
      <button onClick={() => onMoreClick(id)} type="button">
        More Info
      </button>
    </div>
  );
}

export default CharacterCard;
