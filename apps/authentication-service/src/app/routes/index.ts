import { Router } from 'express';
import {
  deleteUserById,
  getUserById,
  getUsers,
  createUser,
  updateUserById,
} from '../modules';

const router = Router();

router.get('/users', getUsers);
router.get('/user', getUserById);
router.post('/user', createUser);
router.patch('/user', updateUserById);
router.delete('/user', deleteUserById);

export default router;
