import React from "react";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import { Routes, Route, Navigate } from "react-router-dom";

const AnimRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/portfolio" />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AnimRoutes;
