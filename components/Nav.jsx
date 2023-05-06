import React, { useState } from "react";
import {
  ChevronDownIcon,
  HeartIcon,
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Nav() {
  return (
    <div className="">
      {/* Desktop Menu */}
      <div className="flex justify-center  tems-center">
        <div className="flex ">
          <img
            src="/images/Bigstore Logo.png"
            alt="Bigstore Logo"
            className="hidden  sm:block items-center"
            style={{ width: "150px", height: "50px" }}
          />
        </div>

        <div className="flex gap-2 w-full ">
          <input
            type="search"
            className="bg-gray-100  focus:border-red-500 focus:ring-1  focus:ring-red-500 rounded-full placeholder-gray-500 items-center p-2 px-6 w-full "
            placeholder="Search for products"
          />
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 w-4/12 rounded-full"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
