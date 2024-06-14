import React from 'react';
import FilmFilter from '../components/films-panel/FilmFilter';
import FilmRow from '../components/films-panel/FilmRow';

const Films = () => {
  return (
    <div className='min-h-screen p-8 mb-16'>
      <div className='text-center mb-4'>
        <FilmFilter></FilmFilter>
      </div>
      <div>
        <FilmRow></FilmRow>
      </div>

    </div>
  );
};

export default Films;
