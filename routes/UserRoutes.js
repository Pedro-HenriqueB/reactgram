import { Router } from "express";
import {
  getCurrentUser,
  login,
  register,
} from "../controllers/UserController.js"; //Controller
import { validate } from "../middlewares/handleValidation.js"; // Middlewares
import {
  loginValidation,
  userCreateValidation,
} from "../middlewares/userValidations.js";
import { authGuard } from "../middlewares/authGuard.js";

// Routes
const userRoutes = Router();
userRoutes.post("/register", userCreateValidation(), validate, register);
userRoutes.post("/login", loginValidation(), validate, login);
userRoutes.get("/profile", authGuard, getCurrentUser);
export { userRoutes };
