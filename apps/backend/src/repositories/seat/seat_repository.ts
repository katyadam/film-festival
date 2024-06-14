import { Result } from '@badrap/result';
import client from '../prisma_client';
import { DbResult } from '../types';
import { DBError } from '../errors';
import { Seat } from '@prisma/client';

async function book(user: number, seat: number): DbResult<Seat> {
  try {
    const res = await client.seat.update({
      where: { id: seat },
      data: {
        reservation: { connect: { id: user } },
      },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function unbook(user: number, seat: number): DbResult<Seat> {
  try {
    const res = await client.seat.update({
      where: { id: seat },
      data: {
        reservation: {
          disconnect: { id: user },
        },
      },
    });
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

async function readAll(): DbResult<Seat[]> {
  try {
    const res = await client.seat.findMany({});
    return Result.ok(res);
  } catch {
    return Result.err(new DBError());
  }
}

const seatRepository = {
  book,
  unbook,
  read_all: readAll,
};
export default seatRepository;
