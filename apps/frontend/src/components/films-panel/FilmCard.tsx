import { FC } from 'react';
import { MockFilm } from '../../mock/films';
import PlainButton from '../ui/PlainButton';
import RandomImage from './RandomImage';
import { Film } from '@prisma/client';

export type FilmCardProps = {
  film: Film;
};

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  //TODO <h4 className="mb-5">Votes: {film.votes}</h4>
  return (
    <div className="border-rose-900 border-4 bg-white p-6 rounded-lg text-center">
      <div className="flex flex-col h-full items-center">
        <RandomImage width={200} height={200} />
        <div>
          <h2 className="text-2xl mb-5 mt-4">{film.name}</h2>
        </div>
        <div className="mt-auto">
          <h4 className="mb-5">Votes: 123</h4>
        </div>
        <PlainButton
          title="View more"
          color="rose-900"
          link={`/films/${film.id}`}
        ></PlainButton>
      </div>
    </div>
  );
};

export default FilmCard;
