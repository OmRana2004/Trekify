"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error("Missing JWT_SECRET in environment variables");
}
const verifyAdmin = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token)
        return res.status(401).json({ message: "Unauthorized" });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        if (decoded.role !== "admin") {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    }
    catch (_b) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
exports.verifyAdmin = verifyAdmin;
