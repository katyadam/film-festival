import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import FilmApi from '../api/film_api';

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
