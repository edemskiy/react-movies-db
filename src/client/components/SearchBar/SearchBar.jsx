import React, { Component } from 'react';
import MoviePreview from '../MoviePreview/MoviePreview';
import apikey from '../../constants/api';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchList: [] };
  }

  seachForMovie() {
    fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${this.input.value}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({ searchList: data.Search || [] });
      });
  }
  render() {
    return (
      <div className="container">
        <div className="search-bar">
          <h1> Just search for a movie </h1>
          <input
            ref={(c) => { this.input = c; }}
            onChange={() => this.seachForMovie()}
          />

          { this.state.searchList.length > 0 &&
            <div className="search-results">
              {
                this.state.searchList
                  .map((item, number) => <MoviePreview key={number} movie={item} />)
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

export default SearchBar;
