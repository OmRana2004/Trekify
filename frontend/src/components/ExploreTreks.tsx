
import { Link } from "react-router-dom";
import { treks } from "../data/treks";

const ExploreTreks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
        Explore Our Treks
      </h1>

      {/* Trek Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {treks.map((trek) => (
          <div
            key={trek.id}
            className="rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={trek.image}
              alt={trek.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{trek.name}</h2>
              <p className="text-gray-600 mt-2">{trek.location}</p>
              <p className="text-gray-500 mt-2">{trek.difficulty}</p>
              <div className="mt-4">
                <Link
                  to={`/trek/${trek.id}`}
                  className="text-blue-600 hover:text-blue-700"
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
