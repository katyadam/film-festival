import { FC } from 'react';
import { MockFilm } from '../../mock/films';
import FilmCard from './FilmCard';
import { Film } from '@prisma/client';

type FilmRowProps = {
  films: Film[];
};

const FilmRow: FC<FilmRowProps> = ({ films }) => {
  return (
    <div className="text-rose-900 font-semibold grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {films.map((film) => (
        <FilmCard film={film}></FilmCard>
      ))}
    </div>
  );
};

export default FilmRow;
