import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Products from './sections/Products';
import WhyChooseUs from './sections/WhyChooseUs';
import Stats from './sections/Stats';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Map from './sections/Map';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyChooseUs />
        <Stats />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
        <Map />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
