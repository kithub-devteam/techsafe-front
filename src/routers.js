import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./pages/conversations/index";

function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

export default RoutesComponent; 