import React, { Component } from 'react';
import MovieDetails from './MovieDetails';

import './style.css';
const apikey = '';

class App extends Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            currentMovie: null,
        };
    }

    getMovieInfo = async (id) => {
        const response = await fetch(
            `http://www.omdbapi.com/?i=${id}&apikey=${apikey}`
        );
        const data = await response.json();
        console.log(data);
        this.setState({
            currentMovie: data,
        });
    };

    componentDidMount = async () => {
        const response = await fetch(
            `http://www.omdbapi.com/?s=batman&apikey=${apikey}`
        );
        const data = await response.json();
        this.setState({
            movies: data.Search,
        });
    };

    render() {
        const { movies, currentMovie } = this.state;
        return (
            <div>
                <h1>OMBD React App</h1>
                <ul className='movie-list'>
                    {movies.map((movie, idx) => (
                        <li
                            className='movie-list-item'
                            key={movie.imdbID}
                            onClick={(e) => this.getMovieInfo(movie.imdbID)}
                        >
                            <img src={movie.Poster} alt={movie.Title} />
                            {movie.Title}
                        </li>
                    ))}
                </ul>
                {currentMovie === null ? (
                    ''
                ) : (
                    <MovieDetails currentMovie={currentMovie} />
                )}
            </div>
        );
    }
}

export default App;
