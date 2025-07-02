import ImageSlider from "@/components/layout/ImageSlider";
import Dream from "@/components/section/Dream";
import PopularSection from "@/components/section/Popular";
import PopularDestinations from "@/components/section/PopularDestination";
import TourSection from "@/components/section/TourSection";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      {/* Coment of Slider */}
      <ImageSlider />
      <PopularSection />
      <TourSection />
      <Dream />
      <PopularDestinations />
      <Footer />
    </>
  );
}
