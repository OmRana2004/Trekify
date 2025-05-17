"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmBooking = exports.getAllBookings = exports.createBooking = void 0;
const Booking_1 = __importDefault(require("../models/Booking"));
const twilio_1 = __importDefault(require("twilio"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER; // e.g., 'whatsapp:+14155238886'
const client = (0, twilio_1.default)(accountSid, authToken);
// Helper to format phone number into WhatsApp-compatible E.164 format
function formatWhatsappNumber(phone) {
    let formatted = phone.trim().replace(/\D/g, ""); // remove non-digits
    while (formatted.startsWith("0")) {
        formatted = formatted.substring(1);
    }
    if (!formatted.startsWith("91")) {
        formatted = "91" + formatted; // default to India
    }
    return `whatsapp:+${formatted}`;
}
// ✅ Create new booking
const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { trekName, fullName, email, phone, persons, date, message } = req.body;
        const newBooking = new Booking_1.default({
            trekName,
            fullName,
            email,
            phone,
            persons,
            date,
            message,
            isConfirmed: false,
        });
        yield newBooking.save();
        res.status(201).json({ message: "Booking created successfully!" });
    }
    catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ message: "Error creating booking", error });
    }
});
exports.createBooking = createBooking;
// ✅ Get all bookings (for admin dashboard)
const getAllBookings = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield Booking_1.default.find().sort({ createdAt: -1 });
        res.status(200).json(bookings);
    }
    catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ message: "Error fetching bookings", error });
    }
});
exports.getAllBookings = getAllBookings;
// ✅ Confirm booking and send custom WhatsApp message
const confirmBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingId = req.params.id;
        const booking = yield Booking_1.default.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        // Mark booking as confirmed
        booking.isConfirmed = true;
        yield booking.save();
        // Create custom WhatsApp message
        const messageBody = `Hello ${booking.fullName},\n\nYour booking for "${booking.trekName}" on ${booking.date} is confirmed! 🎉\n\nThank you for choosing Trekify — we’re thrilled to be part of your next adventure. Our team will connect with you shortly to share further details.\n\nGet ready to explore the mountains and make unforgettable memories! 🏔️✨`;
        // Send WhatsApp message
        yield client.messages.create({
            from: whatsappNumber, // e.g. 'whatsapp:+14155238886'
            to: formatWhatsappNumber(booking.phone), // formatted to E.164
            body: messageBody,
        });
        res.status(200).json({ message: "Booking confirmed and WhatsApp sent", booking });
    }
    catch (error) {
        console.error("Error confirming booking:", error);
        res.status(500).json({ message: "Failed to confirm booking", error });
    }
});
exports.confirmBooking = confirmBooking;
