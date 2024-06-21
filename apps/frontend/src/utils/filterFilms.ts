import { Film } from '../app/api/types';

export const filterFilms = (
  films: Film[],
  searchKey: string,
  votes: number,
  selectedCategoryIds: number[]
): Film[] => {
  let filtered = films;

  if (searchKey) {
    filtered = filtered.filter((film) =>
      film.name.toLowerCase().includes(searchKey.toLowerCase())
    );
  }

  if (votes > 0) {
    filtered = filtered.filter((film) => film.votes >= votes);
  }

  if (selectedCategoryIds.length > 0) {
    filtered = filtered.filter((film) =>
      selectedCategoryIds.some((categoryId) => film.categoryID === categoryId)
    );
  }

  return filtered;
};
