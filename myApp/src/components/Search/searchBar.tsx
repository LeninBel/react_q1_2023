import React, { useEffect, useRef } from 'react';
import { addItem } from '../../services/localStorage/localStorageService';

import './searchBar.css';

interface IProps {
  inputValue: string;
  onChange: (value: string) => void;
}

function SearchBar({ inputValue, onChange }: IProps): JSX.Element {
  const inputref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const currentInput = inputref.current;
    return function saveInLs() {
      addItem('searchTerm', currentInput?.value ?? '');
    };
  }, []);

  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={inputValue}
        data-testid="searchBar"
        ref={inputref}
      />
    </div>
  );
}

export default SearchBar;
