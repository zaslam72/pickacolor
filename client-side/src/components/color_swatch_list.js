import React, { Component } from 'react';
import ColorSwatchItem from './color_swatch_item';
import '../App.css';

class ColorSwatchList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // slice colors array by twelves to display on each page
    const { colors, currentPage, colorsPerPage, changePage } = this.props;
    const indexOfLastColor = currentPage * colorsPerPage;
    const indexOfFirstColor = indexOfLastColor - colorsPerPage;
    const currentColors = colors.slice(indexOfFirstColor, indexOfLastColor);

    // page numbers array
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(colors.length / colorsPerPage); i++) {
      pageNumbers.push(i);
    }

    // adds conditional css styling to currentPage number
    const renderPageNumbers = pageNumbers.map(number => {
      let currentPageStyle;
      if (currentPage == number) {
        currentPageStyle = {
          'font-weight': 'bold',
          'text-decoration': 'underline'
        };
      } else {
        currentPageStyle = {};
      }
      return (
        <li
          key={number}
          id={number}
          onClick={changePage}
          style={currentPageStyle}
        >
          {number}
        </li>
      );
    });

    // displays list of colors, or loading if API call hasn't completed
    if (colors.length < 1) {
      return <p className="loading-sign">Loading...</p>;
    } else {
      const colorItems = currentColors.map(color => {
        return (
          <li key={color.name}>
            <ColorSwatchItem
              colorHexCode={color.hexCode}
              selectColor={this.props.selectColor}
            />
          </li>
        );
      });
      return (
        <div>
          <ul className="color-swatch-list">{colorItems}</ul>
          <ul className="page-numbers">{renderPageNumbers}</ul>
        </div>
      );
    }
  }
}

export default ColorSwatchList;
