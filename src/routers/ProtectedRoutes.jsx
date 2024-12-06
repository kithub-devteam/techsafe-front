import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
export const ProtectedRoutes = () => {
  const navigate = useNavigate();
  // Vérifier le token dans localStorage ou sessionStorage
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Check if the user is authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      // If not authenticated, redirect to the login page
      navigate("/login");
    }
  }, [isAuthenticated]);
  // If authenticated, render the child routes
  return <Outlet />;
};
