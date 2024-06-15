import { FC } from 'react';
import { FilmCardProps } from '../films-panel/FilmCard';
import PlainButton from '../ui/PlainButton';

const Description: FC<FilmCardProps> = ({ film }) => {
  return (
    <div className="m-4 grid text-2xl bg-white p-6 rounded-lg shadow-md  font-semibold">
      <p className='text-6xl'>{film.title}</p>
      <p className='mb-12'>{film.annotations}</p>
      <p>Director: {film.director}</p>
      <p>Actors: {film.actors}</p>
      <p>Writer: {film.writer}</p>
      <p className='mb-12'>Sound: {film.sound}</p>
      <p>Total rating: {film.votes}</p>
      <PlainButton title="Vote Here" link={`/films/${film.id}`}></PlainButton>
    </div>
  );
  // TODO rozmyslal som nieco ze button ze volit ze ten film, a ked uz dany user votol, tak sa button title zmeni na remove vote
};

export default Description;
