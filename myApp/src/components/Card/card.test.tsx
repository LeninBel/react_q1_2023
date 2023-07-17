import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './card';

const cardData = {
  title: 'TestBook',
  image: 'TestImage',
  category: 'TestCategory',
  author: 'TestAuthor',
  releaseDate: '22-03-2023',
};

describe('Card', () => {
  beforeEach(() => {
    render(
      <Card
        title={cardData.title}
        category={cardData.category}
        image={cardData.image}
        author={cardData.author}
        releaseDate={cardData.releaseDate}
        onSale
      />
    );
  });

  it('renders book category', () => {
    expect(screen.getByTestId('category')).toHaveTextContent(cardData.category);
  });

  it('renders book title', () => {
    expect(screen.getByTestId('title')).toHaveTextContent(cardData.title);
  });

  it('renders book author', () => {
    expect(screen.getByTestId('author')).toHaveTextContent(`by ${cardData.author}`);
  });
  it('renders book releaseDate', () => {
    expect(screen.getByTestId('releaseDate')).toHaveTextContent(cardData.releaseDate);
  });

  it('renders book onSale', () => {
    expect(screen.getByTestId('onSale')).toHaveTextContent('Sale');
  });
});
