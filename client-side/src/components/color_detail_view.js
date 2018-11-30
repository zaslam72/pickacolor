import React, { Component } from 'react';
import '../App.css';

class ColorDetailView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const hexCode = this.props.selectedColor;
    return (
      <div className="color-detail-view">
        <div className="color-block-detail" style={{ background: hexCode }} />
        <div className="color-name">
          <p>{hexCode}</p>
        </div>
      </div>
    );
  }
}

export default ColorDetailView;
