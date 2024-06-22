import { Seat } from '@prisma/client';
import BaseApi from './base_api';

const getAllSeats = async () => {
  return await BaseApi.getAll<Seat>('/seats');
};

const getSeatById = async (id: number) => {
  return await BaseApi.getSingle<Seat>(`/seats/${id}`);
};

const createSeat = async (seat: Partial<Seat>) => {
  return await BaseApi.postSingle<Seat>('/seats', seat);
};

const bookSeat = async (id: number, seat: Partial<Seat>) => {
  return await BaseApi.putSingle<Seat>(`/seats/${id}`, seat);
};

const unbookSeat = async (id: number) => {
  return await BaseApi.deleteSingle<Seat>(`/seats/${id}`);
};

const SeatApi = {
  getAllSeats,
  getSeatById,
  createSeat,
  bookSeat,
  unbookSeat,
};

export default SeatApi;
