"use client";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import RibbonWave from "@/components/ui/ui/RibbonWave";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const HeroAbout = () => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/image/background-home-1.jpg"
            alt="Hero"
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="  absolute inset-0 z-10 bg-black/40">
        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center my-16 text-white text-center"
        >
          <div className="flex flex-col items-center justify-center gap-2 px-4 ">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="font-bold text-5xl "
            >
              About Us
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-2"
            >
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>About</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>{" "}
            </motion.div>
          </div>
        </motion.div>
        <RibbonWave />
      </div>
    </div>
  );
};

export default HeroAbout;
