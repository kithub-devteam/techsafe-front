import React, { useState } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";

import ErrorPage from "./componnents/PageError";
import ErrorBoundary from "./componnents/ErrorBoundary";
const fakeDelay = async (promise) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return promise;
};


const Routes = () => {
  const [token, setToken] = useState(true)

  // Define public routes accessible to all users
  const PublicRoutes = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const AuthenticatedRoutes = [
    {
      path: "/",
      element: <ProtectedRoutes />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: (
            <div>home page</div>
          ),
          errorElement: <ErrorPage />
        },
        {
          path: "*",
          element: (
            <Navigate to="/" />
          ),
          errorElement: <ErrorPage />
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const UnauthenticatedRoutes = [
    {
      path: "/login",
      element: <div>Login page </div>,
    },
    {
      path: "/signup",
      element: <div>signup page </div>
    },
    {
      path: "/change-password/:email",
      element: (
        <div>forget password </div>
      ),
    },
    {
      path: "/account-verification",
      element: (
        <div>Account verification page</div>
      ),
    },
  ];


  const router = createBrowserRouter([
    ...PublicRoutes,
    ...(!token ? UnauthenticatedRoutes : []),
    ...AuthenticatedRoutes,
  ]);

  return <ErrorBoundary><RouterProvider router={router} /></ErrorBoundary>;
};

export default Routes;
