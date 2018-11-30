import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SearchBar from './components/search_bar';
import ColorList from './components/color_list';
import ColorSwatchList from './components/color_swatch_list';
import ColorViewDetail from './components/color_detail_view';
import ColorDetailTint from './components/color_detail_tint';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      currentPage: 1,
      colorsPerPage: 12,
      selectedColor: ''
    };
  }
  handlePageChange(event) {
    this.setState({ currentPage: Number(event.target.id) });
    this.setState({ previousPage: Number(event.target.id) });
  }
  handleColorSelection(event) {
    this.setState({ selectedColor: event.target.id });
  }
  componentDidMount() {
    $.ajax({
      // makes API call to collect colors
      url: 'https://aqueous-ocean-84767.herokuapp.com/',
      dataType: 'json',
      success: function(data) {
        this.setState({ colors: data });
      }.bind(this)
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <SearchBar />
          <ColorList />
          <Route exact path="/"
            render={() => (
              <ColorSwatchList
                colors={this.state.colors}
                currentPage={this.state.currentPage}
                colorsPerPage={this.state.colorsPerPage}
                changePage={this.handlePageChange.bind(this)}
                selectColor={this.handleColorSelection.bind(this)}
              />
            )} 
          />
          <Route path="/color/:id"
            render={() => (
              <ColorViewDetail selectedColor={this.state.selectedColor} />
            )}
          />
          <Route path="/color/:id"
            render={() => (
              <ColorDetailTint selectedColor={this.state.selectedColor} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
