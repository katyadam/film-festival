import { Result } from '@badrap/result';
import client from '../prisma_client';
import { DbResult, ParticipantUpdate } from '../types';
import { DBError, EntityNotFoundError } from '../errors';
import { Participant } from '@prisma/client';

async function create(participant: ParticipantUpdate): DbResult<Participant> {
  try {
    const res = await client.participant.create({
      data: participant,
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
    return Result.err(new EntityNotFoundError());
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
    return Result.err(new EntityNotFoundError());
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

async function update(
  participant: ParticipantUpdate,
  id: number
): DbResult<Participant> {
  try {
    const res = await client.participant.update({
      where: {
        id,
      },
      data: participant,
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

const film_repo = {
  create,
  read_one,
  read_all,
  read_from_film,
  update,
  remove,
};
export default film_repo;
