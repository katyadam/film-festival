import React from 'react';
import { useParams } from 'react-router-dom';
import { films } from '../mock/films';

const FilmDescription = () => {
  const { id } = useParams();
  const filmId = id ? parseInt(id) : -1;
  const film = films.find((f) => f.id === filmId);

  if (!film) {
    return <h2>Film not found</h2>;
  }

  return (
    <div>
      <h1>{film.title}</h1>
      <p>{film.votes}</p>
    </div>
  );
};

export default FilmDescription;
