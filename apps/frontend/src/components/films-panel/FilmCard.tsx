import React, { FC } from 'react';
import { MockFilm } from '../../mock/films';

type FilmCardProps = {
  film: MockFilm;
  orderNumber?: number;
};

const FilmCard: FC<FilmCardProps> = ({ film, orderNumber }) => {
  return (
    <div className="flex flex-row items-center text-xl gap-4 p-4 border-2 w-full md:w-96">
      <p className="text-8xl text-red-500 font-bold">{orderNumber}</p>
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold text-ellipsis">{film.title}</p>
        <p className="text-ellipsis">{film.votes} votes</p>
      </div>
    </div>
  );
};

export default FilmCard;
