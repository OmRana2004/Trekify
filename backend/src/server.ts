import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookingRoutes";
import path from "path";
import adminRoutes from "./routes/adminRoutes";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI in environment variables");
}

const normalizeOrigin = (origin: string) => origin.replace(/\/$/, "");

const allowedOrigins = [
  normalizeOrigin(process.env.FRONTEND_URL || "https://trekify-full-stack-frontend.vercel.app"),
  "http://localhost:5173",
];

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Allow non-browser requests

    const normalizedOrigin = normalizeOrigin(origin);
    if (allowedOrigins.includes(normalizedOrigin)) {
      callback(null, true);
    } else {
      console.warn(`CORS blocked: Origin ${origin} not allowed`);
      callback(new Error(`CORS policy: Origin ${origin} not allowed`));
    }
  },
  credentials: true,
}));

app.use(express.json());

app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

mongoose.connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
