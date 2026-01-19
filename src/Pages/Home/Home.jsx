import React from "react";

import "./Home.css";
import Feature from "../../components/Features/Feature";
import Hero from "../../components/Hero/Hero";
import Subscribe from "../../components/Subscribe/Subscribe";
import WorkSection from "../../components/WorkSection/WorkSection";

import TestimonialSection from "../../components/Testimonial/TestimonialSection";
import Footer from "../../components/Footer/Footer";
import BuiltSection from "../../components/BuiltSection/BuiltSection";

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Feature />
      <TestimonialSection />
      <BuiltSection />
      <WorkSection />
      <Subscribe />

      <Footer />
    </div>
  );
}

export default Home;
