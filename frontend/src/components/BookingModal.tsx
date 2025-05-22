import React, { useState } from 'react';
import axios from 'axios';

interface BookingModalProps {
  trekName: string;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ trekName, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    persons: 1,
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const bookingData = {
        ...formData,
        trekName,
      };
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/bookings`, bookingData);
      alert(response.data.message || 'Booking created successfully!');
      setTimeout(() => {
        onClose(); // auto-close after success
      }, 1200);
    } catch (error) {
      console.error('Booking error:', error);
      alert('Failed to book. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-100 via-white to-green-100 bg-opacity-90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-slide-up">
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-7">Book Your Trek</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number/Watsapp Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <input
            type="number"
            name="persons"
            placeholder="No. of Persons"
            value={formData.persons}
            onChange={handleChange}
            min={1}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:scale-105 cursor-pointer  text-white font-semibold py-2 rounded-lg transition-transform duration-300 "
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
