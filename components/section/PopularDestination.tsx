"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    name: "Paris",
    image: "/image/background-home-3.jpg",
    tours: "05",
  },
  {
    name: "Australia",
    image: "/image/background-home-2.jpg",
    tours: "08",
  },
  {
    name: "New York",
    image: "/image/background-home-1.jpg",
    tours: "06",
  },
  {
    name: "Spain City",
    image: "/image/background-home-2.jpg",
    tours: "07",
  },
];

const PopularDestinations = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-violet-600 mb-2"
        >
          Next Adventure Destination
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
        >
          Popular Travel Destinations Available Worldwide
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 mb-10 max-w-xl mx-auto"
        >
          Are You Tired Of The Typical Tourist Destinations And Looking To Step
          Out Of Your Comfort Zone?
        </motion.p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 md:px-12 lg:px-16">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
                {/* Image Section */}
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Badge */}
                  <span className="absolute bottom-3 left-3 z-10 bg-violet-600 text-white text-xs font-medium px-2 py-1 rounded transition-all duration-300 group-hover:translate-y-[-4px]">
                    {dest.tours} Tours
                  </span>
                </div>

                {/* Text */}
                <div className="p-4 transition-all duration-300 group-hover:translate-y-[-2px]">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-violet-700 transition-colors duration-300">
                    {dest.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
