import React from "react";
import HeroSection from "../components/HeroSection";
import Section1 from "../components/Section1";
import FeaturedProperties from "../components/FeaturedProperties";
import TopDestinations from "../components/TopDestinations";

function Homepage() {
  return (
    <div>
      <HeroSection />
      <Section1 />
      <FeaturedProperties />
      <TopDestinations />
    </div>
  );
}

export default Homepage;
