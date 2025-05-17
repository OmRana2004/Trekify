"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAdmin = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET } = process.env;
if (!ADMIN_USERNAME || !ADMIN_PASSWORD || !JWT_SECRET) {
    throw new Error("Missing environment variables (ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET)");
}
const loginAdmin = (req, res) => {
    const { username, password } = req.body;
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        const token = jsonwebtoken_1.default.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "1h" });
        return res.json({ token });
    }
    res.status(401).json({ message: "Invalid username or password" });
};
exports.loginAdmin = loginAdmin;
