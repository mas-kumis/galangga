"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

const PopularSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative px-8 md:px-12 lg:px-16 w-full bg-white my-16 py-16"
    >
      <div className="mx-auto">
        <div className="relative flex flex-col items-center text-center">
          {/* Top Images */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute top-0 left-25 translate-x-[-30%] -translate-y-[30%] hidden lg:block"
          >
            <Image
              src="/image/background-home-1.jpg"
              alt="left"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute top-0 right-25 translate-x-[30%] -translate-y-[30%] hidden lg:block"
          >
            <Image
              src="/image/background-home-2.jpg"
              alt="right"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-semibold text-violet-600 mb-2"
          >
            Tour Terpopuler
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-2xl md:text-5xl font-bold text-black leading-tight mb-4 max-w-xl"
          >
            Ayo Jelajahi Wisata Indonesia Bareng Kami
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base text-gray-600 max-w-xl mb-6"
          >
            Kamu bebas bisa memilih tujuan untuk meromantisasi hubungan kamu,
            mengertakan kekeluargaan dan persahabatan kamu, solo travelling,
            atau explore indonesia, Kami Galangga siap melayanimu dan
            menyediakan kebutuhan travelingmu
          </motion.p>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="default" className="inline-flex">
              TAKE A TOUR
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>

          {/* Bottom Images */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-0 left-40 translate-x-[-20%] translate-y-[30%] hidden lg:block"
          >
            <Image
              src="/image/background-home-3.jpg"
              alt="bottom left"
              width={140}
              height={140}
              className="rounded-xl"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-0 right-40 translate-x-[20%] translate-y-[30%] hidden lg:block"
          >
            <Image
              src="/image/background-home-1.jpg"
              alt="bottom right"
              width={140}
              height={140}
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PopularSection;
