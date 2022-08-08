import { Router } from 'express';
import {
  getsongs,
  getsongById,
  createsong,
  updatesongById,
  deletesongById,
  deleteArtistById,
  getArtistById,
  getArtists,
  updateArtistById,
  createArtist,
} from '../modules/index';

const router = Router();

router.get('/songs', getsongs);
router.get('/song', getsongById);
router.post('/song', createsong);
router.patch('/song', updatesongById);
router.delete('/song', deletesongById);

router.get('/artists', getArtists);
router.get('/artist', getArtistById);
router.post('/artist', createArtist);
router.patch('/artist', updateArtistById);
router.delete('/artist', deleteArtistById);

export default router;
