const express = require('express');
const router = express.Router();

const UserController = require('./UserController');
const userController = new UserController();

function UserRouter() {
    router.route('/registration')
        .get(userController.getAllUsers.bind(UserController))
        .post(userController.registerUser.bind(UserController));
        // .post('/login', userController.loginUser.bind(UserController));
    router.route('/login')
        .get(userController.getAllUsers.bind(UserController));
    return router;
}

module.exports = UserRouter;
