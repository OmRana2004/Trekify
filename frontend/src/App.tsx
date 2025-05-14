import { Analytics } from '@vercel/analytics/react';
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true,    // whether animation should happen only once
    });
  }, []);

  return (
    <><Analytics /><Router>
      <Navbar />
      <AppRoutes />
      <Footer /> {/* Add Footer here */}
    </Router></>
  );
};

export default App;
