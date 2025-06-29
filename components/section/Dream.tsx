"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "../ui/button";

const Dream = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-medium text-violet-600 mb-2"
          >
            Dream Your Next Trip
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Discover When Even You Want To Go
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mb-6 leading-relaxed"
          >
            Are you tired of the typical tourist destinations and looking to
            step out of your comfort zone? Adventure travel may be the perfect
            solution for you! Here are four.
          </motion.p>

          <div className="space-y-5 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="text-violet-600 text-2xl">🌍</div>
              <div>
                <h3 className="font-semibold text-lg">Best Travel Agency</h3>
                <p className="text-gray-600 text-sm">
                  Are you tired of the typical tourist destination and looking
                  step out of your comfort.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="text-violet-600 text-2xl">🛡️</div>
              <div>
                <h3 className="font-semibold text-lg">
                  Secure Journey With Us
                </h3>
                <p className="text-gray-600 text-sm">
                  Are you tired of the typical tourist destination and looking
                  step out of your comfort.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-md">
              BOOK YOUR TRIP →
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex justify-center items-center"
        >
          {/* Background Image */}
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="/image/background-home-3.jpg"
              alt="Travel Beach"
              fill
              className="object-cover rounded-3xl"
            />
            <h2 className="absolute right-4 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-bold text-white/10 tracking-widest rotate-90 pointer-events-none">
              TRAVEL
            </h2>
          </div>

          {/* Floating image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[160px] h-[200px] md:w-[200px] md:h-[260px] rounded-xl shadow-xl overflow-hidden border-4 border-white"
          >
            <Image
              src="/image/background-home-2.jpg"
              alt="Couple Travel"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dream;
