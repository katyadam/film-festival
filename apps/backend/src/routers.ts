import { Router } from 'express';
import { categoriesController } from './repositaries/category/category_controllers';

export const category_router = Router();
export const film_router = Router();
export const participant_router = Router();
export const review_router = Router();
export const seat_router = Router();
export const user_router = Router();

user_router.post('/'); //register
user_router.get('/'); //login
user_router.put('/:id'); //edit

film_router.get('/');
film_router.get('/:id');
film_router.post('/');
film_router.put('/:id');
film_router.delete('/:id');

review_router.get('/');
review_router.get('/:id');
review_router.post('/');

category_router.get('/', categoriesController.getAllCategories);
category_router.get('/:id', categoriesController.getSingleCategory);
category_router.post('/', categoriesController.createSingleCategory);
category_router.delete('/:id', categoriesController.deleteSingleCategory);
category_router.put('/:id', categoriesController.updateSingleCategory);

seat_router.put('/:id'); //book
seat_router.delete('/:id'); //unbook
