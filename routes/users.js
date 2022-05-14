const {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} = require('../controllers/usersController');

const express = require('express');

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;