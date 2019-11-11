const Service = require('./UserService');

const service = new Service();

class UserController {

    async getAllUsers(req, res) {
        const result = await service.getAllUsers();
        res.send(result);
    }

    async deleteUser(req, res) {
        try {
            res.send(await service.deleteUser(req.body));
        } catch (err) {
            res.status(404).send(err.message);
        }
    }

}

module.exports = UserController;
