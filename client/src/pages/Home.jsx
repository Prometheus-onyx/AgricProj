import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Newsletter from "../sections/Newsletter";
import Map from "../sections/Map";
import Testimonials from "../sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Newsletter />
      <Map />
    </>
  );
}