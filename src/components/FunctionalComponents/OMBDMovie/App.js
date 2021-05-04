import React, { useState, useEffect } from 'react';

const apikey = '';

const App = () => {
    const [currentMovie, setCurrentMovie] = useState({});
    const [movieData, setMovieData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getMovieData = async () => {
            const response = await fetch(
                `http://www.omdbapi.com/?s=batman&apikey=${apikey}`
            );
            const data = await response.json();
            console.log(data.Search);
            setMovieData(data.Search);
        };
        //getMovieData();
    }, []);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = async () => {
        const response = await fetch(
            `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apikey}`
        );
        const data = await response.json();
    };

    console.log(movieData);
    return (
        <div>
            <h1>Movie</h1>
            <input
                type='text'
                placeholder='Search Movies...'
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {movieData.map((movie) => (
                    <li key={movie.omdbID}>{movie.Title}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
