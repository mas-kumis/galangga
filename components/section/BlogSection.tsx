"use client";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

const blogData = [
  {
    title: "Spiritual Sojourn: Pilgrimage Tours For Soul Seekers",
    tag: "Travel River",
    image: "/image/background-home-1.jpg",
    date: "26th Sep, 2024",
    readTime: "5 Mins Read",
  },
  {
    title: "Wine Country Escapes: Vineyard Tours For Connoisseurs",
    tag: "Hiking",
    image: "/image/background-home-2.jpg",
    date: "26th Sep, 2024",
    readTime: "5 Mins Read",
  },
  {
    title: "Thrills & Chills: Extreme Sports Tours For Adrenaline",
    tag: "Adventure",
    image: "/image/background-home-3.jpg",
    date: "26th Sep, 2024",
    readTime: "5 Mins Read",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="text-center mb-12">
        <p className="text-sm text-violet-600 font-medium">Blog And Article</p>
        <h2 className="text-3xl font-bold mt-2 mb-2">Latest News & Articles</h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm">
          Are You Tired Of The Typical Tourist Destinations And Looking To Step
          Out Of Your Comfort Zone?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* First (big) card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="col-span-1 lg:row-span-2 bg-white rounded-xl overflow-hidden shadow"
        >
          <div className="relative w-full h-64">
            <Image
              src={blogData[0].image}
              alt={blogData[0].title}
              fill
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3 bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded">
              {blogData[0].tag}
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{blogData[0].title}</h3>
            <div className="flex text-sm text-gray-500 gap-4">
              <p className="flex items-center gap-1">
                <Calendar size={14} /> {blogData[0].date}
              </p>
              <p className="flex items-center gap-1">
                <Clock size={14} /> {blogData[0].readTime}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Smaller Cards */}
        {blogData.slice(1).map((item, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="flex bg-white rounded-xl overflow-hidden shadow"
          >
            <div className="relative w-40 h-32 shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-2 left-2 bg-violet-600 text-white text-xs font-semibold px-2 py-1 rounded">
                {item.tag}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-base mb-1">{item.title}</h3>
              <div className="flex text-xs text-gray-500 gap-4">
                <p className="flex items-center gap-1">
                  <Calendar size={12} /> {item.date}
                </p>
                <p className="flex items-center gap-1">
                  <Clock size={12} /> {item.readTime}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center text-sm text-gray-700 mt-8">
        Want To See Our Recent News & Updates?{" "}
        <a href="#" className="text-violet-600 underline">
          Click Here To View More
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
