import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/pages/Home";
import Demo from "./components/pages/Demo";
import KeyFeatures from "./components/pages/KeyFeatures";
import Pricing from "./components/pages/Pricing";
import Testimonials from "./components/pages/Testimonials";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/KeyFeatures" element={<KeyFeatures />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Demo" element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;
