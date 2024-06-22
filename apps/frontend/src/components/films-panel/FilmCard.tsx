import { FC } from 'react';
import PlainButton from '../ui/PlainButton';
import RandomImage from './RandomImage';
import { Film } from '@prisma/client';
import { useCategory } from '../../app/hooks/use_films';
import { User } from '../../app/api/types';

export type FilmCardProps = {
  film: Film & {voters: User[]};
};

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const { data: category } = useCategory(film.categoryID.toString());

  return (
    <div className="border-rose-900 border-4 bg-white p-6 rounded-lg text-center">
      <div className="flex flex-col h-full items-center">
        <RandomImage width={200} height={200} />
        <div>
          <h2 className="text-2xl mb-5 mt-4">{film.name}</h2>
        </div>
        <div className="mt-auto">
          <h4>Category: {category?.item.name}</h4>
          <h4 className="mb-5">{ film.voters.length}</h4>
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
