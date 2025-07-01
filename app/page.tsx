import ImageSlider from "@/components/layout/ImageSlider";
import Dream from "@/components/section/Dream";
import PopularSection from "@/components/section/Popular";
import PopularDestinations from "@/components/section/PopularDestination";

export default function Home() {
  return (
    <>
      {/* Coment of Slider */}
      <ImageSlider />
      <PopularSection />
      <Dream />
      <PopularDestinations />
    </>
  );
}
