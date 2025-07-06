"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Floyd Miles",
    role: "CEO, Traveller",
    image: "/image/avatar-1.png", // Ganti dengan image kamu
    text: "Morem Ipsum Dolor Siter ey Amet Mean Early Areaeey Consec Taetur Adipisvice Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
  {
    name: "Esther Howard",
    role: "CEO, Traveller",
    image: "/image/avatar-2.png",
    text: "Morem Ipsum Dolor Siter ey Amet Mean Early Areaeey Consec Taetur Adipisvice Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
  {
    name: "Floyd Miles",
    role: "CEO, Traveller",
    image: "/image/avatar-1.png",
    text: "Morem Ipsum Dolor Siter ey Amet Mean Early Areaeey Consec Taetur Adipisvice Ollwing Ipsum Dolor Consectetur.",
    rating: 5,
  },
];

const ReviewSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="text-center mb-12">
        <p className="text-sm text-violet-600 font-medium">
          Clients Feedback About Us
        </p>
        <h2 className="text-3xl font-bold mt-2 mb-2">
          See Those Lovely Words From Clients
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm">
          Are You Tired Of The Typical Tourist Destinations And Looking To Step
          Out Of Your Comfort Zone?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-xl border p-6 shadow-sm relative"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
              <Quote className="ml-auto text-gray-300 w-6 h-6" />
            </div>
            <p className="text-gray-600 text-sm mb-3">{review.text}</p>
            <div className="flex gap-1 text-yellow-500">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  size={16}
                  fill={idx < review.rating ? "currentColor" : "none"}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
