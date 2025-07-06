import Footer from "@/components/layout/Footer";
import ExploreSection from "@/components/section/aboutpage/ExploreSection";
import WhatWeDoSection from "@/components/section/aboutpage/WhatWeDoSection";
import HeroTour from "@/components/section/tourpage/HeroTour";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroTour />
      <WhatWeDoSection />
      <Footer />
    </div>
  );
};

export default page;
