"use client";

import { motion } from "motion/react";

const RibbonWave = () => {
  return (
    <svg
      viewBox="0 0 1440 320"
      className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-10"
      preserveAspectRatio="none"
    >
      {/* Pita utama — tebal & transparan */}
      <motion.path
        d="M0,160 C360,240 1080,80 1440,160"
        fill="transparent"
        stroke="white"
        strokeWidth="20"
        strokeOpacity="0.8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Opsional: lapisan kedua untuk dinamika */}
      <motion.path
        d="M0,180 C360,260 1080,100 1440,180"
        fill="transparent"
        stroke="white"
        strokeWidth="10"
        strokeOpacity="0.8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1, 0],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </svg>
  );
};

export default RibbonWave;
