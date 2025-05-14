import { useParams } from "react-router-dom";
import { treks } from "../data/treks";
import { useState } from "react";
import BookingModal from "../components/BookingModal";
import { Helmet } from "react-helmet";

const TrekDetail = () => {
  const { id } = useParams<{ id: string }>();
  const trek = treks.find((trek) => trek.id === id);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!trek) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-800">Trek Not Found</h2>
        <p className="text-gray-600 mt-4">Please check the trek you are trying to view.</p>
      </div>
    );
  }

  const similarTreks = treks
    .filter((t) => t.id !== trek.id && t.location === trek.location)
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>{trek.name} | Trekify</title>
        <meta name="description" content={`Trek details for ${trek.name} in ${trek.location}. ${trek.description.slice(0, 150)}...`} />
      </Helmet>

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1">
          <li><a href="/" className="hover:underline text-green-600">Home</a><span className="mx-2">/</span></li>
          <li><a href="/treks" className="hover:underline text-green-600">Treks</a><span className="mx-2">/</span></li>
          <li className="text-gray-800 font-semibold">{trek.name}</li>
        </ol>
      </nav>

      {/* Trek Banner */}
      <div data-aos="fade-up" className="relative w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-lg">
        <img
          loading="lazy"
          src={trek.image}
          alt={`Scenic view of ${trek.name}`}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Trek Info */}
      <div className="mt-8 space-y-6">
        <h1 data-aos="fade-up" className="text-4xl font-bold text-gray-900">{trek.name}</h1>
        <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-700">
          {trek.location} • {trek.difficulty} • {trek.duration} • {trek.season}
        </p>
        <p data-aos="fade-up" data-aos-delay="200" className="text-2xl font-semibold text-green-600">
          ₹{trek.price}
        </p>
        <p data-aos="fade-up" data-aos-delay="300" className="text-gray-800">{trek.description}</p>
        {trek.itineraryPdf && (
          <div data-aos="fade-up" data-aos-delay="400">
            <a
              href={trek.itineraryPdf}
              download={`${trek.name}-Itinerary.pdf`}
              className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition-all duration-300"
            >
              📄 Download Itinerary PDF
            </a>
          </div>
        )}
      </div>

      {/* Sections (Itinerary, Inclusions, Gear List, Gallery) */}
      {["itinerary", "inclusions", "gearList"].map((key) => (
        Array.isArray(trek[key]) && trek[key].length > 0 && (
          <div key={key} className="mt-12">
            <h2 data-aos="fade-up" className="text-3xl font-extrabold text-gray-900 mb-4">
              {key === "itinerary" ? "Itinerary" : key === "inclusions" ? "Inclusions" : "Gear List"}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {(trek[key] as string[]).map((item, index) => (
                <li
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="text-lg font-semibold text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )
      ))}

      {/* Gallery */}
      {trek.gallery?.length && (
        <div className="mt-12">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-gray-900 mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trek.gallery.map((image, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <img
                  loading="lazy"
                  src={image}
                  alt={`Gallery image ${index + 1} of ${trek.name}`}
                  className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Book Now Buttons */}
      <div className="justify-center mt-8 md:flex hidden">
        <button
          onClick={() => setIsBookingOpen(true)}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-bold rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          🚀 Book This Trek
        </button>
      </div>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <button
          onClick={() => setIsBookingOpen(true)}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-bold rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          🎒 Book This Trek
        </button>
      </div>
      {isBookingOpen && <BookingModal onClose={() => setIsBookingOpen(false)} trekName={trek.name} />}

      {/* Testimonials */}
      {trek.testimonials && trek.testimonials.length > 0 && (
        <section className="mt-20">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-center text-gray-900 mb-6 font-serif">
            What Trekkers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(trek.testimonials ?? []).map((testimonial, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white shadow-lg rounded-xl p-6"
              >
                <p className="text-gray-700 italic">“{testimonial.feedback}”</p>
                <p className="text-sm font-semibold mt-4 text-green-600">– {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Similar Treks */}
      {similarTreks.length > 0 && (
        <section className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 font-serif">
              Similar Treks
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-base sm:text-lg">
              Discover more adventures that match your spirit of exploration.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {similarTreks.map((similarTrek, index) => (
                <div
                  key={similarTrek.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                >
                  <img
                    loading="lazy"
                    src={similarTrek.image}
                    alt={similarTrek.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 font-serif">{similarTrek.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {similarTrek.location} • {similarTrek.difficulty} • {similarTrek.duration}
                    </p>
                    <p className="text-green-600 font-semibold mt-2 text-sm sm:text-base">
                      ₹{similarTrek.price}
                    </p>
                    <a href={`/treks/${similarTrek.id}`} className="inline-block mt-4 text-green-600 font-medium text-sm hover:underline">
                      View Details →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all"
        aria-label="Scroll to top"
      >
        ⬆
      </button>
    </div>
  );
};

export default TrekDetail;
