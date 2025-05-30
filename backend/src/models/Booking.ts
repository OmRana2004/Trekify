import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    trekName: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    persons: { type: Number, required: true },
    date: { type: String, required: true },
    message: { type: String },
    isConfirmed: { type: Boolean, default: false }, // ✅ New field
  },
  { timestamps: true } // ✅ Adds createdAt and updatedAt fields
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
