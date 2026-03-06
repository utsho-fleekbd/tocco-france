"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import chairman from "../assets/chairman.png";
import shakingHands from "../assets/shaking-hands.jpg";

export function CEO() {
  return (
    <div className="relative flex items-center justify-center h-200 max-h-[85vh] w-full overflow-hidden rounded-2xl">
      <Image
        src={shakingHands}
        alt="Eiffel Tower"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-[#143f4f]/80"></div>
      <div className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-black/25"></div>

      <div className="w-full flex flex-col items-center justify-center gap-6 z-10 text-center">
        <Image
          src={chairman}
          alt="Mission"
          width={200}
          height={200}
          className="size-42 object-cover"
        />

        <motion.h2
          className="uppercase font-semibold tracking-widest text-3xl"
          initial={{ y: -40, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          Message from CEO
        </motion.h2>

        <motion.p
          className="text-sm md:text-lg max-w-4/6"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          Don’t settle for a home that doesn’t suit your personality and
          preferences. Our Fusion line of switches and sockets broadens this
          selection, enabling you to turn your room into the refuge of your
          dreams. Shop with us and see the difference that Tocco France can
          make.
        </motion.p>
      </div>
    </div>
  );
}
