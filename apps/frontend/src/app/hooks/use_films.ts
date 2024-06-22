import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import FilmApi from '../api/film_api';
import CategoryApi from '../api/category_api';

export const useFilms = () => {
  return useQuery({
    queryKey: ['films'],
    queryFn: () => FilmApi.getAllFilms(),
  });
};

export const useFilm = (id: number) => {
  return useQuery({
    queryKey: ['film', id],
    queryFn: () => FilmApi.getFilmById(id),
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => CategoryApi.getAllCategoriesBasic(),
  });
};

export const useCategory = (id: string) => {
  return useQuery({
    queryKey: ['category', id],
    queryFn: () => CategoryApi.getCategoryById(id),
  });
};

export const useFilmDelete = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => FilmApi.deleteFilm(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['films'] });
    },
  });
};

export const useFilmCreate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['film'],
    mutationFn: FilmApi.createFilm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['films'] });
    },
  });
};

export const useCategoryCreate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['category'],
    mutationFn: CategoryApi.createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};
