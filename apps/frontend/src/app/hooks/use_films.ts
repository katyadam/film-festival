import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const queryClient = useQueryClient();

export const useFilms = () => {
  //const [data, setData] = useState<
  //  ApiRespMulti<CategoryBasic> | undefined>(undefined);
  
  return useQuery({
    queryKey: ['films'],
    queryFn: film_api.getAllFilms(),
  });
};

export const useFilm = (id: string) => {
  return useQuery({
    queryKey: ['film'],
    queryFn: film_api.getFilmById(id),
  });
};

export const useFilmDelete = (id: string) => {
  return useMutation({
    mutationFn: film_api.deleteFilm(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['films'] });
    },
  });
};
