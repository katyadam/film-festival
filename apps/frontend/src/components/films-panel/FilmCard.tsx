import { FC } from 'react';
import { MockFilm } from '../../mock/films';
import PlainButton from '../ui/PlainButton';
import RandomImage from './RandomImage';

export type FilmCardProps = {
  film: MockFilm;
};

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex flex-col h-full items-center">
        <RandomImage width={200} height={200} />
        <div className="mb-auto">
          <h2 className="text-2xl mb-2">{film.title}</h2>
          <h4 className="mb-5">Votes: {film.votes}</h4>
        </div>
        <div className="mt-auto">
          <PlainButton
            title="View more"
            link={`/films/${film.id}`}
          ></PlainButton>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
