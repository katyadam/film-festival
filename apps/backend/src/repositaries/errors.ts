export class DBError extends Error {
  constructor() {
    super('Somthing went wrong');
  }
}

export class EntityNotFoundError extends Error {
  constructor() {
    super('Entity not found.');
  }
}
