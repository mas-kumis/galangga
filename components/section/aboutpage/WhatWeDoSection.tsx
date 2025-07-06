"use client";

import { motion } from "motion/react";
import { Wallet, Luggage, Award } from "lucide-react";

const features = [
  {
    icon: <Wallet className="w-6 h-6 text-violet-600" />,
    title: "Ultimate flexibility",
    description:
      "when an unknown printer took galleof type and scrambled make type peci bookhas survived five.",
  },
  {
    icon: <Luggage className="w-6 h-6 text-violet-600" />,
    title: "Memorable experiences",
    description:
      "when an unknown printer took galleof type and scrambled make type peci bookhas survived five.",
  },
  {
    icon: <Award className="w-6 h-6 text-violet-600" />,
    title: "Award winning support",
    description:
      "when an unknown printer took galleof type and scrambled make type peci bookhas survived five.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 text-center relative">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-2xl mx-auto"
      >
        <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-2">
          What We Do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          We Arrange The Best Tour Ever Possible
        </h2>
        <p className="text-gray-500 mt-4 text-sm md:text-base">
          When an unknown printer took a galley of type and scrambled make type
          specimen book has survived not only five.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-violet-100 w-10 h-10 flex items-center justify-center rounded-md mb-4">
              {feature.icon}
            </div>
            <h4 className="font-semibold text-md mb-2 text-gray-900">
              {feature.title}
            </h4>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
