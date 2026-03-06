import Image from "next/image";

import ourMission from "../assets/our-mission.png";

export function Mission() {
  return (
    <div className="p-16 bg-background-2 flex flex-col items-center justify-center gap-8 rounded-2xl text-center">
      <Image
        src={ourMission}
        alt="Mission"
        width={200}
        height={200}
        className="size-42 object-cover"
      />

      <h2 className="uppercase font-semibold tracking-widest text-3xl">
        Our Mission
      </h2>

      <div className="h-1.5 w-32 bg-white"></div>

      <p className="text-sm md:text-base">
        Tocco France’s mission is to help you to realize your vision by
        accessing unique, exquisite luxury switches and sockets. Elegant,
        multifunctional switches and sockets are gorgeous in style and ideally
        tailored to your demands for modern life.
      </p>
    </div>
  );
}
