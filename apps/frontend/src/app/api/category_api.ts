import BaseApi from './base_api';
import { Category } from './types';

const getAllCategories = async () => {
  return await BaseApi.getAll<Category>('/categories');
};

const getCategoryById = async (id: number) => {
  return await BaseApi.getSingle<Category>(`/categories/${id}`);
};

const createCategory = async (category: Partial<Category>) => {
  return await BaseApi.postSingle<Category>('/categories', category);
};

const updateCategory = async (id: number, category: Partial<Category>) => {
  return await BaseApi.putSingle<Category>(`/categories/${id}`, category);
};

const deleteCategory = async (id: number) => {
  return await BaseApi.deleteSingle<Category>(`/categories/${id}`);
};

const CategoryApi = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};

export default CategoryApi;
