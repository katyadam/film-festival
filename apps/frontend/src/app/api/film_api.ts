import BaseApi from './base_api';
import { Film, FilmCreate, FilmUpdate, ApiRespMulti, ApiRespSingle } from './types';

const FILMS_PREFIX = '/films';

const getAllFilms = async (): Promise<ApiRespMulti<Film>> => {
  return await BaseApi.getAll<Film>(`${FILMS_PREFIX}`);
};

const getFilmById = async (id: number): Promise<ApiRespSingle<Film>> => {
  return await BaseApi.getSingle<Film>(`${FILMS_PREFIX}/${id}`);
};

const createFilm = async (film: FilmCreate): Promise<ApiRespSingle<Film>> => {
  return await BaseApi.postSingle<Film>(`${FILMS_PREFIX}`, film);
};

const updateFilm = async (id: number, film: FilmUpdate): Promise<ApiRespSingle<Film>> => {
  return await BaseApi.putSingle<Film>(`${FILMS_PREFIX}/${id}`, film);
};

const deleteFilm = async (id: number): Promise<ApiRespSingle<Film>> => {
  return await BaseApi.deleteSingle<Film>(`${FILMS_PREFIX}/${id}`);
};

const FilmApi = {
  getAllFilms,
  getFilmById,
  createFilm,
  updateFilm,
  deleteFilm,
};

export default FilmApi;