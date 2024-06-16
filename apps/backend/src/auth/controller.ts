import { Request, Response } from "express";
import userRepository from "../repositories/user/user_repository";
import { registerSchema } from "./validation_schema";
import { fromZodError } from "zod-validation-error";
import { handleRepositoryErrors } from "../utils";

const register = async (req: Request, res: Response) => {
  const validRequest = await registerSchema.safeParseAsync(req);

  if (!validRequest.success) {
    const error = fromZodError(validRequest.error);
    const errorResponse: Error = {
      name: "ValidationError",
      message: error.message,
    };
    res.status(400).send(errorResponse);
    return;
  }

  const { username, email, password } = validRequest.data.body;

  const userExists = await userRepository.findByEmail(email);

  if (userExists.isErr) {
    handleRepositoryErrors(userExists.error, res);
    return;
  }

  if (userExists) {
    res.status(400).send({ message: "User already exists" });
    return;
  }

  // TODO implementovat v repository kokotinu ktora mi ulozi tychto userov
  // treba im vygenerovat salt a hashnut password a tak to ulozit
  const user = await userRepository.create({ username, email, password });

  if (user.isErr) {
    handleRepositoryErrors(user.error, res);
    return;
  }

  res.status(201).end();
};

const login = async (_req: Request, res: Response) => {
  res.status(200).end();
};

export const authController = {
  register,
  login,
};
