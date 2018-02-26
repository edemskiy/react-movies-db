import React from 'react';
import { Table } from 'react-bootstrap';
import './Movie.css';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: {} };
    fetch(`http://www.omdbapi.com/?apikey=60fb6e8f&i=${props.match.params.movieID}&plot=full`)
      .then(response => response.json())
      .then((data) => {
        this.setState({ movie: data || {} });
      });
  }
  render() {
    return (
      <div className="movie-container">
        <div className="main-content">
          <div className="movie-title">
            <h1>{`${this.state.movie.Title}`}</h1>
          </div>
          <div className="movie">
            <div className="poster">
              <img src={this.state.movie.Poster} alt="" />
            </div>
            <div className="movie-info">
              <Table bordered condensed hover>
                <tbody>
                  <tr>
                    <td>Year</td>
                    <td>{this.state.movie.Year}</td>
                  </tr>
                  <tr>
                    <td>Main actors</td>
                    <td>{this.state.movie.Actors}</td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>{this.state.movie.Director}</td>
                  </tr>
                  <tr>
                    <td>Release Date</td>
                    <td>{this.state.movie.Released}</td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td>{this.state.movie.Rated}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
