import { FC } from 'react';
import { MockFilm } from '../../mock/films';

type FilmRowProps = {
  films: MockFilm[];
};

const FilmRow: FC<FilmRowProps> = ({ films }) => {
  return <div></div>;
};

export default FilmRow;
