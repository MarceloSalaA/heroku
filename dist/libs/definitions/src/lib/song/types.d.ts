import { Types } from 'mongoose';
export interface Song {
    _id: Types.ObjectId;
    image: string;
    name: string;
    publish_year: number;
    url?: string;
}
export declare class Song implements Song {
    constructor(_id: Types.ObjectId, image: string, name: string, publish_year: number, url?: string);
}
