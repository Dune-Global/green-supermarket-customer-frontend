"use client";

import { useState } from "react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { sideMenuItems } from "@/data/side-menu";

type Props = {};

const SideMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="w-full relative lg:hidden">
        <button
          className="flex flex-col absolute right-0 top-[-5.28rem] items-center justify-center z-20 lg:hidden"
          onClick={handleClick}
        >
          <span
            className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-gray-900 block h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        {isOpen && (
          <div className="fixed flex flex-col py-10 border-2 border-green-400 bg-gray-0 shadow-lg rounded-lg items-center justify-center top-0 left-0 right-0 z-10">
            <div className="flex flex-col gap-9 py-3">
              {sideMenuItems.map((item) => (
                <div key={item.id}>
                  <Link
                    href={item.path}
                    className={`flex gap-2 items-center ${
                      pathName === item.path && "text-green-400"
                    }`}
                  >
                    <item.icon
                      size={22}
                      strokeWidth={2}
                      className="text-gray-200 w-22"
                    />
                    <h2>{item.description}</h2>
                  </Link>
                </div>
              ))}
              <Link href={"/"} className="flex gap-2 items-center">
                <LogOut size={22} strokeWidth={2} className="text-gray-200" />
                <h2>Sign Out</h2>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="hidden lg:flex flex-col border-2 border-gray-50 rounded-lg md:w-[18rem] sm:max-w-full">
        <div className="flex items-center p-6">
          <h1 className="text-gray-900 font-medium text-xl">Navigation</h1>
        </div>
        <div className="flex flex-col">
          {sideMenuItems.map((item) => (
            <Link key={item.id} href={item.path} className="py-[1px]">
              <div
                className={`p-6 flex items-center gap-3 border-l-4 border-gray-0 hover:bg-gray-50 hover:border-gray-50 ${
                  pathName === item.path && "bg-gray-50 !border-green-400"
                }`}
              >
                <item.icon
                  size={22}
                  strokeWidth={2}
                  className="text-gray-200 "
                />
                <h2 className="text-gray-600">{item.description}</h2>
              </div>
            </Link>
          ))}
          <Link href={"/"} className="py-[1px]">
            <div
              className={`p-6 flex gap-3 border-l-4 border-gray-0 hover:bg-gray-50 hover:border-gray-50`}
            >
              <LogOut size={22} strokeWidth={2} className="text-gray-200" />
              <h2 className="text-gray-600">Sign Out</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
