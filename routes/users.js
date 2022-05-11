import express from 'express';
import cors from 'cors';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
