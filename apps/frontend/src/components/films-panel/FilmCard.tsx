import { FC } from 'react';
import { MockFilm } from '../../mock/films';
import PlainButton from '../ui/PlainButton';

type FilmCardProps = {
  film: MockFilm;
};

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl mb-2">{film.title}</h2>
      <h4 className="mb-5">Votes: {film.votes}</h4>
      <PlainButton title="View more" link={`/films/${film.id}`}></PlainButton>
    </div>
  );
};

export default FilmCard;
