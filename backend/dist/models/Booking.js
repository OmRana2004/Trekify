"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookingSchema = new mongoose_1.default.Schema({
    trekName: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    persons: { type: Number, required: true },
    date: { type: String, required: true },
    message: { type: String },
    isConfirmed: { type: Boolean, default: false }, // ✅ New field
}, { timestamps: true } // ✅ Adds createdAt and updatedAt fields
);
const Booking = mongoose_1.default.model("Booking", bookingSchema);
exports.default = Booking;
