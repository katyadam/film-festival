import React from 'react';
import FilmFilter from '../components/films-panel/FilmFilter';
import FilmRow from '../components/films-panel/FilmRow';
import NavbarLine from '../components/ui/NavbarLine';
import { useFilms } from '../app/hooks/use_films';

const Films = () => {
  const { data: films, isLoading, error } = useFilms();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error loading films:', error);
    return <div>Error loading films.</div>;
  }
  return (
    <div className="bg-black min-h-screen px-8 pb-8">
      <NavbarLine />
      <div className="text-center mb-4">
        <FilmFilter />
      </div>
      <div>
        <FilmRow films={films?.items}></FilmRow>
      </div>
    </div>
  );
};

export default Films;
