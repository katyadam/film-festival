import { FC } from 'react';
import FilmCard from './FilmCard';
import { FilmExtended } from '../../api/types';

type FilmRowProps = {
  films: FilmExtended[];
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
