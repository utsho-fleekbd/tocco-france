"use client";

import { motion } from "framer-motion";

import WelcomeSlider from "./slider";

export function Welcome() {
  return (
    <div className="h-full lg:min-h-screen w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-12 py-12 lg:py-0">
      <div className="space-y-4 my-0 lg:my-auto col-span-1 lg:col-span-3">
        <motion.h2
          className="font-script text-3xl md:text-5xl"
          initial={{ scaleX: 0.75, y: -75 }}
          whileInView={{ scaleX: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          Welcome to Tocco France
        </motion.h2>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          Redefining Luxury Switches & Sockets
        </h1>
      </div>

      <div className="my-auto col-span-1 lg:col-span-2">
        <WelcomeSlider />
      </div>
    </div>
  );
}
