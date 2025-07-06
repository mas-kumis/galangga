"use client";
import React from "react";
import { motion, Variants } from "motion/react";
import { Button } from "../ui/button";

// Main content animations
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const CallToAction = () => {
  // Continuous floating animation for background elements

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0" />

      {/* Background image with animated opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/image/cta.png)",
        }}      />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="text-lg md:text-xl font-medium text-white mb-4 tracking-widest"
          variants={item}
          animate={{
            textShadow: [
              "0 0 8px rgba(255,255,255,0.3)",
              "0 0 16px rgba(255,255,255,0.5)",
              "0 0 8px rgba(255,255,255,0.3)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          NEXT ADVENTURE
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight mb-8"
          variants={item}
        >
          Popular Travel Destinations
          <br />
          Available Worldwide
        </motion.h1>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={item}
        >
          <Button className="mt-6 px-8 py-6 text-lg bg-white text-violet-600 hover:bg-white/90 font-medium rounded-lg shadow-lg relative overflow-hidden">
            {/* Animated button shine effect */}
            <motion.span
              className="absolute inset-0 bg-white/30"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
            <span className="relative z-10 flex items-center">
              Book Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Button>
        </motion.div>

        {/* Search bar with continuous animation */}
      </motion.div>
    </div>
  );
};

export default CallToAction;
