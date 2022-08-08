import { Handler, Request, Response } from 'express';
import { Types } from 'mongoose';
import { UserMongo } from '../../models/user';

const validateObject = ({ name, last_name, email, password }) => {
  name && last_name && email && password;
};

export const getUsers: Handler = async (req: Request, res: Response) => {
  const users = await UserMongo.find();
  return res.status(200).send(users);
};

export const getUserById: Handler = async (req: Request, res: Response) => {
  const user = await UserMongo.findById(new Types.ObjectId(req.body._id));
  if (!user) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  return res.status(200).send(user);
};

export const createUser: Handler = async (req: Request, res: Response) => {
  const user = new UserMongo(req.body);

  await user.save();
  // return res.status(400).send({ error: 'Missing attributes' });
  return res.status(201).send(user);
};

export const updateUserById: Handler = async (req: Request, res: Response) => {
  if (!(await UserMongo.findById(new Types.ObjectId(req.body._id)))) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  await UserMongo.findByIdAndUpdate(req.body._id, req.body);
  const user = await UserMongo.findById(req.body._id);
  return res.status(200).send(user);
};

export const deleteUserById: Handler = async (req: Request, res: Response) => {
  if (!(await UserMongo.findById(new Types.ObjectId(req.body._id)))) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  const user = await UserMongo.findByIdAndDelete(req.body._id);
  return res.status(200).send(user);
};
