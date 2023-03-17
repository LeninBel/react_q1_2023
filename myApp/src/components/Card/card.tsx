import React from 'react';

import './card.css';

interface IProps {
  title: string;
  image: string;
  category: string;
  author: string;
}

class Card extends React.Component<IProps> {
  render() {
    const { title, image, category, author } = this.props;
    const imgUrl = new URL(`../../assets/${image}`, import.meta.url).href;
    return (
      <div className="card">
        <img src={imgUrl} alt="book_cover" className="card__image" />
        <div className="card_content">
          <div className="card_content__header">
            <p className="card_content__category">{category}</p>
            <p className="card_content__title">{title}</p>
          </div>
          <div className="card_content__footer">
            <hr />
            <p className="card_content__author">{`by ${author}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
