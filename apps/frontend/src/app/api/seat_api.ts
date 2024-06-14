import BaseApi from './base_api';
import { Seat } from './types';

const getAllSeats = async () => {
  return await BaseApi.getAll<Seat>('/seats');
};

const getSeatById = async (id: number) => {
  return await BaseApi.getSingle<Seat>(`/seats/${id}`);
};

const createSeat = async (seat: Partial<Seat>) => {
  return await BaseApi.postSingle<Seat>('/seats', seat);
};

const updateSeat = async (id: number, seat: Partial<Seat>) => {
  return await BaseApi.putSingle<Seat>(`/seats/${id}`, seat);
};

const deleteSeat = async (id: number) => {
  return await BaseApi.deleteSingle<Seat>(`/seats/${id}`);
};

const SeatApi = {
  getAllSeats,
  getSeatById,
  createSeat,
  updateSeat,
  deleteSeat,
};

export default SeatApi;
