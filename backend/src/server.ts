import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookingRoutes";
import path from "path";
import adminRoutes from "./routes/adminRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);

// Serve React build files
app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://keshav:Keshav%401020@cluster0.4hka8yg.mongodb.net/";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
