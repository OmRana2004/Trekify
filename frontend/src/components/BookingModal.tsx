import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { FaUser, FaEnvelope, FaPhone, FaUsers, FaCalendarAlt, FaCommentDots } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

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

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const bookingData = { ...formData, trekName };
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/bookings`, bookingData);
      toast.success(response.data.message || 'Booking successful!');
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Failed to book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderInput = (Icon: React.ElementType, props: any) => (
    <div className="relative">
      <Icon className="absolute left-3 top-3 text-gray-400" />
      <input
        {...props}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-100 via-white to-green-100 bg-opacity-90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-auto">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md p-5 sm:p-6 relative animate-slide-up border border-gray-200">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-500 mb-6">Book Your Trek</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {renderInput(FaUser, {
            type: 'text',
            name: 'fullName',
            placeholder: 'Full Name',
            value: formData.fullName,
            onChange: handleChange,
            required: true,
          })}
          {renderInput(FaEnvelope, {
            type: 'email',
            name: 'email',
            placeholder: 'Email',
            value: formData.email,
            onChange: handleChange,
            required: true,
          })}
          {renderInput(FaPhone, {
            type: 'tel',
            name: 'phone',
            placeholder: 'Phone/WhatsApp Number',
            value: formData.phone,
            onChange: handleChange,
            required: true,
          })}
          {renderInput(FaUsers, {
            type: 'number',
            name: 'persons',
            placeholder: 'No. of Persons',
            min: 1,
            value: formData.persons,
            onChange: handleChange,
            required: true,
          })}
          {renderInput(FaCalendarAlt, {
            type: 'date',
            name: 'date',
            value: formData.date,
            onChange: handleChange,
            required: true,
          })}
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
            <textarea
              name="message"
              placeholder="Message (optional)"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold py-2 rounded-lg transition duration-300 hover:scale-105 cursor-pointer ${
              loading ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              'Confirm Booking'
            )}
          </button>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={2500} />
    </div>
  );
};

export default BookingModal;
