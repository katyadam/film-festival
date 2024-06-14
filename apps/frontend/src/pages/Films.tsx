import React from 'react';
import FilmFilter from '../components/films-panel/FilmFilter';
import FilmRow from '../components/films-panel/FilmRow';
import { films } from '../mock/films';



const Films = () => {
  return (
    <div className='bg-gray-100 min-h-screen p-8 mb-16'>
      <div className='text-center mb-4'>
        <FilmFilter></FilmFilter>
      </div>
      <div>
        <FilmRow films={films}></FilmRow>
      </div>
    </div>
  );
};

export default Films;
