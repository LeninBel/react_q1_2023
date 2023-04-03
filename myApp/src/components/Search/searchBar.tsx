import React, { KeyboardEventHandler, forwardRef } from 'react';

import './searchBar.css';

interface IProps {
  defaultValue: string;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  hasError: boolean;
}

const SearchBar = forwardRef<HTMLInputElement, IProps>(function input(
  { defaultValue, onKeyDown, hasError },
  ref
) {
  return (
    <div className="searchBar">
      <input
        placeholder="Enter name"
        className={`searchBar__input ${hasError ? 'searchBar__input--error' : ''}`}
        type="text"
        onKeyDown={onKeyDown}
        defaultValue={defaultValue}
        data-testid="searchBar"
        ref={ref}
      />
    </div>
  );
});

export default SearchBar;
