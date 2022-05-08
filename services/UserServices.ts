import UserModel from '../models/UserModel';
import UserRepositories from "../repositories/UserRepositories";
import {IUserDataProps} from "../interfaces/UserDataProps";
const { sendMail } = require('../services/emailService');
const generateMD5 = require('../utils/generateHash');

class UserServices {
    async createUserAndSendEmail({email, username, fullName, password}: IUserDataProps) {

        const userExists = await UserModel.findOne({$or: [{email}, {username}]});

        if (userExists) {
            throw new Error(`User with username: ${username} or email: ${email} already exists!`);
        }


        const confirmHash = generateMD5(process.env.SECRET_KEY || Math.random().toString(16).slice(2));

        const userData = {
            email,
            fullName,
            username,
            password,
            confirmHash,
        }

        const [user] = await Promise.all([
            UserRepositories.create(userData),
            sendMail({
                emailFrom: 'armanmosikyan@gmail.com',
                emailTo: email,
                subject: 'Подтверждение почты Twitter Clone Tutorial',
                html: `Для того, чтобы подтвердить почту, перейдите <a href="http://localhost:3000/user/activate/${confirmHash}">по этой ссылке</a>`,
            })
        ]);

        return user;
    }
}

export default new UserServices();