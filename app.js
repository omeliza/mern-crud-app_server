import express from "express";
// const express = require('express');
import mongoose from "mongoose";
// const mongoose = require('mongoose');
import bodyParser from "body-parser";
import cors from 'cors';
import 'dotenv/config';
import userRouter from './routes/users';
import fs from "fs";
import swaggerUi from "swagger-ui-express";
const swaggerFile = JSON.parse(fs.readFileSync("./swagger/output.json"));
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));


mongoose
  .connect(
    `mongodb+srv://${process.env.MD_USER}:${process.env.MD_PASSWORD}@cluster0.c0lqh.mongodb.net/usersData`,
    { useNewUrlParser: true }, {useUnifiedTopology: true}
  )
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log(e.message));

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}`));
//