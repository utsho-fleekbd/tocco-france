"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ourMission from "../assets/our-mission.png";

export function Mission() {
  return (
    <motion.div
      className="p-16 bg-background-2 flex flex-col items-center justify-center gap-8 rounded-2xl text-center"
      initial={{
        rotateY: -40,
        y: 30,
        x: -15,
        scale: 0.8,
      }}
      whileInView={{
        rotateY: 0,
        y: 0,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      <Image
        src={ourMission}
        alt="Mission"
        width={200}
        height={200}
        className="size-42 object-cover"
      />

      <motion.h2
        className="uppercase font-semibold tracking-widest text-3xl"
        initial={{ y: -25, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        Our Mission
      </motion.h2>

      <div className="h-1.5 w-32 bg-white"></div>

      <motion.p
        className="text-sm md:text-base"
        initial={{ y: 35, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        Tocco France’s mission is to help you to realize your vision by
        accessing unique, exquisite luxury switches and sockets. Elegant,
        multifunctional switches and sockets are gorgeous in style and ideally
        tailored to your demands for modern life.
      </motion.p>
    </motion.div>
  );
}
