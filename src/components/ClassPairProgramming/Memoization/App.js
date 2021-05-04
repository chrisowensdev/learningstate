import React, { useState, useEffect } from 'react';
import MovieDetail from './MovieDetail';

const apikey = '433af2dc';

const App = () => {
    const [movieData, setMovieData] = useState([]);
    const [currentMovie, setCurrentMovie] = useState({});
    const [cache, setCache] = useState({});

    useEffect(() => {
        const getMovieData = async () => {
            let apicall = await fetch(
                `http://www.omdbapi.com/?s=batman&apikey=${apikey}`
            );
            let data = await apicall.json();
            setMovieData(data.Search);
        };
        getMovieData();
        console.log(movieData);
    }, []);

    const handleClick = async (movie) => {
        if (cache[movie.imdbID] === undefined) {
            // make an api call

            // store the new key in our cache

            // setCurrentMovie

            const apiData = await fetch(
                `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apikey}`
            );
            const data = await apiData.json();

            setCurrentMovie(data);

            let id = movie.imdbID;

            let newCache = { ...cache, [id]: data };

            console.log('making a new api call');
            setCache(newCache);
        } else {
            console.log('getting data from cache');
            // retrieve the data from the cache
            console.log(cache[movie.imdbID]);
            setCurrentMovie(cache[movie.imdbID]);
            // setCurrentMovie
        }
    };
    return (
        <>
            {movieData.map((movieObj) => {
                return (
                    <button
                        key={movieObj.imdbID}
                        onClick={() => handleClick(movieObj)}
                    >
                        <h3>{movieObj.Title}</h3>
                        <img
                            height='150px'
                            src={movieObj.Poster}
                            alt={movieObj.Title}
                        />
                    </button>
                );
            })}

            <MovieDetail movie={currentMovie} />
        </>
    );
};

export default App;
