import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Booking {
  _id: string;
  trekName: string;
  fullName: string;
  email: string;
  phone: string;
  persons: number;
  date: string;
  message: string;
  createdAt: string;
  isConfirmed: boolean; // ✅ Added field
}

const AdminDashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings');
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch bookings');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleConfirmBooking = async (id: string) => {
    try {
      await axios.patch(`http://localhost:5000/api/bookings/${id}/confirm`);
      // Update local state after confirming
      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === id ? { ...booking, isConfirmed: true } : booking
        )
      );
    } catch (err) {
      console.error('Failed to confirm booking', err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin border-t-4 border-blue-600 w-16 h-16 border-solid rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="p-8 bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300 rounded-xl shadow-2xl max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">Admin Dashboard</h2>
      {bookings.length === 0 ? (
        <div className="text-center text-lg text-gray-500">No bookings yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-lg border-collapse">
            <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <tr>
                <th className="py-4 px-6 text-left font-medium">Trek</th>
                <th className="py-4 px-6 text-left font-medium">Name</th>
                <th className="py-4 px-6 text-left font-medium">Email</th>
                <th className="py-4 px-6 text-left font-medium">Phone</th>
                <th className="py-4 px-6 text-left font-medium">Persons</th>
                <th className="py-4 px-6 text-left font-medium">Date</th>
                <th className="py-4 px-6 text-left font-medium">Message</th>
                <th className="py-4 px-6 text-left font-medium">Status</th> {/* ✅ New column */}
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="transition-all duration-300 hover:shadow-lg hover:bg-indigo-50 hover:scale-105"
                >
                  <td className="py-4 px-6 text-gray-700">{booking.trekName}</td>
                  <td className="py-4 px-6 text-gray-700">{booking.fullName}</td>
                  <td className="py-4 px-6 text-gray-700">{booking.email}</td>
                  <td className="py-4 px-6 text-gray-700">{booking.phone}</td>
                  <td className="py-4 px-6 text-gray-700">{booking.persons}</td>
                  <td className="py-4 px-6 text-gray-700">{booking.date}</td>
                  <td className="py-4 px-6 text-gray-700">{booking.message}</td>
                  <td className="py-4 px-6">
                    {booking.isConfirmed ? (
                      <span className="text-green-600 font-semibold">Confirmed</span>
                    ) : (
                      <button
                        onClick={() => handleConfirmBooking(booking._id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                      >
                        Confirm
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
