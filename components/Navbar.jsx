import React, { useState } from "react";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
function Navbar() {



  return (
    <nav className="flex flex-col items-center  lg:flex-row lg:justify-center   w-full flex-wrap  p-2">
      <img
        src="/images/Bigstore Logo.png"
        alt="Bigstore Logo"
        className=" items-center "
        style={{ width: "150px", height: "50px" }}
      />
      <div className="  flex">
        <input
          type="search"
          id="search"
          className="bg-gray-100 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-full placeholder-gray-500 py-3 px-6 w-full"
          placeholder="Search for products"
        />
        <button
          type="button"
          className="text-sm font-medium bg-[#EF363A] justify-between text-white p-2 w-6/12 rounded-full"
          onClick={() => console.log("search")}
        >
          Search
        </button>
      </div>
      <div className="flex items-center">
        <MapPinIcon className="h-6 w-6 text-[#EF363A]   " />
        <h6 className="ml-1 text-[#666666] text-sm  font-semibold">
          Garden Estate
        </h6>
      </div>
      <div className="flex items-center  ">
        <HeartIcon className="h-6 w-6 text-[#8B96A5]  " />
        <ShoppingCartIcon className="h-6 w-6 text-[#8B96A5] " />
        <UserIcon className="h-6 w-6 text-[#8B96A5]" />
      </div>
    </nav>
  );
}

export default Navbar;
