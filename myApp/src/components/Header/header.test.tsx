import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

describe('Header', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header title="Test" />
      </BrowserRouter>
    );
  });

  it('renders header title', () => {
    const headerTitle = screen.getByRole('heading', { level: 1 });
    expect(headerTitle).toBeInTheDocument();
    expect(headerTitle).toBeVisible();
    expect(headerTitle).toHaveTextContent('Test');
  });

  it('renders Home link', () => {
    const homeLink = screen.getByTestId('homeLink');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toBeVisible();
    expect(homeLink).toHaveTextContent('Home');
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders About Us link', () => {
    const homeLink = screen.getByTestId('aboutUsLink');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toBeVisible();
    expect(homeLink).toHaveTextContent('About Us');
    expect(homeLink).toHaveAttribute('href', '/aboutUs');
  });
});
