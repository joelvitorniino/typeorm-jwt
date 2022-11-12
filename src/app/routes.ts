import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

router.post('/api/v1/users', UserController.store);

export default router;