import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

// Register user and sign in
const register = async (req, res) => {
  const { name, email, password } = req.body;
  // Check if user exists
  const user = await User.findOne({ email });
  if (user) {
    res.status(422).json({ errors: ["Por favor, utilize outro e-mail"] });
    return;
  }
  // Generate salce
  const salce = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salce);
  // Create user
  const newUser = await User.create({
    name,
    email,
    password: passwordHash, // Usar o valor de passwordHash com nome de password
  });
  // if user was created successfully, return the token
  if (!newUser) {
    res
      .status(422)
      .json({ errors: ["Houve um erro, por favor tente mais tarde."] });
    return;
  }

  return res.status(201).json({
    _id: newUser.id,
    token: generateToken(newUser.id),
  });
};

export { register };
