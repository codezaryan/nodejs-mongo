const express = require('express');
const {
    handleGetAllUsers,
    handleCreateUser,
    handleGetUserById,
    handleDeleteUserById,
    handleUpdateUserById
} = require('../controllers/user');

const router = express.Router();

// Routes for /users
router.route('/')
    .get(handleGetAllUsers)
    .post(handleCreateUser);

// Routes for /users/:id (combined into a single route definition)
router.route('/:id')
    .get(handleGetUserById)
    .delete(handleDeleteUserById)
    .patch(handleUpdateUserById);

module.exports = router;