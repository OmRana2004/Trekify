"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingController_1 = require("../controllers/bookingController");
const router = express_1.default.Router();
// Create a new booking
router.post("/", bookingController_1.createBooking); // POST /api/bookings
// Get all bookings
router.get("/", bookingController_1.getAllBookings); // GET /api/bookings
// Confirm a booking and send WhatsApp
router.patch("/:id/confirm", bookingController_1.confirmBooking); // PATCH /api/bookings/:id/confirm
exports.default = router;
