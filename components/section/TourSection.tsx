import { CardTour } from "@/components/ui/ui/CardTour";

const tourData = [
  {
    title: "Two Hour Walking Tour Of Manhattan",
    location: "Veins City, Italy",
    duration: "7 Days",
    price: 320,
    image: "/image/background-home-1.jpg",
    label: "New",
    rating: 5,
    reviews: 5,
  },
  {
    title: "When You Visit The Eternal Dubai City",
    location: "Dubai, Emirates",
    duration: "2 Days",
    price: 149,
    oldPrice: 299,
    image: "/image/background-home-2.jpg",
    label: "% Offer",
    rating: 5,
    reviews: 5,
  },
  {
    title: "The Pulau Seribu, Jakarta Indonesia",
    location: "51 Dekor Land, Thailand",
    duration: "5 Days",
    price: 349,
    image: "/image/background-home-3.jpg",
    label: "New",
    rating: 5,
    reviews: 5,
  },
  {
    title: "American Parks Trail End Rapid City Express",
    location: "New York, USA",
    duration: "3 Days",
    price: 255,
    oldPrice: 280,
    image: "/image/background-home-1.jpg",
    label: "Featured",
    rating: 4,
    reviews: 4,
  },
];

const TourSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-10">
        <p className="text-sm font-medium text-violet-600 mb-1">
          Most Popular Tour Packages
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Something Amazing Waiting For you
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        {tourData.map((tour, idx) => (
          <CardTour key={idx} {...tour} />
        ))}
      </div>
    </section>
  );
};

export default TourSection;
