import React from 'react';
import FilmFilter from '../components/films-panel/FilmFilter';
import FilmRow from '../components/films-panel/FilmRow';
import { films } from '../mock/films';



const Films = () => {
  return (
    <div className='bg-black min-h-screen px-8 pb-8'>
      <hr className="border-0 h-1 bg-rose-900 rounded-lg shadow-lg mb-8"></hr>
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
