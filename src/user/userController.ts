import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    const error = createHttpError(400, 'Please Provide all the fields');

    return next(error);
  }

  res.json({ message: 'User Registered' });
};

export { createUser };
