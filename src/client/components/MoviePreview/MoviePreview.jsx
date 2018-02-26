import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MoviePreview.css';

class MoviePreview extends Component {
  render() {
    const posterURL = this.props.movie.Poster === 'N/A'
      ? 'https://st.kp.yandex.net/images/persons/photo_none.png'
      : this.props.movie.Poster;

    const movieURL = `/movies/${this.props.movie.imdbID}`;
    return (
      <Link to={movieURL}>
        <div className="movie-preview">
          <div className="poster-container">
            <img src={posterURL} alt="" />
          </div>
          <div className="movie-data">
            <p className="movie-title">{this.props.movie.Title}</p>
            <p className="movie-year">{this.props.movie.Year}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default MoviePreview;
