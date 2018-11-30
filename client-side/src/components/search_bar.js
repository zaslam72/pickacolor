import React, { Component } from 'react';
import logo from '../images/logo-symbol.svg';
import '../App.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <img className="logo" src={logo} />
        <input className="search-input" placeholder="Search" />
      </div>
    );
  }
}

export default SearchBar;