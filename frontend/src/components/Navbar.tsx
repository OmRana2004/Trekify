import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  let lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 py-5 px-8 transition-all duration-300 backdrop-blur-sm
        ${
          isScrolled
            ? "bg-gradient-to-r from-green-700 via-green-600 to-green-500 shadow-xl"
            : "bg-gradient-to-r from-green-800 via-green-700 to-green-600"
        }
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        transform
      `}
      style={{ willChange: "transform" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-4xl font-extrabold text-green-50 hover:text-yellow-400 transition-all duration-300 tracking-wide select-none"
          onClick={closeMobileMenu}
          aria-label="Trekify Logo"
        >
          Trekify
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 items-center">
          {["Home", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="relative text-lg font-semibold text-green-50 hover:text-yellow-400 transition ease-in-out duration-300 px-1"
              onClick={closeMobileMenu}
            >
              {item}
              {/* Underline effect */}
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
              />
            </NavLink>
          ))}

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-controls="treks-dropdown"
              className="relative text-lg font-semibold text-green-50 hover:text-yellow-400 transition ease-in-out duration-300 px-1 focus:outline-none"
            >
              Treks
              <motion.span
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block ml-2 text-yellow-400"
                aria-hidden="true"
              >
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  id="treks-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 mt-3 w-56 bg-green-50 rounded-2xl shadow-2xl overflow-hidden z-50 ring-1 ring-green-400"
                >
                  {[
                    { label: "All Treks", to: "/treks" },
                    { label: "Trek Packages", to: "/trek-packages" },
                    { label: "FAQ", to: "/faq" },
                  ].map(({ label, to }) => (
                    <NavLink
                      key={to}
                      to={to}
                      className="block px-7 py-4 text-green-900 hover:bg-green-200 hover:text-green-900 transition duration-200 font-medium rounded-lg"
                      onClick={closeMobileMenu}
                    >
                      {label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="ml-6 text-lg font-semibold text-green-900 bg-yellow-400 hover:bg-yellow-300 px-8 py-3 rounded-full shadow-lg transition transform hover:scale-110 hover:shadow-yellow-400 ease-in-out duration-300"
            aria-label="Book Now"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-green-50 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200 rounded-md"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsDropdownOpen(false);
            }}
          >
            {/* hamburger icon */}
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

      {/* Mobile Slide Menu with animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-green-700 to-green-600 backdrop-blur-md shadow-2xl p-8 mt-4 rounded-b-3xl space-y-4 glow-text-small bg-yellow-600"
          >
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "All Treks", to: "/treks" },
              { label: "Trek Packages", to: "/trek-packages" },
              { label: "FAQ", to: "/faq" },
              { label: "Contact", to: "/contact" },
            ].map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className="block py-4 text-lg font-semibold text-green-50 hover:text-yellow-400 transition ease-in-out duration-300"
                onClick={closeMobileMenu}
              >
                {label}
              </NavLink>
            ))}

            <button className="mt-6 w-full text-lg font-semibold text-green-900 bg-yellow-400 hover:bg-yellow-300 px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-yellow-400 ease-in-out duration-300">
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
// Compare this snippet from frontend/src/components/Navbar.tsx:
// import React, { useState, useEffect, useRef } from "react";./

