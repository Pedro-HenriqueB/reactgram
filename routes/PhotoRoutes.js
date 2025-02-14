import { Router } from "express";
import { photoInsertValidation } from "../middlewares/photoValidation.js";
import { authGuard } from "../middlewares/authGuard.js";
import { validate } from "../middlewares/handleValidation.js";
import { imageUpload } from "../middlewares/imageUpload.js";
import {
  deletePhoto,
  getAllPhotos,
  insertPhoto,
} from "../controllers/PhotoController.js";

const photoRoutes = Router();

// Routes
photoRoutes.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);
photoRoutes.delete("/:id", authGuard, deletePhoto);
photoRoutes.get("/", authGuard, getAllPhotos);

export { photoRoutes };
