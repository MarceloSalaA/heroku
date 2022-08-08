import { Handler, Request, Response } from 'express';
import { Types } from 'mongoose';
import { SongMongo } from '../../models/song';

export const getsongs: Handler = async (req: Request, res: Response) => {
  const songs = await SongMongo.find();
  return res.status(200).send(songs);
};

export const getsongById: Handler = async (req: Request, res: Response) => {
  const song = await SongMongo.findById(new Types.ObjectId(req.body._id));
  if (!song) {
    return res.status(404).send({ error: 'Id does not exists' });
  }

  return res.status(200).send(song);
};

export const createsong: Handler = async (req: Request, res: Response) => {
  const song = new SongMongo(req.body);
  await song.save();

  return res.status(201).send(song);
};

export const updatesongById: Handler = async (req: Request, res: Response) => {
  if (!(await SongMongo.findById(new Types.ObjectId(req.body._id)))) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  await SongMongo.findByIdAndUpdate(req.body._id, req.body);
  const song = await SongMongo.findById(req.body._id);
  return res.status(200).send(song);
};

export const deletesongById: Handler = async (req: Request, res: Response) => {
  if (!(await SongMongo.findById(new Types.ObjectId(req.body._id)))) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  const song = await SongMongo.findByIdAndDelete(req.body._id);
  return res.status(200).send(song);
};
