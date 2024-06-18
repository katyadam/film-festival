import React from 'react';
import FilmFilter from '../components/films-panel/FilmFilter';
import FilmRow from '../components/films-panel/FilmRow';
import NavbarLine from '../components/ui/NavbarLine';
import { useFilms } from '../app/hooks/use_films';




const Films = () => {

  const {data: films} = useFilms();
  
  return (
    <div className='bg-black min-h-screen px-8 pb-8'>
      <NavbarLine />
      <div className='text-center mb-4'>
        <FilmFilter />
      </div>
      <div>
        <FilmRow films={films}></FilmRow>
      </div>
    </div>
  );
};

export default Films;
