import { useState } from "react";
import TrekCard from "../components/TrekCard";
import { treks } from "../data/treks";
import FilterBar from "../components/FilterBar";
import heroImage from "../assets/hero.png";
import aboutImage from "../assets/about.jpg"; // new import
import testimonialImg from "../assets/testimonials/trekker1.jpg";
import gallery1 from "../assets/gallery/1.jpg";
import gallery2 from "../assets/gallery/2.jpg";
import gallery3 from "../assets/gallery/3.jpg";
import gallery4 from "../assets/gallery/4.jpg";
import gallery5 from "../assets/gallery/5.jpg";
import gallery6 from "../assets/gallery/6.jpg";
import gallery7 from "../assets/gallery/7.jpg";
import gallery8 from "../assets/gallery/8.jpg";
import nehru from "../assets/certificates/Nehru-Institute-of-Mountaineering-Logo-1-e1685940713654.webp";
import imf from "../assets/certificates/imf.jpg";
import UttarakhandLogo from "../assets/certificates/Uttarakhand-logo.jpg";
import {
  CheckCircle,
  Leaf,
  ShieldCheck,
  Star,
  Bus,
  Tent,
  Utensils,
  Compass,
  Briefcase,
  PhoneCall,
  Quote,
} from "lucide-react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [showMore, setShowMore] = useState(false); // For show more / show less functionality

  const filteredTreks = treks.filter((trek) => {
    const matchesSearch =
      trek.name.toLowerCase().includes(search.toLowerCase()) ||
      trek.location.toLowerCase().includes(search.toLowerCase());

    const matchesDifficulty =
      difficulty === "All" || trek.difficulty.toLowerCase() === difficulty.toLowerCase();

    return matchesSearch && matchesDifficulty;
  });

  const treksToShow = showAll ? filteredTreks : filteredTreks.slice(0, 6);

  const toggleDescription = () => setShowMore((prev) => !prev);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-start"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl px-6 mx-auto text-left text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            TREKS THAT <br className="hidden md:block" /> TRANSFORM LIVES
          </h1>
          <a
            href="#explore"
            className="inline-block mt-6 bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md shadow-md hover:bg-yellow-500 transition-all"
          >
            SEE ALL UPCOMING TREKS
          </a>
          <p className="mt-6 text-lg max-w-xl">
            Join 30,000+ trekkers every year on mindfully designed experiences that help you connect to yourself,
            to nature and to others.
          </p>
          <p className="mt-3 underline underline-offset-4 text-sm hover:text-yellow-300 cursor-pointer">
            Read 11,000+ Google reviews with an average of 4.9 rating
          </p>
        </div>
      </section>

      {/* Welcome to Trekify Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-serif">
                Welcome to Trekify!
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed font-sans">
                At Trekify, we don’t just organize treks — we create life-changing experiences.
                Our treks are carefully curated to take you deep into the heart of the Himalayas,
                where you can disconnect from the noise and reconnect with yourself. Whether you're
                a first-timer or a seasoned hiker, we ensure you enjoy nature with safety, purpose, and joy.
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-serif">
                How Trekking with Trekify is Different and Motivated
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-sans">
                Trekify is driven by passion, purpose, and a deep love for the Himalayas. With certified
                local guides, eco-friendly practices, and soul-nourishing experiences, we’re not just another
                trekking company — we’re your adventure family. Each step with us is safe, meaningful, and
                filled with discovery.
              </p>

              {/* Show More / Show Less */}
              <p
                className={`text-base md:text-lg text-gray-700 leading-relaxed font-sans ${
                  showMore ? "" : "line-clamp-3"
                }`}
              >
                {showMore
                  ? `Trekify goes beyond just trekking, we offer holistic experiences. Our guided treks let you explore
                       breathtaking views, encounter wildlife, and forge lasting memories. Whether you're looking for peace,
                       adventure, or both, Trekify ensures an enriching journey with top-notch services, sustainable practices,
                       and personalized attention. Let us take you on a trek you’ll never forget.`
                  : `Trekify goes beyond just trekking, we offer holistic experiences. Our guided treks let you explore...`}
              </p>
              <button onClick={toggleDescription} className="text-green-600 mt-2 hover:underline">
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={aboutImage} // Replace with your image source
                alt="Trekify Experience"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

     <section className="bg-gradient-to-r from-teal-50 to-white py-20 px-6 md:px-20" id="transform-lives">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-teal-900 mb-14 tracking-tight font-serif">
      How Our Treks <span className="text-yellow-500">Transform Lives</span>
    </h2>

    <div className="grid gap-8 md:grid-cols-3">
      {/* Self Connection */}
      <div className="bg-white border border-teal-200 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 p-5 text-left max-w-md mx-auto md:mx-0">
        <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-4 font-serif tracking-wide">
          Connect to Yourself
        </h3>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium">
          Each experience on our treks is crafted to help you connect deeply with yourself.
          Trekkers return with renewed perspectives, increased confidence, and heightened
          self-awareness. Many share how their journeys led to life-changing decisions,
          often shifting their life's direction in powerful, transformative ways.
        </p>
      </div>

      {/* Nature Connection */}
      <div className="bg-white border border-teal-200 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 p-5 text-left max-w-md mx-auto md:mx-0">
        <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-4 font-serif tracking-wide">
          Connect to Nature
        </h3>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium">
          Trekking immerses you in nature, but true connection comes from knowing where to look.
          Our trek leaders are trained naturalists who don’t just guide—they share the trails’ flora,
          fauna, and biodiversity, deepening your bond with the natural world.
        </p>
      </div>

      {/* Social Connection */}
      <div className="bg-white border border-teal-200 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 p-5 text-left max-w-md mx-auto md:mx-0">
        <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-4 font-serif tracking-wide">
          Connect to Others
        </h3>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium">
          Trekking nurtures lifelong friendships. In today’s fast-paced world, such deep connections
          are rare. Our leaders foster a welcoming environment from the start, forming a close-knit
          community bonded not just by the trail but through shared stories and understanding.
        </p>
      </div>
    </div>
  </div>
