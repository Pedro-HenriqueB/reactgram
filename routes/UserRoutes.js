import { Router } from "express";
import { register } from "../controllers/UserController.js"; //Controller
import { validate } from "../middlewares/handleValidation.js"; // Middleware

// Routes
const userRoutes = Router();
userRoutes.post("/register", validate, register);
export { userRoutes };
