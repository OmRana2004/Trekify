import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // To hide navbar on scroll

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Scroll effect to hide navbar after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 py-4 px-6 transition-all duration-300 ${
        isScrolled ? "bg-white-600/90" : "bg-green-600/70"
      } backdrop-blur-lg shadow-lg`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-4xl font-extrabold text-white hover:text-gray-200 transition-all duration-300 tracking-wide"
          onClick={closeMobileMenu}
        >
          Trekify
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink
            to="/"
            className="text-lg font-medium text-white hover:text-yellow-300 transition"
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-lg font-medium text-white hover:text-yellow-300 transition"
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-lg font-medium text-white hover:text-yellow-300 transition"
            >
              Treks
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-52 bg-white shadow-xl rounded-xl overflow-hidden z-50">
                <NavLink
                  to="/treks"
                  className="block px-5 py-3 text-gray-700 hover:bg-green-100 transition"
                  onClick={closeMobileMenu}
                >
                  All Treks
                </NavLink>
                <NavLink
                  to="/trek-packages"
                  className="block px-5 py-3 text-gray-700 hover:bg-green-100 transition"
                  onClick={closeMobileMenu}
                >
                  Trek Packages
                </NavLink>
                <NavLink
                  to="/faq"
                  className="block px-5 py-3 text-gray-700 hover:bg-green-100 transition"
                  onClick={closeMobileMenu}
                >
                  FAQ
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/contact"
            className="text-lg font-medium text-white hover:text-yellow-300 transition"
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
          <button className="ml-4 text-lg font-semibold text-green-700 bg-white hover:bg-green-100 px-6 py-3 rounded-full shadow-md transition transform hover:scale-105">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-yellow-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-600/80 backdrop-blur-md shadow-lg p-6 mt-2">
          <NavLink
            to="/"
            className="block py-3 text-lg font-medium text-white hover:text-yellow-300 transition"
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block py-3 text-lg font-medium text-white hover:text-yellow-300 transition"
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/treks"
            className="block py-3 text-lg font-medium text-white hover:text-yellow-300 transition"
            onClick={closeMobileMenu}
          >
            All Treks
          </NavLink>
          <NavLink
            to="/trek-packages"
            className="block py-3 text-lg font-medium text-white hover:text-yellow-300 transition"
            onClick={closeMobileMenu}
          >
            Trek Packages
          </NavLink>
          <NavLink
            to="/faq"
            className="block py-3 text-lg font-medium text-white hover:text-yellow-300 transition"
            onClick={closeMobileMenu}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-3 text-lg font-medium text-white hover:text-yellow-300 transition"
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
          <button className="mt-4 w-full text-lg font-semibold text-green-700 bg-white hover:bg-green-100 px-6 py-3 rounded-full shadow-md transition transform hover:scale-105">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
