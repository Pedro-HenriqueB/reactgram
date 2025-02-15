import { Router } from "express";
import {
  photoInsertValidation,
  photoUpdateValidation,
} from "../middlewares/photoValidation.js";
import { authGuard } from "../middlewares/authGuard.js";
import { validate } from "../middlewares/handleValidation.js";
import { imageUpload } from "../middlewares/imageUpload.js";
import {
  deletePhoto,
  getAllPhotos,
  getPhotoById,
  getUserPhotos,
  insertPhoto,
  updatePhoto,
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
photoRoutes.get("/user/:id", authGuard, getUserPhotos);
photoRoutes.get("/:id", authGuard, getPhotoById);
photoRoutes.put(
  "/:id",
  authGuard,
  photoUpdateValidation(),
  validate,
  updatePhoto
);
export { photoRoutes };
