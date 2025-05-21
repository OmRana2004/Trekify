import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Analytics />
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  );
};

export default App;
