import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import Products from "../sections/Products";
import ProductsDetailPage from "../pages/ProductsDetailPage";
import ContactPage from "../pages/ContactPage";
import FAqPage from "../pages/FAqPage";
import GalleryPage from "../pages/GalleryPage";
import MapPage from "../pages/MapPage";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Analytics />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FAqPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;