import { Types } from 'mongoose';
import { Song } from '../song';
export interface Artist {
    _id: Types.ObjectId;
    image: string;
    name: string;
    alias: string;
    nationality: string;
    songs: Song[];
}
