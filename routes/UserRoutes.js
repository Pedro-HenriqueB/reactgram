import { Router } from "express";
import { login, register } from "../controllers/UserController.js"; //Controller
import { validate } from "../middlewares/handleValidation.js"; // Middlewares
import {
  loginValidation,
  userCreateValidation,
} from "../middlewares/userValidations.js";

// Routes
const userRoutes = Router();
userRoutes.post("/register", userCreateValidation(), validate, register);
userRoutes.post("/login", loginValidation(), validate, login);
export { userRoutes };
