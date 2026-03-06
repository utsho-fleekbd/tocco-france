"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import eiffelTower from "../assets/eiffel-tower.jpg";

export function Intro() {
  return (
    <div className="relative flex items-center justify-center h-125 max-h-[75vh] w-full overflow-hidden rounded-2xl">
      <Image
        src={eiffelTower}
        alt="Eiffel Tower"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-[#0d1d42]/75"></div>
      <div className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-black/25"></div>

      <motion.p
        className="relative z-10 max-w-4/6 text-center text-sm md:text-xl"
        initial={{ y: 75, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        With a perfect blend of authenticity and quality Tocco France delighted
        to offer engraving service across full range of luxury switches and
        sockets. Beautifully designed and meticulously engineered, these luxury
        sockets and switches can truly reflect your style and design flair at
        your home.
      </motion.p>
    </div>
  );
}
