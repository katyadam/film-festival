import { FC } from 'react';
import { MockFilm } from '../../mock/films';
import PlainButton from '../ui/PlainButton';
import RandomImage from './RandomImage';

export type FilmCardProps = {
  film: MockFilm;
};

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  return (
    <div className="border-rose-900 border-4 bg-white p-6 rounded-lg text-center">
      <div className="flex flex-col h-full items-center">
        <RandomImage width={200} height={200} />
        <div>
          <h2 className="text-2xl mb-5">{film.title}</h2>
        </div>
        <div className="mt-auto">
          <h4 className="mb-5">Votes: {film.votes}</h4>
        </div>
        <PlainButton title="View more" link={`/films/${film.id}`}></PlainButton>
      </div>
    </div>
  );
};

export default FilmCard;
