import { Result } from '@badrap/result';
import client from '../prisma_client';
import { DbResult } from '../types';
import { DBError, NotFoundError } from '../errors';
import { Film, FilmBase, FilmUpdate } from './film_types';

async function create(film: FilmBase): DbResult<Film> {
  try {
    const res = await client.film.create({
      data: film,
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function read_one(id: number): DbResult<Film> {
  try {
    const res = await client.film.findUnique({
      where: { id },
    });
    if (res) return Result.ok(res);
    return Result.err(new NotFoundError());
  } catch {
    return Result.err(new DBError());
  }
}

async function read_all(): DbResult<Film[]> {
  try {
    const res = await client.film.findMany({});
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function update(film: FilmUpdate, id: number): DbResult<Film> {
  try {
    const res = await client.film.update({
      where: {
        id,
      },
      data: film,
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function remove(id: number): DbResult<Film> {
  try {
    const res = await client.film.delete({
      where: { id },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}
const filmRepository = {
  create,
  read_one,
  read_all,
  update,
  remove,
};
export default filmRepository;
