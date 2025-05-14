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
exports.getAllBookings = exports.createBooking = void 0;
const Booking_1 = __importDefault(require("../models/Booking"));
// Create a new booking
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
        });
        yield newBooking.save();
        res.status(201).json({ message: "Booking created successfully!" });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating booking", error });
    }
});
exports.createBooking = createBooking;
// Get all bookings for the admin dashboard
const getAllBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield Booking_1.default.find();
        res.status(200).json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching bookings", error });
    }
});
exports.getAllBookings = getAllBookings;
