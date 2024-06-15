import BaseApi from './base_api';
import { UserBase, UserUpdate, UserExtended, ApiRespMulti, ApiRespSingle } from './types';

const USERS_PREFIX = '/users';

async function getUserById(id: string): Promise<ApiRespSingle<UserExtended>> {
  return BaseApi.getSingle<UserExtended>(`${USERS_PREFIX}/${id}`);
}

async function getAllUsers(): Promise<ApiRespMulti<UserExtended>> {
  return BaseApi.getAll<UserExtended>(USERS_PREFIX);
}

async function createUser(payload: UserBase): Promise<ApiRespSingle<UserExtended>> {
  return BaseApi.postSingle<UserExtended>(USERS_PREFIX, payload);
}

async function updateUser(id: string, payload: UserUpdate): Promise<ApiRespSingle<UserExtended>> {
  return BaseApi.putSingle<UserExtended>(`${USERS_PREFIX}/${id}`, payload);
}

async function deleteUser(id: string): Promise<ApiRespSingle<UserExtended>> {
  return BaseApi.deleteSingle<UserExtended>(`${USERS_PREFIX}/${id}`);
}

const UserApi = {
  getUserById,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};

export default UserApi;
