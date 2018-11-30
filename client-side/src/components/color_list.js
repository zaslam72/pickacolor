import React, { Component } from 'react';
import '../App.css';

class ColorList extends Component {
  render() {
    return (
      <div className="color-list">
        <button className="random-color-btn">Random Color</button>
        <a className="color-link">Red</a>
        <a className="color-link">Orange</a>
        <a className="color-link">Yellow</a>
        <a className="color-link">Green</a>
        <a className="color-link">Blue</a>
        <a className="color-link">Purple</a>
        <a className="color-link">Brown</a>
        <a className="color-link">Gray</a>
      </div>
    );
  }
}

export default ColorList;