// const mongoose = require("mongoose");
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
