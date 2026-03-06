import Image from "next/image";

import ourVision from "../assets/our-vision.png";

export function Vision() {
  return (
    <div className="p-16 bg-background-2 flex flex-col items-center justify-center gap-8 rounded-2xl text-center">
      <Image
        src={ourVision}
        alt="Mission"
        width={200}
        height={200}
        className="size-42 object-cover"
      />

      <h2 className="uppercase font-semibold tracking-widest text-3xl">
        Our Vision
      </h2>

      <div className="h-1.5 w-32 bg-white"></div>

      <p className="text-sm md:text-base">
        Making your dream home is the first step to living your greatest life.
        To suit your preferences, we provide a great selection of switches and
        sockets in both vintage and fascinating styles. By offering premium
        consumers with design, quality, and service, we establish Tocco France
        as the most valuable brand in the world. We do this by designing sockets
        and switches with your needs in mind.
      </p>
    </div>
  );
}
