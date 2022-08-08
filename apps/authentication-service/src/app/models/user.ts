import { User } from '@apoloplay/definitions';
import { Types, model, Schema } from 'mongoose';

// export const UserMongo = model(
//   'User',
//   new Schema(
//     class UserSchema implements User {
//       _id: Types.ObjectId;
//       name: string;
//       last_name: string;
//       email: string;
//       password: string;
//     }
//   )
// );

const UserSchema = new Schema({
  name: { require: true, type: String },
  last_name: { require: true, type: String },
  email: { require: true, type: String },
  password: { require: true, type: String },
});

export const UserMongo = model('User', UserSchema);
