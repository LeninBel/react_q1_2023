import React from 'react';

import './characterCard.css';

interface IProps {
  name: string;
  image: string;
}

function CharacterCard({ name, image }: IProps): JSX.Element {
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
    </div>
  );
}

export default CharacterCard;
