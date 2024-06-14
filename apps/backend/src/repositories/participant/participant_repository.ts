import { Result } from '@badrap/result';
import client from '../prisma_client';
import { DbResult } from '../types';
import { DBError, NotFoundError } from '../errors';
import { Participant } from '@prisma/client';

async function create(name: string): DbResult<Participant> {
  try {
    const res = await client.participant.create({
      data: { name },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function read_one(id: number): DbResult<Participant> {
  try {
    const res = await client.participant.findUnique({
      where: { id },
    });
    if (res) return Result.ok(res);
    return Result.err(new NotFoundError());
  } catch {
    return Result.err(new DBError());
  }
}

async function read_from_film(id: number): DbResult<Participant[]> {
  try {
    const res = await client.participant.findMany({
      where: { partipations: { some: { filmId: id } } },
    });
    if (res) return Result.ok(res);
    return Result.err(new NotFoundError());
  } catch {
    return Result.err(new DBError());
  }
}

async function read_all(): DbResult<Participant[]> {
  try {
    const res = await client.participant.findMany({});
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function update(name: string, id: number): DbResult<Participant> {
  try {
    const res = await client.participant.update({
      where: {
        id,
      },
      data: { name },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function remove(id: number): DbResult<Participant> {
  try {
    const res = await client.participant.delete({
      where: { id },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

const participantRepository = {
  create,
  read_one,
  read_all,
  read_from_film,
  update,
  remove,
};
export default participantRepository;
