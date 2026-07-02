import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Footer from "../components/landing/Footer";
import Facilities from "../components/landing/Facilities";
import Rooms from "../components/landing/Rooms";
import Gallery from "../components/landing/Gallery";
import CTA from "../components/landing/CTA";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Rooms />
      <Gallery />
       <CTA />
      <Footer />
    </>
  );
}