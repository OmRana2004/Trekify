import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookingRoutes";
import path from "path";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);

// ✅ Static files and React SPA route handler
app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
