import React from 'react';
import { addItem } from '../../services/localStorage/localStorageService';

import './searchBar.css';

interface IProps {
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class SearchBar extends React.Component<IProps> {
  componentWillUnmount(): void {
    const { inputValue } = this.props;
    addItem('searchTerm', inputValue);
  }

  render() {
    const { inputValue, onChange } = this.props;
    return (
      <div className="searchBar">
        <input
          className="searchBar__input"
          type="text"
          onChange={onChange}
          value={inputValue}
          data-testid="searchBar"
        />
      </div>
    );
  }
}

export default SearchBar;
