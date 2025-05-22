import { useState } from "react";
import founderImage from "../assets/founder.jpg";
import creatorImage from "../assets/creator.jpg";

const About = () => {
  const [founder] = useState(founderImage);
  const [creator] = useState(creatorImage);

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-gradient-to-r from-green-50 via-green-100 to-green-50 rounded-3xl shadow-xl">
      <h1
        className="text-5xl md:text-4xl font-extrabold text-center mb-6 
          p-14
          bg-gradient-to-r from-green-600 to-green-500 text-transparent bg-clip-text
         "
      >
        About Trekify
      </h1>

      <p
        className="text-base sm:text-xl text-green-900 max-w-3xl mx-auto leading-relaxed mb-8 font-sans
          "
      >
        Trekify is a platform that allows you to explore and book treks in the breathtaking
        landscapes of the Himalayas. We curate trekking experiences with a focus on safety,
        sustainability, and adventure. Whether you're a beginner or an experienced trekker,
        you'll find the perfect trek for you.
        Our team of experienced guides and local experts are dedicated to providing you with
        an unforgettable trekking experience. We believe in responsible tourism and work.

      </p>

      <h2
        className="text-2xl sm:text-3xl font-semibold mt-10 mb-4 text-green-900 border-b-4 border-yellow-400 w-max mx-auto
          animate-fadeIn"
      >
        Our Mission
      </h2>

      <p
        className="text-sm sm:text-lg text-green-800 max-w-3xl mx-auto leading-relaxed mb-12 font-serif"
      >
        Our mission is to make trekking in the Himalayas accessible to everyone. We aim to
        provide unforgettable experiences for trekkers of all levels, with expert guides and top-notch equipment.
        We are committed to preserving the natural beauty of the Himalayas and supporting local communities.
      </p>

      <div>
        <h2
          className="text-3xl sm:text-4xl font-bold text-center text-green-900 mb-8 tracking-wide animate-fadeIn"
        >
          Our Founders
        </h2>
        <div className="flex justify-center gap-12 sm:gap-16 flex-wrap px-4">
          {[{
            img: founder,
            name: "Keshav Panwar",
            title: "Founder",
          }, {
            img: creator,
            name: "Vicky Panwar",
            title: "Creator",
          }].map(({ img, name, title }, idx) => (
            <div
              key={name}
              className={`text-center max-w-xs bg-white rounded-2xl shadow-lg p-6 cursor-pointer
                transform transition-transform duration-300 ease-in-out
                hover:scale-105 hover:shadow-2xl animate-popIn
                `}
              style={{ animationDelay: `${idx * 150}ms` }}
              aria-label={`${name} - ${title}`}
            >
              <img
                src={img}
                alt={name}
                className="w-48 h-48 object-cover rounded-full mx-auto mb-5 ring-4 ring-yellow-400 shadow-md
                  transition-transform duration-300 ease-in-out
                  hover:rotate-3 hover:scale-110"
              />
              <h3 className="text-2xl font-semibold text-green-900 mb-1 glow-text-small">{name}</h3>
              <p className="text-yellow-600 font-medium tracking-wide">{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Animations and custom glow styles */}
      <style>
        {`
          @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
          }
          @keyframes slideUp {
            from {opacity: 0; transform: translateY(20px);}
            to {opacity: 1; transform: translateY(0);}
          }
          @keyframes popIn {
            0% {opacity: 0; transform: scale(0.95);}
            100% {opacity: 1; transform: scale(1);}
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
          .animate-popIn {
            animation: popIn 0.4s ease forwards;
          }

          /* Glow effect on main heading */
          .glow-text {
            color: #16a34a; /* Tailwind green-600 */
            text-shadow:
              0 0 5px #34d399,
              0 0 10px #22c55e,
              0 0 15px #16a34a,
              0 0 20px #22c55e,
              0 0 30px #10b981;
          }

          /* Subtle glow on founders' names */
          .glow-text-small {
            color: #065f46; /* Tailwind green-900 */
            text-shadow:
              0 0 2px #bbf7d0,
              0 0 5px #86efac;
          }
        `}
      </style>
    </div>
  );
};

export default About;
