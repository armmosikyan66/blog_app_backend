import UserModel from '../models/UserModel';
import {IUserData} from "../interfaces/UserDataProps";

class UserRepositories {
    model;

    constructor(UserModel: any) {
        this.model = UserModel;
    }

    create(userData: IUserData) {
        return this.model.create(userData)
    }
}

export default new UserRepositories(UserModel);