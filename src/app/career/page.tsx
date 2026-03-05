"use client";

import { motion } from "framer-motion";

export default function CareerPage() {
  return (
    <div className="mt-32 mb-16" style={{ perspective: 1500 }}>
      <motion.div
        initial={{
          rotateY: -90,
          y: 30,
          x: -15,
          scale: 0.8,
        }}
        animate={{
          rotateY: 0,
          y: 0,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="p-12 rounded-md max-w-6xl mx-auto w-full bg-background-3 space-y-8 shadow-2xl"
      >
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-semibold uppercase">Get Hired</h1>

          <div className="w-48 h-2 bg-white mx-auto" />

          <h2 className="text-xl font-semibold max-w-2xl mx-auto">
            Are you passionate about design and innovation? Do you thrive in a
            fast-paced environment? Join our team!
          </h2>

          <p>
            Tocco France is a leading manufacturer & supplier of luxury switches
            & sockets, and we’re always looking for talented individuals to join
            our growing family. We offer a dynamic work environment, competitive
            compensation packages, and the opportunity to be part of a brand
            that is redefining the future of home design.
          </p>
        </div>

        <form className="grid grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-1">
            <label className="text-lg font-bold">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g. John Doe"
              className="bg-white text-background-3 p-2 outline-0 rounded-xs"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-bold">Email Address</label>
            <input
              type="email"
              placeholder="E.g. john@doe.com"
              className="bg-white text-background-3 p-2 outline-0 rounded-xs"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-bold">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g. +880 1701 000 000"
              className="bg-white text-background-3 p-2 outline-0 rounded-xs"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-bold">Address</label>
            <input
              type="text"
              placeholder="E.g. Dhaka, Bangladesh"
              className="bg-white text-background-3 p-2 outline-0 rounded-xs"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-bold">
              Job Position <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g. Marketing"
              className="bg-white text-background-3 p-2 outline-0 rounded-xs"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-bold">
              Upload your CV <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              className="bg-white text-background-3 p-2 outline-0 rounded-xs"
            />
          </div>
        </form>

        <button className="cursor-pointer uppercase bg-cyan-500 text-white hover:bg-cyan-600 transition-colors px-6 py-3 rounded-xs font-semibold text-sm">
          Submit
        </button>
      </motion.div>
    </div>
  );
}
