import Image from "next/image";

import chairman from "../assets/chairman.png";
import shakingHands from "../assets/shaking-hands.jpg";

export function CEO() {
  return (
    <div className="relative flex items-center justify-center h-125 max-h-[75vh] w-full overflow-hidden rounded-2xl">
      <Image
        src={shakingHands}
        alt="Eiffel Tower"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-[#143f4f]/75"></div>
      <div className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-black/25"></div>

      <div className="w-full flex flex-col items-center justify-center gap-6 z-10 text-center">
        <Image
          src={chairman}
          alt="Mission"
          width={200}
          height={200}
          className="size-42 object-cover"
        />

        <h2 className="uppercase font-semibold tracking-widest text-3xl">
          Message from CEO
        </h2>

        <p className="text-sm md:text-lg max-w-4/6">
          Don’t settle for a home that doesn’t suit your personality and
          preferences. Our Fusion line of switches and sockets broadens this
          selection, enabling you to turn your room into the refuge of your
          dreams. Shop with us and see the difference that Tocco France can
          make.
        </p>
      </div>
    </div>
  );
}
