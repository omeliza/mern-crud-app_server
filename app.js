const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const userRouter = require('./routes/users');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Users CRUD API');
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MD_USER}:${process.env.MD_PASSWORD}@cluster0.c0lqh.mongodb.net/usersData`,
    { useNewUrlParser: true },
    { useUnifiedTopology: true },
  )
  .then(() => console.log('mongodb connected'))
  .catch(e => console.log(e.message));

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}`));
