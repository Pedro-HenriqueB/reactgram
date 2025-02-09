import express from "express";
import path from "path";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes/Router.js";
import { conn } from "./config/db.js";

const app = express();
// config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// solve cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// upload directory
app.use("/uploads", express.static(path.join(import.meta.dirname, "uploads")));
// DB connection

// routes
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Runnning on port ${process.env.PORT}`);
});
