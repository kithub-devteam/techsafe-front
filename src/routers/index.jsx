import React, { Suspense, useEffect, useState } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
// =========error handle====================
import ErrorPage from "./componnents/PageError";
import ErrorBoundary from "./componnents/ErrorBoundary";
// -==================authentifications==================
import { useAuth } from "../Authentications";
// ================pages==================

const Home = React.lazy(() => import("../pages/home"));
const Login = React.lazy(() => import("../pages/login"));
const Signup = React.lazy(() => import("../pages/signup"));

const Routes = () => {
  const { user, loading } = useAuth()
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(!!user)
  }, [user, loading])
  if (loading) {
    return <div>Loading...</div>;
  }
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
            <Suspense fallback={<div>Loading......</div>}>

              <Home />
            </Suspense>
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
      element: <Suspense fallback={<div>Loading......</div>}><Login /></Suspense>,
    },
    {
      path: "/signup",
      element: <Suspense fallback={<div>Loading......</div>}><Signup /></Suspense>
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
