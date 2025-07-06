"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const socialIcons = [
  { icon: <Facebook size={14} />, href: "#" },
  { icon: <Twitter size={14} />, href: "#" },
  { icon: <Instagram size={14} />, href: "#" },
  { icon: <Youtube size={14} />, href: "#" },
];

const Footer = () => {
  return (
    <div className="relative mt-[75px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-[-75px] left-1/2 -translate-x-1/2 w-[90%] md:w-3/4 h-[150px] bg-violet-600 rounded-xl z-10 shadow-xl"
      />
      <footer className="relative bg-[#10002b] text-white pt-40 pb-8 px-6 md:px-12 lg:px-32 overflow-hidden">
        {/* Ornamen Kotak Ungu */}

        {/* Konten Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
        >
          {/* Logo & Newsletter */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Tourex</h2>
            <p className="text-sm text-gray-300">
              Pharetra Maecenas Felis Vestibulum Convallis Mollis Nullam Congue
              Sit.D Rivers Of Finland Quebec.
            </p>
            <div className="flex items-center h-[30px]">
              <Input
                className="rounded-l-md rounded-r-none text-xs px-2 py-2 h-[30px] w-full text-black bg-white focus:outline-none focus:ring-0 focus:border-none"
                type="email"
                placeholder="Enter your mail"
              />
              <Button className="bg-violet-600 h-[30px] hover:bg-violet-700 px-4 py-2 rounded-r-md rounded-l-none">
                <ArrowRight size={18} />
              </Button>
            </div>
            <div className="flex space-x-3 pt-4">
              {socialIcons.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="bg-gray-800 hover:bg-violet-600 p-2 rounded-full transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300 px-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Tour Guide</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold text-lg mb-4">Information</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={16} />
                <p>58 Street Commercial Road, Fratton, Australia</p>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <p>+123 888 9999</p>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <p>
                  Mon – Sat: 8 AM – 5 PM, Sunday: <strong>CLOSED</strong>
                </p>
              </li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Utility Pages</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Style Guide</a>
              </li>
              <li>
                <a href="#">Password Protected</a>
              </li>
              <li>
                <a href="#">404 Error</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">License</a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-10 text-center text-xs text-gray-400 relative z-20">
          Copyright © 2025 Gallanga Tour. All rights reserved. Developed with ❤️
          by Bung Wil
        </div>
      </footer>
    </div>
  );
};

export default Footer;
