import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './card';

const cardData = {
  title: 'TestBook',
  image: 'TestImage',
  category: 'TestCategory',
  author: 'TestAuthor',
};

describe('Card', () => {
  beforeEach(() => {
    render(
      <Card
        title={cardData.title}
        category={cardData.category}
        image={cardData.image}
        author={cardData.author}
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
});
