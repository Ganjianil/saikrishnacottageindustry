import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Haeder"; // Corrected import name
import ProductsPage from "./ProductsPage"; // Ensure this matches the filename
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Banner from "./Banner";
import MediaGallery from "./MediaGallery";
import Enquiryform from "./Enquiryform";

const App = () => {
  return (
    <Router>
     
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/photos" element={<MediaGallery />} />
      </Routes>
      
    </Router>
  );
};

export default App;
