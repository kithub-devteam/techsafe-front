import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Authentications";
export const ProtectedRoutes = () => {
  const navigate = useNavigate();
  // Check if the user is authenticated
  const { user, loading } = useAuth()
  useEffect(() => {
    if (!user) {
      // If not authenticated, redirect to the login page
      navigate("/login");
    }
  }, [user,navigate]);


  if (loading) {
    return <div>Loading...</div>;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};
