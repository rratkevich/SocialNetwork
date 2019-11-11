const User = require('../User/userSchema');

class UserService {
    async getAllUsers() {
        return await User.find();
    }

    async deleteUser(id) {
        const deleteUser = await User.deleteOne({_id: id});
        return deleteUser;
    }
}

module.exports = UserService;
