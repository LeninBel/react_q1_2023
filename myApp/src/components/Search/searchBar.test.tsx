import React from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './searchBar';
import { addItem } from '../../services/localStorage/localStorageService';

vi.mock('../../services/localStorage/localStorageService', () => {
  return {
    addItem: vi.fn(),
  };
});

const onChangeMocked = vi.fn();

describe('SearchBar', () => {
  it('renders search bar with value', () => {
    render(<SearchBar inputValue="test" onChange={onChangeMocked} />);
    const searchBar = screen.getByTestId('searchBar');
    expect(searchBar).toHaveValue('test');
  });

  it('should invoke onchange handler', () => {
    render(<SearchBar inputValue="test" onChange={onChangeMocked} />);
    const searchBar = screen.getByTestId('searchBar');
    fireEvent.change(searchBar, { target: { value: '23' } });
    expect(onChangeMocked).toHaveBeenCalledTimes(1);
  });

  it('should invoke addItem while unmounting', () => {
    const component = render(<SearchBar inputValue="test" onChange={onChangeMocked} />);
    component.unmount();
    expect(addItem).toBeCalledWith('searchTerm', 'test');
  });
});
