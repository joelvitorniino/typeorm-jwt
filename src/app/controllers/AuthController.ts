import { Request, Response } from "express";
import { AppDataSource } from "../db/data-source";
import { User } from "../models/User";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from "dotenv";

config();

class AuthController {
    async authenticate(request: Request, response: Response) {
        const repository = AppDataSource.getRepository(User);
        const { username, password } = request.body;

        const user = await repository.findOne({ where: { username } });

        if(!user) {
            return response.sendStatus(401);
        };

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) {
            return response.sendStatus(401);
        };

        const token = jwt.sign({ id: user.id }, process.env.TOKEN, { expiresIn: '1d' });

        delete user.password;

        return response.json({
            user,
            token
        });
    };
};

export default new AuthController();