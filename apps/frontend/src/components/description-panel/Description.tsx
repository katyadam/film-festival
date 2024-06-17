import { FC } from 'react';
import { FilmCardProps } from '../films-panel/FilmCard';

const Description: FC<FilmCardProps> = ({ film }) => {
  return (
    <div className="m-4 grid text-2xl bg-rose-900 text-white p-6 border border-rose-900 font-semibold rounded-xl">
      <p className="text-6xl">{film.title}</p>
      <p className="mb-12">{film.annotations}</p>
      <p>Director: {film.director}</p>
      <p>Actors: {film.actors}</p>
      <p>Writer: {film.writer}</p>
      <p>Sound: {film.sound}</p>
    </div>
  );
  // TODO rozmyslal som nieco ze button ze volit ze ten film, a ked uz dany user votol, tak sa button title zmeni na remove vote
};

export default Description;
