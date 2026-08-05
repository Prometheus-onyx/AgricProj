import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import FAqPage from "./pages/FAqPage";
import GalleryPage from "./pages/GalleryPage";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
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