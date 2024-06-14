import { FC } from 'react';
import { FilmCardProps } from '../films-panel/FilmCard';

const Description: FC<FilmCardProps> = ({ film }) => {
  return (
    <div className="m-4 grid">
      <p>{film.title}</p>
      <p>Rating: {film.votes}</p>
      <p>Writer: {film.votes}</p>
      <p>Sound: {film.votes}</p>
      <p>Director: {film.votes}</p>
      <p>Actors: {film.votes}</p>
      <p>Annotations: {film.votes}</p>
    </div>
  );
};

export default Description;
