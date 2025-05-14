import { Request, Response } from "express";
import Booking from "../models/Booking";

// Create a new booking
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
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
};

// Get all bookings for the admin dashboard
export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};
