import { validationResult } from "express-validator";

import UserModel from '../models/UserModel';
import UserServices from "../services/UserServices";

class UserController {
    async getUsers(_: any, res: any): Promise<void> {
        try {
            const users = await UserModel.find({}).exec();

            res.json({status: 'success', data: users});

        } catch (err) {
            res.json({status: 'error', message: err});
        }
    }

    async create(req: any, res: any): Promise<void> {
        try {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
               return res.status(400).json({status: 'error', message: errors.array()});
            }

            const user = await UserServices.createUserAndSendEmail(req.body);

            res.json({status: "success", data: user});
        } catch (err: any) {
            res.json({status: 'error', message: err.message});
        }
    }
}

export default new UserController();