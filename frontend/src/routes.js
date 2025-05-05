import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListaDonaciones from "./pages/ListaDonaciones";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donaciones" element={<ListaDonaciones />} />
    </Routes>
  );
}

export default RoutesComponent;
