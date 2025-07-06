import Footer from "@/components/layout/Footer";
import ExploreSection from "@/components/section/aboutpage/ExploreSection";
import HeroAbout from "@/components/section/aboutpage/HeroAbout";
import WhatWeDoSection from "@/components/section/aboutpage/WhatWeDoSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroAbout />
      <ExploreSection />
      <WhatWeDoSection />
      <Footer />
    </div>
  );
};

export default page;
