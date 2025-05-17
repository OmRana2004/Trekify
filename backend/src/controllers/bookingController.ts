import { Request, Response } from "express";
import Booking from "../models/Booking";
import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

// Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER!; // e.g., 'whatsapp:+14155238886'
const client = twilio(accountSid, authToken);

// Helper to format phone number into WhatsApp-compatible E.164 format
function formatWhatsappNumber(phone: string): string {
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
export const createBooking = async (req: Request, res: Response) => {
  try {
    const { trekName, fullName, email, phone, persons, date, message } = req.body;

    const newBooking = new Booking({
      trekName,
      fullName,
      email,
      phone,
      persons,
      date,
      message,
      isConfirmed: false,
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking created successfully!" });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Error creating booking", error });
  }
};

// ✅ Get all bookings (for admin dashboard)
export const getAllBookings = async (_req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

// ✅ Confirm booking and send custom WhatsApp message
export const confirmBooking = async (req: Request, res: Response) => {
  try {
    const bookingId = req.params.id;
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Mark booking as confirmed
    booking.isConfirmed = true;
    await booking.save();

    // Create custom WhatsApp message
    const messageBody = `Hello ${booking.fullName},\n\nYour booking for "${booking.trekName}" on ${booking.date} is confirmed! 🎉\n\nThank you for choosing Trekify — we’re thrilled to be part of your next adventure. Our team will connect with you shortly to share further details.\n\nGet ready to explore the mountains and make unforgettable memories! 🏔️✨`;

    // Send WhatsApp message
    await client.messages.create({
      from: whatsappNumber, // e.g. 'whatsapp:+14155238886'
      to: formatWhatsappNumber(booking.phone), // formatted to E.164
      body: messageBody,
    });

    res.status(200).json({ message: "Booking confirmed and WhatsApp sent", booking });
  } catch (error) {
    console.error("Error confirming booking:", error);
    res.status(500).json({ message: "Failed to confirm booking", error });
  }
};
