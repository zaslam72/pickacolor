import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class ColorDetailTint extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const hexCode = this.props.selectedColor;
    // tints array to show all five blocks
    const tints = [];
    for (let i = 0; i < 5; i++) {
      tints.push(
        <div className="color-detail-tint">
          <div className="color-block-tint" style={{ background: hexCode }} />
          <div className="color-name">
            <p>{hexCode}</p>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="color-tints">{tints}</div>
        <Link to="/">
          <button className="clear-btn">Clear</button>
        </Link>
      </div>
    );
  }
}

export default ColorDetailTint;
