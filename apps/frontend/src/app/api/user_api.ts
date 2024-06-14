import BaseApi from './base_api';
import { Category, CategoryBasic, CategoryEdit } from '../models/category';
import { ReqPagination } from './response_types';

const USER_PREFIX = '/users';
const TYPE_BASIC = { type: 'basic' };

async function getSingle(id: string) {
  return BaseApi.getSingle<Category>(`${USER_PREFIX}/${id}`);
}

async function getAll() {
  return BaseApi.getAll<Category>(USER_PREFIX);
}

async function getAllBasic() {
  return BaseApi.getAll<CategoryBasic>(USER_PREFIX, {
    params: TYPE_BASIC,
  });
}

async function getAllPaginated({ page }: ReqPagination) {
  return BaseApi.getAllPaginated<Category>(USER_PREFIX, {
    params: { page },
  });
}

async function createSingle(payload: CategoryEdit) {
  return BaseApi.postSingle<Category>(USER_PREFIX, payload);
}

async function updateSingle(id: string, payload: CategoryEdit) {
  return BaseApi.putSingle<Category>(`${USER_PREFIX}/${id}`, payload);
}

async function deleteSingle(id: string) {
  return BaseApi.deleteSingle<Category>(`${USER_PREFIX}/${id}`);
}

const userApi = {
  getSingle,
  getAll,
  getAllBasic,
  getAllPaginated,
  createSingle,
  updateSingle,
  deleteSingle,
};

export default userApi;
