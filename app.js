import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import 'dotenv/config';
import userRouter from './routes/users.js';
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/users", userRouter);


mongoose
  .connect(
    `mongodb+srv://${process.env.MD_USER}:${process.env.MD_PASSWORD}@cluster0.c0lqh.mongodb.net/usersData`,
    { useNewUrlParser: true }, {useUnifiedTopology: true}
  )
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log(e.message));

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}`));