</section>




      {/* Explore Treks */}
      <section id="explore" className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Explore Treks</h1>
        <FilterBar search={search} setSearch={setSearch} difficulty={difficulty} setDifficulty={setDifficulty} />
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {treksToShow.length > 0 ? (
            treksToShow.map((trek) => <TrekCard key={trek.id} trek={trek} />)
          ) : (
            <p className="text-center col-span-full text-gray-600">No treks found.</p>
          )}
        </div>
        {!showAll && filteredTreks.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md shadow-md hover:bg-yellow-500 transition-all"
            >
              Show All Treks
            </button>
          </div>
        )}
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Trekify?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[ 
              { icon: <Leaf className="text-green-500 w-10 h-10 mx-auto" />, title: "Eco-Conscious Travel", desc: "We promote responsible trekking with a strong environmental focus." },
              { icon: <Briefcase className="text-blue-500 w-10 h-10 mx-auto" />, title: "Expert Team", desc: "Certified guides with years of Himalayan trekking experience." },
              { icon: <ShieldCheck className="text-red-500 w-10 h-10 mx-auto" />, title: "Safety First", desc: "Full safety gear, protocols, and medical support during treks." },
              { icon: <Star className="text-yellow-500 w-10 h-10 mx-auto" />, title: "Top Rated", desc: "Loved by thousands of trekkers across India and beyond." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center">
                {icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services & Facilities</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[ 
              { icon: <Bus className="text-indigo-500 w-8 h-8" />, title: "Transport", desc: "Safe pickup & drop from major cities." },
              { icon: <Tent className="text-orange-500 w-8 h-8" />, title: "Accommodation", desc: "Clean tents & lodges with basic facilities." },
              { icon: <Utensils className="text-pink-500 w-8 h-8" />, title: "Nutritious Meals", desc: "Wholesome meals during the trek." },
              { icon: <Compass className="text-blue-400 w-8 h-8" />, title: "Guided Treks", desc: "Experienced and certified trek leaders." },
              { icon: <CheckCircle className="text-green-600 w-8 h-8" />, title: "Rental Gear", desc: "Sleeping bags, trekking poles and more." },
              { icon: <PhoneCall className="text-red-500 w-8 h-8" />, title: "24x7 Support", desc: "Always available for your queries & safety." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <div>{icon}</div>
                <h3 className="text-lg font-semibold mt-4 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Trekkers Say</h2>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <Quote className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
            <p className="text-lg italic">“Trekify made my first Himalayan trek unforgettable. Great food, professional guides, and stunning views!”</p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <img src={testimonialImg} alt="Trekker" className="w-12 h-12 rounded-full object-cover" />
              <div className="text-left">
                <h4 className="font-semibold">Om Rana</h4>
                <p className="text-sm text-gray-500">Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - 3D Image Hover Effect */}
<section className="bg-gray-100 py-16 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold mb-10 text-gray-800 tracking-wide">
      Gallery
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 perspective-1000">
      {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8].map((img, idx) => (
        <div
          key={idx}
          className="group relative w-full h-60 rounded-xl overflow-hidden shadow-xl transform-gpu transition-transform duration-500 hover:rotate-y-6 hover:scale-105"
        >
          <img
            src={img}
            alt={`Gallery ${idx + 1}`}
            className="object-cover w-full h-full rounded-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Certifications */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Certifications & Accreditations</h2>
          <p className="text-gray-600 mb-8">We are recognized and certified by top tourism and safety organizations.</p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {[nehru, imf, UttarakhandLogo].map((src, i) => (
              <div key={i} className="w-36 h-36 bg-gray-100 border rounded-full flex items-center justify-center shadow-lg">
                <img src={src} alt="certificate" className="h-full w-full object-cover rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
