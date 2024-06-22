import { Request, Response } from 'express';
import { handleRepositoryErrors, parseRequest } from '../../utils';
import seatRepository from './seat_repository';
import { bookSeatRequestSchema, unbookSeatRequestSchema } from './seat_schemas';

const getAllSeats = async (_req: Request, res: Response) => {
  const participants = await seatRepository.read_all();
  if (participants.isErr) {
    handleRepositoryErrors(participants.error, res);
    return;
  }
  if (participants.isOk)
    res.status(200).send({ items: participants.value, message: 'OK' });
};

const bookSeat = async (req: Request, res: Response) => {
  const request = await parseRequest(bookSeatRequestSchema, req, res);
  if (request === null) return;

  const participant = await seatRepository.book(
    request.body.seatsId,
    request.body.userId
  );
  if (participant.isErr) {
    handleRepositoryErrors(participant.error, res);
    return;
  }
  if (participant.isOk)
    res.status(200).send({ item: participant.value, message: 'OK' });
};

const unbookSeat = async (req: Request, res: Response) => {
  const request = await parseRequest(unbookSeatRequestSchema, req, res);
  if (request === null) return;

  const updated = await seatRepository.unbook(request.params.id);
  if (updated.isErr) {
    handleRepositoryErrors(updated.error, res);
    return;
  }
  if (updated.isOk)
    res.status(200).send({ item: updated.value, message: 'OK' });
};

export const seatsController = {
  bookSeat,
  unbookSeat,
  getAllSeats,
};
