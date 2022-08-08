import { User } from '@apoloplay/definitions';
import { Types } from 'mongoose';

export const UserMock: User = {
  _id: new Types.ObjectId(),
  name: 'Paco',
  email: 'paco@mail.com',
  password: 'password123',
  last_name: 'Gutierrez',
};

export const UserArray: User[] = [
  {
    _id: new Types.ObjectId(),
    name: 'Marcelo',
    last_name: 'Sala',
    email: 'marcelo@mail.com',
    password: 'salas123',
  },
  {
    _id: new Types.ObjectId(),
    name: 'Juan',
    last_name: '??',
    email: 'juan@mail.com',
    password: 'juan125',
  },
  {
    _id: new Types.ObjectId(),
    name: 'Carlos',
    last_name: 'Alanis',
    email: 'carlos@mail.com',
    password: 'carlos901',
  },
];
