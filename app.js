const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const userRouter = require('./routes/users');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Users API',
      version: '1.0.0',
      description: 'Express Users API',
    },
    servers: [
      {
        url: 'http://localhost:9000/',
      },
    ],
  },
  apis: ['./app.js', './routes/users.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(cors());
app.use('/users', userRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *  get:
 *    summary: This api is used to check if get method is working
 *    description: This api is used to check if get method is working
 *    responses:
 *      200:
 *        description: To test Get method
 */
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
