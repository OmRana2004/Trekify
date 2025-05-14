import { useState } from "react";
import founderImage from "../assets/founder.jpg";
import creatorImage from "../assets/creator.jpg";

const About = () => {
  const [founder] = useState(founderImage);
  const [creator] = useState(creatorImage);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">About Trekify</h1>
      <p className="text-lg text-gray-700 mb-4">
        Trekify is a platform that allows you to explore and book treks in the breathtaking
        landscapes of the Himalayas. We curate trekking experiences with a focus on safety,
        sustainability, and adventure. Whether you're a beginner or an experienced trekker, 
        you'll find the perfect trek for you.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
      <p className="text-lg text-gray-700 mt-4">
        Our mission is to make trekking in the Himalayas accessible to everyone. We aim to 
        provide unforgettable experiences for trekkers of all levels, with expert guides and 
        top-notch equipment.
      </p>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-center">Our Founders</h2>
        <div className="flex justify-center items-center gap-10 mt-6 flex-wrap">
          <div className="text-center">
            <img
              src={founder}
              alt="Founder"
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-lg hover:scale-105 transition-transform"
            />
            <h3 className="text-xl font-semibold">Keshav Panwar</h3>
            <p className="text-gray-600">Founder</p>
          </div>

          <div className="text-center">
            <img
              src={creator}
              alt="Creator"
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-lg hover:scale-105 transition-transform"
            />
            <h3 className="text-xl font-semibold">Vicky Panwar</h3>
            <p className="text-gray-600">Creator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
