import express from 'express';
import cors from 'cors';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', cors(), getUsers);
router.post('/', cors(), createUser);
router.get('/:id', cors(), getUser);
router.patch('/:id', cors(), updateUser);
router.delete('/:id', cors(), deleteUser);

export default router;
