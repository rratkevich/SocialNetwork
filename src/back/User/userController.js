const Service = require('./UserService');
const { registerValidation } = require('./registerValidation');
const service = new Service();

class UserController {

    async getAllUsers(req, res) {
        const result = await service.getAllUsers();
        res.send(result);
    }
    async registerUser(req, res) {
        const {error} = registerValidation(req.body);
        if (error) return res.status(400).send(error);

        try {
            res.send(await service.registerUser(req.body));
        } catch (err) {
            res.status(404).send(err.message);
        }
    }
    // async loginUser(req, res) {
    //     const user = await service.loginUser(req.body);
    //     if (!user) return res.status(400).send("No such email");
    //
    //     // try{
    //     //     res.send( await service.loginUser(req.body));
    //     // } catch (err) {
    //     //     res.status(404).send(err.message);
    //     // }
    // }
}

module.exports = UserController;
