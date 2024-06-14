import BaseApi from './base_api';

const CATEGORY_PREFIX = '/categories';

async function getAll() {
  return BaseApi.getAll(CATEGORY_PREFIX);
}
