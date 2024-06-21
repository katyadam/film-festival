import { Request, Response } from 'express';
import { handleRepositoryErrors, parseRequest } from '../../utils';
import {
  createFilmRequestSchema,
  deleteFilmRequestSchema,
  getFilmRequestSchema,
  updateFilmRequestSchema,
} from './film_schemas';
import filmRepository from './film_repository';

const getSingleFilm = async (req: Request, res: Response) => {
  const request = await parseRequest(getFilmRequestSchema, req, res);
  if (request === null) return;

  const id = request.params.id;

  const film = await filmRepository.readOne(id);
  if (film.isErr) {
    handleRepositoryErrors(film.error, res);
    return;
  }
  if (film.isOk) res.status(200).send({ item: film.value, message: 'OK' });
};

const getAllFilms = async (_req: Request, res: Response) => {
  const categories = await filmRepository.readAll();
  if (categories.isErr) {
    handleRepositoryErrors(categories.error, res);
    return;
  }
  if (categories.isOk)
    res.status(200).send({ items: categories.value, message: 'OK' });
};

const createSingleFilm = async (req: Request, res: Response) => {
  const request = await parseRequest(createFilmRequestSchema, req, res);
  if (request === null) return;

  const film = {
    name: request.body.name,
    originalName: request.body.originalName,
    intro: request.body.intro,
    picture: request.body.picture,
    publishedAt: request.body.publishedAt,
    runTimeMinutes: request.body.runTimeMinutes,
    categoryID: request.body.categoryID,
  };

  const newCategory = await filmRepository.create(film);
  if (newCategory.isErr) {
    handleRepositoryErrors(newCategory.error, res);
    return;
  }
  if (newCategory.isOk)
    res.status(201).send({ item: newCategory.value, message: 'OK' });
};

const updateSingleFilm = async (req: Request, res: Response) => {
  const request = await parseRequest(updateFilmRequestSchema, req, res);
  if (request === null) return;

  const id = request.params.id;
  const film = { ...request.body };

  const updated = await filmRepository.update(film, id);
  if (updated.isErr) {
    handleRepositoryErrors(updated.error, res);
    return;
  }
  if (updated.isOk)
    res.status(200).send({ item: updated.value, message: 'OK' });
};

const deleteSingleFilm = async (req: Request, res: Response) => {
  const request = await parseRequest(deleteFilmRequestSchema, req, res);
  if (request === null) return;

  const id = request.params.id;

  const confirmation = await filmRepository.remove(id);
  if (confirmation.isErr) {
    handleRepositoryErrors(confirmation.error, res);
    return;
  }

  res.status(200).send({ item: null, message: 'OK' });
};

export const filmsController = {
  getAllFilms,
  getSingleFilm,
  updateSingleFilm,
  deleteSingleFilm,
  createSingleFilm,
};
