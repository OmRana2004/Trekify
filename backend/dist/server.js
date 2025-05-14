"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const bookingRoutes_1 = __importDefault(require("./routes/bookingRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
// Initialize environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Routes
app.use("/api/bookings", bookingRoutes_1.default);
// Connect to MongoDB
mongoose_1.default
    .connect(process.env.MONGODB_URI || "")
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error("MongoDB connection error: ", error));
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
