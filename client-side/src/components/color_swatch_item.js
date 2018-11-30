import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class ColorSwatchItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const hexCode = this.props.colorHexCode;
    // links to each color detail view and passes along the hexCode
    return (
      <Link to={{ pathname: `/color/${hexCode}` }}>
        <div className="color-swatch-item"
          id={hexCode} onClick={this.props.selectColor}>
          <div className="color-block"
            id={hexCode} style={{ background: hexCode }} />
          <div className="color-name" id={hexCode}>
            <p id={hexCode}>{hexCode}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default ColorSwatchItem;