"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ourVision from "../assets/our-vision.png";

export function Vision() {
  return (
    <motion.div
      className="p-16 bg-background-2 flex flex-col items-center justify-center gap-8 rounded-2xl text-center"
      initial={{
        rotateY: 40,
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
        src={ourVision}
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
        Our Vision
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
        Making your dream home is the first step to living your greatest life.
        To suit your preferences, we provide a great selection of switches and
        sockets in both vintage and fascinating styles. By offering premium
        consumers with design, quality, and service, we establish Tocco France
        as the most valuable brand in the world. We do this by designing sockets
        and switches with your needs in mind.
      </motion.p>
    </motion.div>
  );
}
