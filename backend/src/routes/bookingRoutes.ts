import express from "express";
import {
  createBooking,
  getAllBookings,
  confirmBooking, // ✅ import confirmBooking
} from "../controllers/bookingController";

const router = express.Router();

// Create a new booking
router.post("/", createBooking); // POST /api/bookings

// Get all bookings
router.get("/", getAllBookings); // GET /api/bookings

// Confirm a booking and send WhatsApp
router.patch("/:id/confirm", confirmBooking); // PATCH /api/bookings/:id/confirm

export default router;
