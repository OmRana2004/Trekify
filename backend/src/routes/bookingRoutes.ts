import express from "express";
import { createBooking, getAllBookings } from "../controllers/bookingController";

const router = express.Router();

router.post("/", createBooking);      // /api/bookings (POST)
router.get("/", getAllBookings);      // /api/bookings (GET)

export default router;
