import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Facilities from "../components/landing/Facilities";
import Rooms from "../components/landing/Rooms";
import Gallery from "../components/landing/Gallery";

import Statistics from "../components/landing/Statistics";
import Testimonials from "../components/landing/Testimonials";
import Membership from "../components/landing/Membership";
import Newsletter from "../components/landing/Newsletter";

import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Rooms />
      <Gallery />

      <Statistics />
      <Testimonials />
      <Membership />
      <Newsletter />

      <CTA />
      <Footer />
    </>
  );
}