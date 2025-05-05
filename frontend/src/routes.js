
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListaDonaciones from "./pages/ListaDonaciones";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donaciones" element={<ListaDonaciones />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
