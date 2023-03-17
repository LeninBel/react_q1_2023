import React from 'react';

import './searchBar.css';

interface IProps {
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class SearchBar extends React.Component<IProps> {
  componentWillUnmount(): void {
    const { inputValue } = this.props;
    localStorage.setItem('searchTerm', inputValue);
  }

  render() {
    const { inputValue, onChange } = this.props;
    return (
      <div className="searchBar">
        <input className="searchBar__input" type="text" onChange={onChange} value={inputValue} />
      </div>
    );
  }
}

export default SearchBar;
