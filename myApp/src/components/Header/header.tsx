import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

interface HeaderProps {
  title: string;
}

class Header extends React.Component<HeaderProps> {
  render() {
    const { title } = this.props;

    return (
      <header className="header">
        <h1>{title}</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/aboutUs">About Us</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
