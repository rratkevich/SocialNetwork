const User = require('./UserSchema');
const bcrypt = require('bcrypt');


class UserService {
    async getAllUsers() {
        return await User.find();
    }
    async registerUser({ firstName, lastName, password, email }) {

        const newUser = new User({
            firstName: firstName,
            lastName: lastName,
            password: await bcrypt.hash(password, 10),
            email: email
        });
        await newUser.save();

        return newUser;

    }
    // async loginUser({email, password}) {
    //     return await User.findOne({
    //         email: email,
    //     });
    //
    //     }


}
module.exports = UserService;
