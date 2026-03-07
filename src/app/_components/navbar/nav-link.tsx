"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLinkProp = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function NavLink({ href, children, className }: NavLinkProp) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "text-base font-semibold uppercase hover:text-gray-400 transition-colors duration-300",
        href === pathname ? "text-gray-300" : "text-white",
        className,
      )}
    >
      {children}
    </Link>
  );
}
