"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const images = [
  "/image/background-home-1.jpg",
  "/image/background-home-2.jpg",
  "/image/background-home-3.jpg",
];

const ExploreSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">
            <Image
              src={images[0]}
              alt="Explore 1"
              width={250}
              height={300}
              className="rounded-xl w-full h-auto object-cover"
            />
            <Image
              src={images[1]}
              alt="Explore 2"
              width={250}
              height={300}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={images[2]}
              alt="Explore 3"
              width={250}
              height={400}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left space-y-6"
        >
          <p className="text-sm text-violet-600 font-semibold uppercase tracking-wide">
            Explore The World With Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            The Perfect Vacation <br /> Come True With <br />
            Our Travel Agency
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries
            but also the leap into electronic typesetting remaining essentially
            unchanged.
          </p>
          <button className="bg-violet-600 hover:bg-violet-700 transition text-white px-6 py-3 rounded-md text-sm inline-flex items-center gap-2">
            Book Your Room <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>

      {/* Optional Decoration (e.g. balloon, cloud) */}
      <div className="absolute bottom-0 right-0 hidden md:block">
        <Image
          src="/image/ornament-mountain.png"
          alt="Ornament"
          width={200}
          height={200}
          className="opacity-30"
        />
      </div>
    </section>
  );
};

export default ExploreSection;
