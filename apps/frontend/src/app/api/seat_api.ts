import BaseApi from './base_api';

const SEAT_PREFIX = '/seats';

async function getAll() {
  return BaseApi.getAll(SEAT_PREFIX);
}

async function book(id: number) {
  return BaseApi.put(`${SEAT_PREFIX}/${id}`);
}

async function unbook(id: number) {
  return BaseApi.delete(`${SEAT_PREFIX}/${id}`);
}

const seatApi = {
  getAll,
  book,
  unbook,
};
export default seatApi;
