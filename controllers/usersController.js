import User from '../models/user.js';
import  mongoose  from 'mongoose';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (e) {
    res.send(e.message);
  }
}



export const createUser = async (req, res) => {
  const {first_name, last_name, email, photo} = req.body;
  const newUser = new User({first_name, last_name, email});
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error){
    res.status(409).json({message: error.message});
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (e) {
    res.send(e.message);
  }
};

export const updateUser = async(req, res) => {
  const {id} = req.params;
  const {  first_name, last_name, email} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    const updatedUser = { email, first_name, last_name, _id: id };

    await User.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No user with id: ${id}`);
    }
    await User.findByIdAndRemove(id);

    res.status(201).json({message: 'User deleted successfully'});
};





