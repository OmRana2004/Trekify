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
  isConfirmed: boolean;
}

const AdminDashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [history, setHistory] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [confirmLoadingIds, setConfirmLoadingIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/bookings`);
        setBookings(response.data.filter((b: Booking) => !b.isConfirmed));
        setHistory(response.data.filter((b: Booking) => b.isConfirmed));
      } catch {
        setError('Failed to fetch bookings');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleConfirmBooking = async (id: string) => {
    setConfirmLoadingIds(prev => new Set(prev).add(id));
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/api/bookings/${id}/confirm`);
      setBookings(prev => {
        const confirmed = prev.find(b => b._id === id);
        if (confirmed) {
          setHistory(h => [...h, { ...confirmed, isConfirmed: true }]);
        }
        return prev.filter(b => b._id !== id);
      });
    } catch {
      alert('Failed to confirm booking');
    } finally {
      setConfirmLoadingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-sky-100 to-indigo-100">
        <div className="animate-spin border-4 border-t-transparent border-blue-500 rounded-full w-14 h-14"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 font-semibold">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] p-8 font-[Poppins]">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-800 tracking-wide drop-shadow-md animate-fade-in">
        Admin Dashboard
      </h2>

      <div className="text-center mb-8">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
        >
          {showHistory ? 'Hide Booking History' : 'See Booking History'}
        </button>
      </div>

      <div className="overflow-x-auto transition-all duration-500">
        {(showHistory ? history : bookings).length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No {showHistory ? 'history' : 'pending'} bookings.</p>
        ) : (
          <table className="min-w-full shadow-2xl rounded-lg overflow-hidden bg-white animate-fade-in">
            <thead
              className={`text-white ${
                showHistory
                  ? 'bg-gradient-to-r from-green-500 to-green-600'
                  : 'bg-gradient-to-r from-blue-500 to-blue-600'
              }`}
            >
              <tr>
                {['Trek', 'Name', 'Email', 'Phone', 'Persons', 'Date', 'Booked At', 'Message', 'Status'].map(
                  (heading, i) => (
                    <th key={i} className="py-4 px-6 text-left font-semibold tracking-wide">
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {(showHistory ? history : bookings).map((booking, _index) => (
                <tr
                  key={booking._id}
                  className="hover:bg-indigo-50 hover:scale-[1.01] transition-all duration-300 border-b"
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
                    {showHistory ? (
                      <span className="text-green-600 font-bold">Confirmed</span>
                    ) : (
                      <button
                        onClick={() => handleConfirmBooking(booking._id)}
                        disabled={confirmLoadingIds.has(booking._id)}
                        className={`px-4 py-2 rounded-lg text-white shadow-md transition duration-300 ${
                          confirmLoadingIds.has(booking._id)
                            ? 'bg-blue-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-105'
                        }`}
                      >
                        {confirmLoadingIds.has(booking._id) ? 'Confirming...' : 'Confirm'}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
