import { Types } from 'mongoose';

export interface User {
  _id: Types.ObjectId;
  name: string;
  last_name: string;
  email: string;
  password: string;
}
