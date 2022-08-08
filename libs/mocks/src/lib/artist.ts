import { Artist } from '@apoloplay/definitions';
import { Types } from 'mongoose';
import { AdeleSongs, EminemSongs, ShakiraSongs } from './song';

export const ArtirtMock: Artist = {
  _id: new Types.ObjectId(),
  name: 'Stefani Joanne Angelina Germanotta',
  alias: 'Lady Gaga',
  nationality: 'Estadounidense',
  image:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lady-gaga-cumpleanos-1585388285.jpg?crop=0.715xw:1.00xh;0.143xw,0&resize=640:*',
  songs: [],
};

export const ArtistsArray: Artist[] = [
  {
    _id: new Types.ObjectId(),
    name: 'Shakira Isabel Mebarak Ripoll',
    alias: 'Shakira',
    nationality: 'Colombiana',
    image:
      'https://depor.com/resizer/HQgjD5K6SDwjYkurI7FLcucvR00=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/H42EXSOSQVCQ7HWEAIFVJNKH2Y.jpg',
    songs: ShakiraSongs,
  },
  {
    _id: new Types.ObjectId(),
    name: 'Adele Laurie Blue Adkins',
    alias: 'Adele',
    nationality: 'Britanica',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Adele_2016.jpg/640px-Adele_2016.jpg',
    songs: AdeleSongs,
  },
  {
    _id: new Types.ObjectId(),
    name: 'Marshall Bruce Mathers III',
    alias: 'Eminem',
    nationality: 'Americano',
    image: 'https://indiehoy.com/wp-content/uploads/2021/03/Eminem.jpg',
    songs: EminemSongs,
  },
];
