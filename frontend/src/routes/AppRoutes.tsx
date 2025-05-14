import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TrekDetail from "../pages/TrekDetail";
import Contact from "../pages/Contact";
import About from "../pages/About";
import ExploreTreks from "../components/ExploreTreks"; 
import AllTreks from "../pages/AllTreks";
import TrekPackages from "../pages/TrekPackages";
import FAQ from "../pages/FAQ";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<ExploreTreks />} />
      <Route path="/trek/:id" element={<TrekDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/treks" element={<AllTreks />} />
      <Route path="/trek-packages" element={<TrekPackages />} />
      <Route path="/faq" element={<FAQ />} />

      {/* Login route */}
      <Route path="/admin" element={<AdminLogin />} />

      {/* Protected admin route */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
