import { Types } from 'mongoose';
import { Artist } from '../artist';

export interface Song {
  _id: Types.ObjectId;
  image: string;
  name: string;
  publish_year: number;
  url?: string;
}

export class Song implements Song {
  constructor(
    _id: Types.ObjectId,
    image: string,
    name: string,
    publish_year: number,
    url?: string
  ) {
    this._id = _id;
    this.image = image;
    this.name = name;
    this.publish_year = publish_year;
    this.url = url;
  }
}
