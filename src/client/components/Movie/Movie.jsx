import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Table } from 'react-bootstrap';
import apikey from '../../constants/api';
import './Movie.css';

class Movie extends React.Component {
  // put in a separate file
  static createNewProperty(property) {
    return {
      id: shortid.generate(),
      property,
    };
  }
  constructor(props) {
    super(props);
    this.state = { movie: {} };
    fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${props.match.params.movieID}&plot=full`)
      .then(response => response.json())
      .then((data) => {
        this.setState({ movie: data || {} });
      });
  }
  render() {
    const filterKeys = ['Poster', 'Plot', 'Metascore', 'Ratings', 'imdbVotes', 'imdbID',
      'DVD', 'Website', 'Response'];
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
                  {
                  Object.keys(this.state.movie)
                  .filter(key => filterKeys.indexOf(key) === -1)
                  .map(item => this.createNewProperty(item))
                  .map(item =>
                    (
                      <tr key={item.id}>
                        <td>{item.property}</td>
                        <td>{String(this.state.movie[item.property])}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Movie.defaultProps = {
  match: {
    params: {
      movieID: '',
    },
  },
};

Movie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieID: PropTypes.string,
    }),
  }),
};

export default Movie;
