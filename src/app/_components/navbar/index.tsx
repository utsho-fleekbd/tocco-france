"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { LuSearch } from "react-icons/lu";

import { NAVBAR_SCROLL_HEIGHT } from "@/utils/consts";
import { Logo } from "@/components/ui/logo";
import { NavList, navLinks } from "./nav-list";
import { ActionList } from "./actions/action-list";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { LuMenu } from "react-icons/lu";
import { NavLink } from "./nav-link";
import { MobileActions } from "./actions/mobile-actions";
import { Cart } from "./actions/cart";
import { AccountAlt } from "./actions/account-alt";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > NAVBAR_SCROLL_HEIGHT);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 w-full z-50 flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? `py-px px-4 ${pathname !== "/" ? "bg-background" : "bg-navbar"} bg-opacity-80 backdrop-filter backdrop-blur-md shadow-md`
            : `px-8 ${pathname !== "/" ? "py-1 lg:py-3" : "py-2 lg:py-6"} bg-transparent`,
        )}
      >
        <div className="w-full flex items-center justify-between">
          <Logo
            className={clsx(
              scrolled ? "scale-75" : "scale-100",
              "hidden lg:block",
            )}
          />

          <NavList />

          <ActionList />

          <div className="w-full flex lg:hidden items-center justify-between gap-4">
            {/* hamburger for small screens */}
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <button className="lg:hidden p-2 rounded text-white hover:text-gray-300">
                  <LuMenu className="text-2xl" />
                </button>
              </DrawerTrigger>

              <DrawerContent>
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                >
                  <div className="relative mx-4 py-4">
                    <input
                      type="text"
                      className="text-white p-4 text-xl outline-0"
                      placeholder="Search for Product"
                      autoFocus
                    />
                    <LuSearch
                      size={24}
                      className="absolute top-1/2 right-0 -translate-y-1/2"
                    />
                  </div>

                  <ul className="flex flex-col gap-4">
                    {navLinks.map((link, i) => (
                      <li
                        key={i}
                        className="pb-4 border-b border-gray-700 w-full"
                      >
                        <NavLink href={link.href} className="px-6">
                          {link.children}
                        </NavLink>
                      </li>
                    ))}

                    <li className="pb-4 border-b border-gray-700 w-full">
                      <AccountAlt />
                    </li>
                  </ul>
                </motion.div>
              </DrawerContent>
            </Drawer>

            <Logo className={clsx(scrolled ? "scale-75" : "scale-100")} />

            <Cart />
          </div>
        </div>
      </nav>

      <MobileActions />
    </>
  );
}
