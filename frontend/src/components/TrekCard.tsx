import { Trek } from "../types/Trek";
import { Link } from "react-router-dom";
import { SignalIcon, ClockIcon, CurrencyRupeeIcon, MapPinIcon } from "../icons/Icon";

interface TrekCardProps {
  trek: Trek;
}

const TrekCard: React.FC<TrekCardProps> = ({ trek }) => {
  return (
    <div
      className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={trek.image}
          alt={trek.name}
          className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title and Location */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{trek.name}</h2>
          <div className="flex items-center text-gray-500 text-sm mt-1 space-x-1">
            <MapPinIcon className="h-4 w-4" />
            <span>{trek.location}</span>
          </div>
        </div>

        {/* Trek Details */}
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <SignalIcon className="h-5 w-5" />
            <p>{trek.difficulty}</p>
          </div>
          <div className="flex items-center space-x-1">
            <ClockIcon className="h-5 w-5" />
            <p>{trek.duration}</p>
          </div>
        </div>

        {/* Price and View Button */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-1 text-green-700 font-semibold">
            <CurrencyRupeeIcon className="h-5 w-5" />
            <p className="text-lg">₹{trek.price}</p>
          </div>
          <Link
            to={`/trek/${trek.id}`}
            className="inline-block text-sm text-blue-600 hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrekCard;
