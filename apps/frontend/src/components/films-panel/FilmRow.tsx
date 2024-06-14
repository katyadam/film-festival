import { FC } from 'react';
import { MockFilm } from '../../mock/films';
import FilmCard from './FilmCard';

type FilmRowProps = {
  films: MockFilm[];
};

const FilmRow: FC<FilmRowProps> = ({ films }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {films.map((film) => (
        <FilmCard film={film}></FilmCard>
      ))}
    </div>
  );
};

export default FilmRow;
