// import express from "express";
// import mongo from 'mongodb';
// const mongo = require("mongodb");
import User from '../models/user';
import  mongoose  from 'mongoose';
// const router = express.Router();

export const getUsers = async (req, res) => {
  // #swagger.description = 'Get all users'
  try {
    const users = await User.find();
    //#swagger.send={
    //description = "array of all users";
    res.send(users);
    //schema: {$ref: "#/defnitions/Users"}
    //}
  } catch (e) {
    res.send(e.message);
  }
}

// router.get('/', 
// });

export const createUser = async (req, res) => {
  // #swagger.description = 'Create new user'
  // #swagger.parameters['text'] = {
  // in: 'body',
  // desciption: 'New user text',
  // type: 'object',
  // required: true,
  // schema: {$ref: "#/defnitions/Text"}
  // }
  // #swagger.send = {
  // description: 'Array of new users',
  // schema:{$ref: '#/definitions/Users'}
  //}
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
  // #swagger.description = 'Get user by ID'
    
  // #swagger.parameters['id'] = {
  // description: 'Existing user ID',
  // type: 'string',
  // required: true,
  // }
  // #swagger.send = {
  // description: 'User with provided id',
  // schema: {$ref: "#/definitions/User"}
  //}
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    // if (!user) res.status(404).send("The user with the given id was not found");
    res.json(user);
  } catch (e) {
    res.send(e.message);
  }
};

export const updateUser = async(req, res) => {
  const {id} = req.body;
  const { email, first_name, last_name} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    const updatedUser = { email, first_name, last_name, _id: id };

    await postUser.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
    // #swagger.description= 'Remove existing user'
    // #swagger.parameters['id'] = {
    // description: 'Existing user id',
    // type: 'string',
    // required: true
    //}
    // #swagger.send = {
    // description: 'Array of new users or empty array',
    // schema: {$ref: '#/definitions/Users'}
    // }
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No user with id: ${id}`);
    }
    await User.findByIdAndRemove(id);

    res.json({message: 'User deleted successfully'});

    // try {
    //     let user = await User.findById(req.params.id)
    //     let u = await user.remove();
    //     res.send(u);
    // } catch (e) {
    //     res.send(e.message);
    // }
};





// app.delete("/users/:id", (req, res) => {
//   const user = users.find((u) => u.id === parseInt(req.params.id));
//   if (!user)
//     return res.status(404).send("The user with the given ID was not found");

//   const index = users.indexOf(user);
//   users.splice(index, 1);
//   res.send(user);
// });

