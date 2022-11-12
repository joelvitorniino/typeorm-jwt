import { Request, Response } from "express";
import { AppDataSource } from "../db/data-source";
import { User } from "../models/User";

class UserController {
    index(request: Request, response: Response) {
        return response.send({ id: request.id });
    };

    async store(request: Request, response: Response) {
        const repository = AppDataSource.getRepository(User);
        const { username, password } = request.body;

        const userExits = await repository.findOne({ where: { username } });

        if(userExits) {
            return response.sendStatus(409);
        };

        const user = repository.create({ username, password });
        await repository.save(user);

        return response.json(user);
    };
};

export default new UserController();