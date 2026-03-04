import Link from "next/link";
import { BsCartX } from "react-icons/bs";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

import { Drawer } from "../drawer";

export function Cart() {
  const itemCount = 0;

  return (
    <Drawer
      title="Shopping Cart"
      placement="right"
      width={400}
      trigger={({ onSwitch }) => (
        <button onClick={onSwitch} className="relative cursor-pointer">
          <PiShoppingCartSimpleLight className="text-2xl hover:text-gray-500 transition-colors duration-300" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-tertiary text-white text-xs px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
          )}
        </button>
      )}
    >
      <div className="flex flex-col h-full gap-8">
        <div className="flex-1 flex flex-col items-center gap-4">
          <BsCartX className="text-9xl text-gray-500" />
          <p className="font-bold">No products in the cart.</p>
        </div>

        <Link
          href="/switch-socket"
          className="mx-auto bg-tertiary py-2 px-4 rounded-lg hover:bg-red-700 transition text-sm uppercase"
        >
          Return to Shop
        </Link>
      </div>
    </Drawer>
  );
}
