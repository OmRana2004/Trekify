// src/pages/AllTreks.tsx
import { Link } from "react-router-dom";
import { treks } from "../data/treks";

const AllTreks = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 pt-20 font-sans">
      {/* pt-20 = 5rem (80px) padding-top ensures content is pushed below navbar */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
        All Treks
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {treks.map((trek) => (
          <div
            key={trek.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden"
          >
            <img
              src={trek.image}
              alt={trek.name}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-900 truncate" title={trek.name}>
                {trek.name}
              </h2>
              <p className="text-sm text-green-700 font-medium mt-1">{trek.location}</p>
              <p className="text-gray-700 mt-2 text-sm line-clamp-3">{trek.description}</p>
              <Link
                to={`/trek/${trek.id}`}
                className="inline-block mt-4 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-md hover:bg-green-700 transition"
                aria-label={`View details about ${trek.name}`}
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
