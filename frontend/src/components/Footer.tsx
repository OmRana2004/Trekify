import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Trekify</h2>
          <p className="text-gray-400 leading-relaxed">
            Trekify is your trusted adventure partner offering the best Himalayan treks,
            unforgettable journeys, and expert guidance across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-green-400 transition-all duration-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-400 transition-all duration-300">About Us</a>
            </li>
            <li>
              <a href="/treks" className="hover:text-green-400 transition-all duration-300">Treks</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-400 transition-all duration-300">Contact Us</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-green-400 transition-all duration-300">Blog</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
          <ul className="text-gray-400 space-y-2">
            <li>📍 Dharali, Uttarakhand, India</li>
            <li>📞 +917668762035</li>
            <li>✉️ info@trekify.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="https://www.facebook.com/khurana.panwar" target="blank" className="hover:text-green-400 transition-all duration-300">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com/keshav_panwar92/" target="_blank" className="hover:text-green-400 transition-all duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.youtube.com/@SOHUMHIMALAYA" target="blank" className="hover:text-green-400 transition-all duration-300">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Trekify. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
