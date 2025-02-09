import { Router } from "express";
import { register } from "../controllers/UserController.js"; //Controller
import { validate } from "../middlewares/handleValidation.js"; // Middlewares
import { userCreateValidation } from "../middlewares/userValidations.js";

// Routes
const userRoutes = Router();
userRoutes.post("/register", userCreateValidation(), validate, register);
export { userRoutes };
