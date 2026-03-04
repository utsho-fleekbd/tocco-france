import { useState } from "react";
import { PiX } from "react-icons/pi";
import "@rc-component/drawer/assets/index.css";
import RCDrawer, { Placement } from "@rc-component/drawer";

export type TriggerProp = {
  onSwitch: () => void;
};

export type DrawerProp = {
  trigger: React.FC<TriggerProp>;
  title: string;
  placement: Placement;
  width: string | number;
  children: React.ReactNode;
};

export function Drawer({
  trigger,
  title,
  placement,
  width,
  children,
}: DrawerProp) {
  const [open, setOpen] = useState(false);

  const Trigger = trigger;

  const closeDrawer = () => setOpen(false);
  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <>
      <RCDrawer
        open={open}
        onClose={closeDrawer}
        placement={placement}
        width={width}
        maskClosable
        keyboard
        className="bg-background-2 text-text min-h-screen"
        motion={{
          motionName: "rc-drawer-motion",
          motionAppear: true,
        }}
      >
        {/* Drawer Header */}
        <div className="flex p-4 items-center justify-between border-b border-gray-500">
          <h3 className="text-xl font-bold">{title}</h3>
          <button
            onClick={closeDrawer}
            aria-label="Close drawer"
            className="cursor-pointer"
          >
            <PiX className="text-xl" />
          </button>
        </div>

        <div className="p-12">{children}</div>
      </RCDrawer>

      <Trigger onSwitch={toggleDrawer} />
    </>
  );
}
