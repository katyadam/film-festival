import BaseApi from './base_api';
import { Film } from './types';

const getAllFilms = async () => {
  return await BaseApi.getAll<Film>('/films');
};

const getFilmById = async (id: number) => {
  return await BaseApi.getSingle<Film>(`/films/${id}`);
};

const createFilm = async (film: Partial<Film>) => {
  return await BaseApi.postSingle<Film>('/films', film);
};

const updateFilm = async (id: number, film: Partial<Film>) => {
  return await BaseApi.putSingle<Film>(`/films/${id}`, film);
};

const deleteFilm = async (id: number) => {
  return await BaseApi.deleteSingle<Film>(`/films/${id}`);
};

const FilmApi = {
  getAllFilms,
  getFilmById,
  createFilm,
  updateFilm,
  deleteFilm,
};

export default FilmApi;
