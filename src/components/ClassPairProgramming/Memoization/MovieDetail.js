import React from 'react';

const MovieDetail = (props) => {
    console.log(props.movie);
    const { Poster, Title, Year, Rated, Director } = props.movie;
    return (
        <>
            <h3>{Title}</h3>
            <img height='200px' src={Poster} alt={Title} />
            <p>{Year}</p>
            <p>{Rated}</p>
            <p>{Director}</p>
        </>
    );
};

export default MovieDetail;
