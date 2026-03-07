import Link from "next/link";
import { AiOutlineShop } from "react-icons/ai";

export function Shop({ showLabel = false }: { showLabel?: boolean }) {
  return (
    <Link
      href="/switch-socket"
      className="flex flex-col items-center gap-1 cursor-pointer"
    >
      <AiOutlineShop className="text-2xl hover:text-gray-500 transition-colors duration-300" />
      {showLabel && <p className="text-sm font-semibold">Shop</p>}
    </Link>
  );
}
