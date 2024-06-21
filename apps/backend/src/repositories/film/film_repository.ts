import { Result } from '@badrap/result';
import client from '../prisma_client';
import { DbResult } from '../types';
import { DBError, NotFoundError } from '../errors';
import { Film, FilmBase, FilmUpdate, Role } from './film_types';

async function create(film: FilmBase): DbResult<Film> {
  try {
    const res = await client.film.create({
      data: film,
    });
    return Result.ok(res);
  } catch (error) {
    console.error(error);
    return Result.err(new DBError());
  }
}

async function readOne(id: number): DbResult<Film> {
  try {
    const res = await client.film.findUnique({
      where: { id },
    });
    if (res) return Result.ok(res);
    return Result.err(new NotFoundError());
  } catch (error) {
    console.error(error);
    return Result.err(new DBError());
  }
}

async function readAll(): DbResult<Film[]> {
  try {
    const res = await client.film.findMany({});
    return Result.ok(res);
  } catch (error) {
    console.error(error);
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
  } catch (error) {
    console.error(error);
    return Result.err(new DBError());
  }
}

async function remove(id: number): DbResult<Film> {
  try {
    const res = await client.film.delete({
      where: { id },
    });
    return Result.ok(res);
  } catch (error) {
    console.error(error);
    return Result.err(new DBError());
  }
}

async function searchByName(name: string): DbResult<Film[]> {
  try {
    const res = await client.film.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
    return Result.ok(res);
  } catch (error) {
    console.error(error);
    return Result.err(new DBError());
  }
}

async function getByCategory(categoryId: number): DbResult<Film[]> {
  try {
    const res = await client.film.findMany({
      where: {
        categoryID : categoryId,
      },
    });
    return Result.ok(res);
  } catch (error) {
    console.error(error);
    return Result.err(new DBError());
  }
}

async function addParticipants(filmId: number, participantIds: number[], role: Role): DbResult<Film> {
  try {
    const data = participantIds.map(participantId => ({
      participantId,
      filmId,
      role,
    }));

    await client.filmParticipant.createMany({
      data,
      skipDuplicates: true,
    });

    const updatedFilm = await client.film.findUnique({
      where: { id: filmId },
      include: { participants: true },
    });

    if (updatedFilm) {
      return Result.ok(updatedFilm);
    }

    return Result.err(new NotFoundError());
  } catch (error) {
    console.error(error);
    return Result.err(new DBError());
  }
}

async function removeParticipants(filmId: number, participantIds: number[]): DbResult<Film> {
  try {
    await client.filmParticipant.deleteMany({
      where: {
        filmId,
        participantId: { in: participantIds },
      },
    });

    const updatedFilm = await client.film.findUnique({
      where: { id: filmId },
      include: { participants: true },
    });

    if (updatedFilm) {
      return Result.ok(updatedFilm);
    }

    return Result.err(new NotFoundError());
  } catch (error) {
    console.error(error);
    return Result.err(new DBError());
  }
}

async function getByYear(year: number): DbResult<Film[]> {
  try {
    const res = await client.film.findMany({
      where: {
        publishedAt: year,
      },
    });
    return Result.ok(res);
  } catch (error) {
    console.error(error);
    return Result.err(new DBError());
  }
}

const filmRepository = {
  create,
  readOne,
  readAll,
  update,
  remove,
  searchByName,
  getByCategory,
  addParticipants,
  removeParticipants,
  getByYear,
};

export default filmRepository;
