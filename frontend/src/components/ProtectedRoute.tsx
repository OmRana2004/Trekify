import { JSX } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return isAdmin ? children : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;

// new this is a simple protected route component that checks if the user is an admin by looking for a specific item in localStorage. If the user is an admin, it renders the children components; otherwise, it redirects to the admin page.
