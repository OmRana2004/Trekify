import dotenv from "dotenv";
dotenv.config();

import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const { ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET } = process.env;

if (!ADMIN_USERNAME || !ADMIN_PASSWORD || !JWT_SECRET) {
  throw new Error("Missing environment variables (ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET)");
}

export const loginAdmin = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid username or password" });
};
