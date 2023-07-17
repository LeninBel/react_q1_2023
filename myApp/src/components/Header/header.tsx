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
          <Link to="/" data-testid="homeLink">
            Home
          </Link>
          <Link to="/aboutUs" data-testid="aboutUsLink">
            About Us
          </Link>
          <Link to="/form" data-testid="formLink">
            Form
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
