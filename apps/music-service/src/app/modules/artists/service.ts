import { Handler, Request, Response } from 'express';
import { Types } from 'mongoose';
import { ArtistMongo } from '../../models/artist';
import { SongMongo } from '../../models/song';

export const getArtists: Handler = async (req: Request, res: Response) => {
  const Artists = await ArtistMongo.find();
  return res.status(200).send(Artists);
};

export const getArtistById: Handler = async (req: Request, res: Response) => {
  const Artist = await ArtistMongo.findById(new Types.ObjectId(req.body._id));
  if (!Artist) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  return res.status(200).send(Artist);
};

export const createArtist: Handler = async (req: Request, res: Response) => {
  const tempArtist = new ArtistMongo(req.body);

  for (let i = 0; i < req.body.songs.length; i++) {
    const song = await SongMongo.findById(
      new Types.ObjectId(req.body.songs[i])
    );
    if (!song) {
      return res
        .status(404)
        .send({ error: `Song ${req.body.songs[i]} does not exists` });
    } else {
      tempArtist.songs[i] = await SongMongo.findById(
        new Types.ObjectId(req.body.songs[i])
      );
    }
  }

  const Artist = new ArtistMongo(tempArtist);

  try {
    await Artist.save();
  } catch (error) {
    console.log(error);
  }
  return res.status(201).send(Artist);
};

export const updateArtistById: Handler = async (
  req: Request,
  res: Response
) => {
  if (!(await ArtistMongo.findById(new Types.ObjectId(req.body._id)))) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  await ArtistMongo.findByIdAndUpdate(req.body._id, req.body);
  const Artist = await ArtistMongo.findById(req.body._id);
  return res.status(200).send(Artist);
};

export const deleteArtistById: Handler = async (
  req: Request,
  res: Response
) => {
  if (!(await ArtistMongo.findById(new Types.ObjectId(req.body._id)))) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  const Artist = await ArtistMongo.findByIdAndDelete(req.body._id);
  return res.status(200).send(Artist);
};
