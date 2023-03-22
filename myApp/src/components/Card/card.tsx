import React from 'react';

import './card.css';

interface IProps {
  title: string;
  image: string;
  category: string;
  author: string;
  releaseDate: string | undefined;
  onSale: boolean;
}

class Card extends React.Component<IProps> {
  render() {
    const { title, image, category, author, releaseDate, onSale } = this.props;
    return (
      <div className="card">
        {onSale && <div className="card__sale">Sale</div>}
        <img src={image} alt="book_cover" className="card__image" />
        <div className="card_content">
          <div className="card_content__header">
            <p className="card_content__category" data-testid="category">
              {category}
            </p>
            <p className="card_content__title" data-testid="title">
              {title}
            </p>
          </div>
          <div className="card_content__footer">
            <hr />
            <p className="card_content__author" data-testid="author">{`by ${author}`}</p>
            {releaseDate && <p className="card_content__author">Released: {releaseDate}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
