"use client";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar } from "./Navbar";
import { Button } from "../ui/button";

const images = [
  "/image/background-home-1.jpg",
  "/image/background-home-2.jpg",
  "/image/background-home-3.jpg",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={index}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          exit={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`Slide ${index}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-black/40">
        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center my-24 text-white text-center"
        >
          <div className="flex flex-col items-center justify-center gap-2 px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg font-semibold"
            >
              Promo ini Berlaku sampai 1 Januari 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="font-bold text-5xl sm:text-6xl md:text-8xl"
            >
              Pulau Bali
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg mt-2"
            >
              Satu Klik ini bisa mengubah pengalaman wisatamu seumur hidup
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold"
            >
              Booking Mulai dari{" "}
              <span className="font-bold text-4xl">IDR 3.000k</span> /orang
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <Button>Booking Sekarang</Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageSlider;
