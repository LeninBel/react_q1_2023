import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound';
import HomePage from './pages/Home/HomePage';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;
