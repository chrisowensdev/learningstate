import React from 'react';

const MovieDetails = (props) => {
    const { Poster, Title, Rated, Director } = props.details;
    return (
        <>
            <h3>{Title}</h3>
            <img height='100px' src={Poster} alt={Title} />
            <p>{Rated}</p>
            <p>{Director}</p>
            <p>{Director}</p>
        </>
    );
};

export default MovieDetails;
