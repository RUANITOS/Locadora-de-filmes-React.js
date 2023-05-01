import "./Filme.css";
import WatchButton from "../Botão/index";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState("titulo");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/marycamila184/movies/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const sortMovies = () => {
    let filteredMovies = [...movies];

    if (searchTerm) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }




    switch (sortBy) {
      case "ano":
        return filteredMovies.sort((a, b) => a.ano - b.ano);
      case "nota":
        return filteredMovies.sort((a, b) => b.nota - a.nota);
      default:
        return filteredMovies.sort((a, b) =>
          a.titulo.localeCompare(b.titulo)
        );
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 mb-3 search">
        <div className="form-group">
          <label htmlFor="search-input">Pesquisar:</label>
          <input
            type="text"
            className="form-control"
            id="search-input"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
      <div className="col-md-12 mb-3 sort">
        <div className="form-group">
          <label htmlFor="sort-select">Ordenar por:</label>
          <select
            className="form-control"
            id="sort-select"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="titulo">Título</option>
            <option value="ano">Ano</option>
            <option value="nota">Nota</option>
          </select>
        </div>
      </div>
      <br />
      {sortMovies().map((movie) => (
        <div key={movie.id} className="col-sm-4 mb-3 movie-card">

          <div className="card">
            <div className="card-body">
              <Link to={`/movies/${movie.id}`}>
                <h5 className="card-title">{movie.titulo}</h5>
              </Link>
              <img src={movie.poster} alt="capa" className="imagem"></img>
              <p className="card-text">Ano: {movie.ano}</p>
              <p className="card-text">Nota: {movie.nota}</p>
              <WatchButton className="watch-button" />
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Movies;