import "./moviedetails.css"
import WatchButton from "../Botão/index";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.id) {
                    setMovie(data);
                    setIsLoading(false);
                } else {
                    setNotFound(true);
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    if (notFound) {
        return <h1>Filme não encontrado.</h1>;
    }

    if (!movie) {
        return null;
    }

    return (
        <div className="container">
            {movie ? (
                <div className="movie-container">
                    <img src={movie.poster} className="movie-image" alt={movie.titulo} />
                    <div className="movie-info">
                        <h2>{movie.titulo}</h2>
                        <p>Ano: {movie.ano}</p>
                        <p>Nota: {movie.nota}</p>
                        <p>{movie.sinopse}</p>
                        <WatchButton className="watch-button" />
                    </div>
                </div>
            ) : (
                <p>Filme não encontrado.</p>
            )}
        </div>
    );
}

export default MovieDetails;