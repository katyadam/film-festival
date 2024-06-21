import React, { useState, useEffect } from 'react';
import FilmFilter from '../components/films-panel/FilmFilter';
import FilmRow from '../components/films-panel/FilmRow';
import NavbarLine from '../components/ui/NavbarLine';
import { useCategories, useFilms } from '../app/hooks/use_films';
import { Film } from '../app/api/types';
import { filterFilms } from '../utils/filterFilms';

const Films = () => {
  const { data: films, isLoading, error } = useFilms();
  const { data: categories } = useCategories();

  const [filteredFilms, setFilteredFilms] = useState<Film[]>([]);

  useEffect(() => {
    if (films) {
      setFilteredFilms(films.items);
    }
  }, [films]);

  const handleFilterChange = ({ searchKey, votes, selectedCategoryIds }) => {
    if (films) {
      const filtered = filterFilms(
        films.items,
        searchKey,
        votes,
        selectedCategoryIds
      );
      setFilteredFilms(filtered);
    }
  };

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
        {categories && (
          <FilmFilter
            categories={categories}
            onFilterChange={handleFilterChange}
          />
        )}
      </div>
      <div>
        <FilmRow films={filteredFilms} />
      </div>
    </div>
  );
};

export default Films;
