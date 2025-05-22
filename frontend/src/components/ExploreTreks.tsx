import { Link } from "react-router-dom";
import { treks } from "../data/treks";

const ExploreTreks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1
        className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-gray-800"
        data-aos="fade-up"
      >
        Explore Our Treks
      </h1>

      {/* Grid View: 2 columns on mobile, 3 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {treks.map((trek) => (
          <div
            key={trek.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] duration-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={trek.image}
              alt={trek.name}
              className="w-full h-40 sm:h-52 object-cover"
            />
            <div className="p-4 sm:p-5">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                {trek.name}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{trek.location}</p>
              <p className="text-gray-500 text-sm">{trek.difficulty}</p>
              <div className="mt-3">
                <Link
                  to={`/trek/${trek.id}`}
                  className="inline-block bg-blue-600 text-white px-3 py-1.5 text-sm rounded-md hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreTreks;
