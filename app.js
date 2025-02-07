import express from "express";
import path from "path";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes/Router.js";

const app = express();
// config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Runnning on port ${process.env.PORT}`);
});