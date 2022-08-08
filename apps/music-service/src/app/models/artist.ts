import { model, Schema, Types } from 'mongoose';
import { SongSchema } from './song';

const ArtistSchema = new Schema({
  name: { type: String },
  image: { type: String },
  alias: { type: String },
  nationality: { type: String },
  songs: [{ type: SongSchema }],
});

export const ArtistMongo = model('Artist', ArtistSchema);
