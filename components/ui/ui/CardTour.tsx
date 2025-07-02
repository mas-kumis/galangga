"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { motion } from "motion/react";

type CardTourProps = {
  title: string;
  location: string;
  duration: string;
  price: number;
  oldPrice?: number;
  image: string;
  label?: string; // "New", "% Offer", "Featured"
  rating: number;
  reviews: number;
};

export const CardTour = ({
  title,
  location,
  duration,
  price,
  oldPrice,
  image,
  label,
  rating,
  reviews,
}: CardTourProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-xl overflow-hidden border bg-white shadow hover:shadow-lg transition-all relative"
    >
      {/* Image Section */}
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
        {label && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            {label}
          </span>
        )}
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
          <Heart size={16} className="text-gray-600" />
        </button>
      </div>

      {/* Text Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-base">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm text-gray-500">{duration}</p>

        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-sm text-gray-400 line-through">
              {oldPrice && `$${oldPrice}`}
            </p>
            <p className="text-violet-600 font-bold text-lg">
              ${price} <span className="text-sm text-gray-600">/Person</span>
            </p>
          </div>
          <p className="text-sm text-yellow-500">
            ⭐ {rating} ({reviews} Reviews)
          </p>
        </div>
      </div>
    </motion.div>
  );
};
