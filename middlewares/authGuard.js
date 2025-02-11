import User from "../models/User.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // Bearer asdasdas5d4as5d4sa56d4as56d <- token structure
  const token = authHeader && authHeader.split(" ")[1]; //get token
  if (!token) return res.status(401).json({ errors: ["Acesso negado!"] });
  // check if token is valid
  try {
    const verified = jwt.verify(token, jwtSecret);
    req.user = await User.findById(verified.id).select("-password");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ errors: ["Token invalido!"] });
  }
};

export { authGuard };
