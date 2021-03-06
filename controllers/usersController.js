const mongoose = require('mongoose');
const User = require('../models/user');
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    const newUser = new User({ first_name, last_name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (e) {
    res.status(409).json({ error: e.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, first_name, last_name } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: `No user with id: ${id}` });
    }
    const updatedUser = { email, first_name, last_name, _id: id };

    const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });
    if (user) {
      return res.status(200).json(updatedUser);
    }
    return res.status(404).json({ error: 'User with such id was not found' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: `No user with id: ${id}` });
    }
    await User.findByIdAndRemove(id);

    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (e) {
    res.json({ error: e.message });
  }
};
