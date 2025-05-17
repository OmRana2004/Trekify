import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Booking {
  _id: string;
  trekName: string;
  fullName: string;
  email: string;
  phone: string;
  persons: number;
  date: string;         // Trek date
  message: string;
  createdAt: string;    // Booking creation datetime
  isConfirmed: boolean;
}

const AdminDashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [history, setHistory] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings');
        setBookings(response.data.filter((b: Booking) => !b.isConfirmed));
        setHistory(response.data.filter((b: Booking) => b.isConfirmed));
        setLoading(false);
      } catch {
        setError('Failed to fetch bookings');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleConfirmBooking = async (id: string) => {
    try {
      await axios.patch(`http://localhost:5000/api/bookings/${id}/confirm`);
      setBookings((prev) => prev.filter((booking) => booking._id !== id));
      const confirmedBooking = bookings.find((b) => b._id === id);
      if (confirmedBooking) {
        setHistory((prevHistory) => [...prevHistory, { ...confirmedBooking, isConfirmed: true }]);
      }
      setShowHistory(true);
    } catch {
      alert('Failed to confirm booking. Please try again.');
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

      <div className="mb-6 text-center">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-semibold"
        >
          {showHistory ? 'Hide Booking History' : 'See Booking History'}
        </button>
      </div>

      {!showHistory ? (
        <>
          {bookings.length === 0 ? (
            <div className="text-center text-lg text-gray-500">No pending bookings.</div>
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
                    <th className="py-4 px-6 text-left font-medium">Booking Time</th> {/* New */}
                    <th className="py-4 px-6 text-left font-medium">Message</th>
                    <th className="py-4 px-6 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr
                      key={booking._id}
                      className="transition-all duration-300 hover:shadow-lg hover:bg-indigo-50 hover:scale-[1.01]"
                    >
                      <td className="py-4 px-6 text-gray-700">{booking.trekName}</td>
                      <td className="py-4 px-6 text-gray-700">{booking.fullName}</td>
                      <td className="py-4 px-6 text-gray-700">{booking.email}</td>
                      <td className="py-4 px-6 text-gray-700">{booking.phone}</td>
                      <td className="py-4 px-6 text-gray-700">{booking.persons}</td>
                      <td className="py-4 px-6 text-gray-700">{booking.date}</td>
                      <td className="py-4 px-6 text-gray-700">
                        {new Date(booking.createdAt).toLocaleString()}
                      </td>
                      <td className="py-4 px-6 text-gray-700">{booking.message}</td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleConfirmBooking(booking._id)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                        >
                          Confirm
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : (
        <>
          {history.length === 0 ? (
            <div className="text-center text-lg text-gray-500">No booking history yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-lg rounded-lg border-collapse">
                <thead className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-medium">Trek</th>
                    <th className="py-4 px-6 text-left font-medium">Name</th>
                    <th className="py-4 px-6 text-left font-medium">Email</th>
                    <th className="py-4 px-6 text-left font-medium">Phone</th>
                    <th className="py-4 px-6 text-left font-medium">Persons</th>
                    <th className="py-4 px-6 text-left font-medium">Date</th>
                    <th className="py-4 px-6 text-left font-medium">Booking Time</th> {/* New */}
                    <th className="py-4 px-6 text-left font-medium">Message</th>
                    <th className="py-4 px-6 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((booking) => (
                    <tr
                      key={booking._id}
                      className="transition-all duration-300 hover:shadow-lg hover:bg-green-50 hover:scale-[1.01]"
                    >
                      <td className="py-4 px-6 text-gray-700">{booking.trekName}</td>
                      <td className="py-4 px-6 text-gray-700">{booking.fullName}</td>
                      <td className="py-4 px-6 text-gray-700">{booking.email}</td>
                      <td className="py-4 px-6 text-gray-700">{booking.phone}</td>
                      <td className="py-4 px-6 text-gray-700">{booking.persons}</td>
                      <td className="py-4 px-6 text-gray-700">{booking.date}</td>
                      <td className="py-4 px-6 text-gray-700">
                        {new Date(booking.createdAt).toLocaleString()}
                      </td>
                      <td className="py-4 px-6 text-gray-700">{booking.message}</td>
                      <td className="py-4 px-6 text-green-600 font-semibold">Confirmed</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
