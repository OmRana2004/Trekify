// src/pages/TrekPackages.tsx
const TrekPackages = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Trek Packages</h1>
        <div className="space-y-8">
          {/* Example Trek Package */}
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Trek Package 1</h2>
            <p className="text-gray-600">Duration: 7 Days</p>
            <p className="text-gray-600">Price: ₹10,000</p>
            <p className="mt-4 text-gray-700">
              This is an exciting trek that covers beautiful locations. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">
              Book Now
            </button>
          </div>
  
          {/* Add more packages similarly */}
        </div>
      </div>
    );
  };
  
  export default TrekPackages;
  