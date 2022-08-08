import { model, Schema } from 'mongoose';

export const SongSchema = new Schema({
  image: { type: String },
  name: { type: String },
  publish_year: { type: String },
  url: { type: String },
});

export const SongMongo = model('Song', SongSchema);
