import express from "express";
const router = express();
import { userRoutes } from "./UserRoutes.js";

router.use("/api/users", userRoutes);

router.get("/", (req, res) => {
  res.send("API WORKING!");
});

export { router };
