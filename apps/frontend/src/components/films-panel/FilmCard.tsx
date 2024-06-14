import { FC } from 'react';
import { MockFilm } from '../../mock/films';

type FilmCardProps = {
  film: MockFilm;
};

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  return <div></div>;
};

export default FilmCard;