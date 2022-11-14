import { Router } from "express";
import AuthController from "./controllers/AuthController";
import UserController from "./controllers/UserController";
import authMiddleware from "./middleware/authMiddleware";

const router = Router();

router.post('/api/v1/users', UserController.store);
router.post('/api/v1/auth', AuthController.authenticate);
router.get('/api/v1/users', authMiddleware, UserController.index);

export default router;