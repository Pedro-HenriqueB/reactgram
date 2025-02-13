import { Router } from "express";
import {
  getCurrentUser,
  getUserById,
  login,
  register,
  update,
} from "../controllers/UserController.js"; //Controller
import { validate } from "../middlewares/handleValidation.js"; // Middlewares
import {
  loginValidation,
  userCreateValidation,
  userUpdateValidation,
} from "../middlewares/userValidations.js";
import { authGuard } from "../middlewares/authGuard.js";
import { imageUpload } from "../middlewares/imageUpload.js";

// Routes
const userRoutes = Router();
userRoutes.post("/register", userCreateValidation(), validate, register);
userRoutes.post("/login", loginValidation(), validate, login);
userRoutes.get("/profile", authGuard, getCurrentUser);
userRoutes.put(
  "/",
  authGuard,
  userUpdateValidation(),
  validate,
  imageUpload.single("profileImage"),
  update
);
userRoutes.get("/:id", getUserById);
export { userRoutes };
