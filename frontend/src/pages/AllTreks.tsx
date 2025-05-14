// src/pages/AllTreks.tsx
import { Link } from "react-router-dom";
import { treks } from "../data/treks"; // Import your trek data

const AllTreks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">All Treks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {treks.map((trek) => (
          <div key={trek.id} className="border rounded-lg shadow-md overflow-hidden">
            <img
              src={trek.image}
              alt={trek.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{trek.name}</h2>
              <p className="text-gray-600">{trek.location}</p>
              <p className="mt-2">{trek.description}</p>
              <Link
                to={`/trek/${trek.id}`}
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTreks;
