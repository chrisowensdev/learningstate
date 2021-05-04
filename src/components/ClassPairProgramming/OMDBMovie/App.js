import React, { useState, useEffect } from 'react';
import MovieDetails from './MovieDetails';

const apikey = '433af2dc';

const App = () => {
    const [movieData, setMovieData] = useState([]);
    const [cache, setCache] = useState({});
    const [currentMovie, setCurrentMovie] = useState({});

    useEffect(() => {
        const setData = async () => {
            const url = `http://www.omdbapi.com/?s=batman&apikey=${apikey}`;

            const response = await fetch(url);
            const data = await response.json();
            setMovieData(data.Search);
        };
        setData();
    }, []);

    const handleClick = async (movie) => {
        const movieUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apikey}`;
        const response = await fetch(movieUrl);
        const data = await response.json();
        setCurrentMovie(data);
    };

    return (
        <div>
            {movieData.map((movie) => (
                <li key={movie.imdbID} onClick={() => handleClick(movie)}>
                    {movie.Title}
                </li>
            ))}
            <MovieDetails details={currentMovie} />
        </div>
    );
};

export default App;
