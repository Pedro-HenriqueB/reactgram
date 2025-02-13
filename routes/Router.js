import express from "express";
const router = express();
import { userRoutes } from "./UserRoutes.js";
import { photoRoutes } from "./PhotoRoutes.js";

router.use("/api/users", userRoutes);
router.use("/api/photos", photoRoutes);

router.get("/", (req, res) => {
  res.send("API WORKING!");
});

export { router };
