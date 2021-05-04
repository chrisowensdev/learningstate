import React, { Component } from 'react';

class MovieDetails extends Component {
    render() {
        const { currentMovie } = this.props;
        return (
            <div className='movie-info'>
                <img src={currentMovie.Poster} alt={currentMovie.Title} />
                <div className='movie-info-description'>
                    <h1>{currentMovie.Title}</h1>
                    <p>Year: {currentMovie.Year}</p>
                    <p>Rated: {currentMovie.Rated}</p>
                    <p>Released: {currentMovie.Released}</p>
                    <p>Director: {currentMovie.Director}</p>
                </div>
            </div>
        );
    }
}

export default MovieDetails;
