import clsx from "clsx";
import Image from "next/image";

import toccoFrance from "@/assets/tocco-france.png";
import { NAVBAR_SCROLL_HEIGHT } from "@/utils/consts";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/">
      <Image
        src={toccoFrance}
        width={256}
        height={64}
        alt=""
        style={{ maxHeight: NAVBAR_SCROLL_HEIGHT }}
        className={clsx("h-full w-auto", className)}
      />
    </Link>
  );
}
