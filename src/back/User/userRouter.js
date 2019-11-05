const express = require('express');
const router = express.Router();
const authentication = require('./login/verifyToken');
const login = require('./login/login');
const register = require('./registration/register');
const UserController = require('./UserController');
const userController = new UserController();

function UserRouter() {
    router.route('/registration')
        .get(userController.getAllUsers.bind(UserController))
        .post(register);
    router.route('/login')
        .post(login);
    router.route('/delete')
        .delete(authentication, userController.deleteUser.bind(UserController));
    return router;
}

module.exports = UserRouter;
