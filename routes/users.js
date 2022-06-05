const express = require('express');
const {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} = require('../controllers/usersController');

const router = express.Router();
/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - first_name
 *          - last_name
 *        properties:
 *          email:
 *            type: string
 *          first_name:
 *            type: string
 *          last_name:
 *            type: string
 *        example:
 *          email: michael.lawson@reqres.in
 *          first_name: Michael
 *          last_name: Lawson
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @swagger
 * /users:
 *  get:
 *    summary: To get all users from Database
 *    description: This api is used to fetch data from Database
 *    responses:
 *      200:
 *        description: This api is used to fetch data from Database
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/User'
 */
router.get('/', getUsers);

/**
 * @swagger
 * /users:
 *  post:
 *    summary: Create new user
 *    description: This api is used to create new user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/User'
 *    responses:
 *      201:
 *        description: Successfully added new user
 *      409:
 *        description: Conflict
 */

router.post('/', createUser);

/**
 * @swagger
 * /users/{id}:
 *  patch:
 *    summary: Update user by id
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/User'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/User'
 *      404:
 *        description: The user was not found
 */

router.patch('/:id', updateUser);

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    summary: Remove user
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: user id
 *    responses:
 *      200:
 *        description: The user was removed
 *      404:
 *        description: The user was not found
 */

router.delete('/:id', deleteUser);

module.exports = router;
