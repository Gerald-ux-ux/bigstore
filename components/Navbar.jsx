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
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="flex flex-col items-center  lg:flex-row lg:justify-center w-full flex-wrap  p-2">
        {/* Desktop Menu */}
        <div className="flex items-center  lg:flex-row lg:justify-evenly w-full flex-wrap  p-2">
          <div className="flex items-center space-x-4">
            <div className="block sm:hidden mt-2 ">
              {isOpen ? (
                <XMarkIcon
                  className="h-6 w-6 text-[#1C1C1C] "
                  onClick={toggle}
                />
              ) : (
                <Bars3Icon
                  className="h-6 w-6 text-[#1C1C1C] "
                  onClick={toggle}
                />
              )}
            </div>
            <img
              src="/images/Bigstore Logo (1).png"
              alt="Bigstore Logo"
              className=" items-center "
     
            />
            {/* <img
              src="/images/Bigstore Logo.png"
              alt="Bigstore Logo"
              className=" items-center "
              style={{ width: "150px", height: "50px" }}
            /> */}
          </div>

          <div className="flex justify-center ">
            <input
              type="search"
              id="search"
              className="bg-gray-100 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-full placeholder-gray-500 py-2 px-6  w-full"
              placeholder="Search for products"
            />
            <button
              type="button"
              className="text-sm ml-2 font-medium bg-[#EF363A] justify-between text-white p-2 w-4/12  rounded-full"
              onClick={() => console.log("search")}
            >
              Search
            </button>
          </div>

          <div className="flex  items-center">
            <MapPinIcon className="h-6 w-6 text-[#EF363A]   " />
            <h6 className="ml-1 text-[#666666] text-sm   font-semibold">
              Garden Estate
            </h6>
          </div>
          <div className="flex items-center  ">
            <HeartIcon className="h-6 w-6 text-[#8B96A5]  " />
            <ShoppingCartIcon className="h-6 w-6 text-[#8B96A5] " />
            <UserIcon className="h-6 w-6 text-[#8B96A5]" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}

      <nav
        className={
          isOpen
            ? "flex-col items-center w-full block sm:flex absolute top-16 left-0 right-0 bottom-0  bg-[#F5F5F5]"
            : "flex-col items-center w-full hidden sm:flex flex-wrap p-2g"
        }
      >
        <ul className="flex-col items-center justify-center space-y-4 ml-4 mt-4 mr-4 sm:space-y-8 sm:flex-row md:flex-wrap md:justify-center lg:flex lg:justify-center lg:space-x-4 xl:space-x-2">
          <li className="bg-[#D9E0E5] rounded-full flex p-3">
            <Link href="/">Phones & Tablets</Link>
            <ChevronDownIcon className="h-6 w-6" />
          </li>
          <li className="bg-[#D9E0E5] rounded-full flex p-3">
            <Link href="/">Televisions</Link>
            <ChevronDownIcon className="h-6 w-6" />
          </li>
          <li className="bg-[#D9E0E5] rounded-full flex p-3">
            <Link href="/">Audio & Sound</Link>
            <ChevronDownIcon className="h-6 w-6" />
          </li>
          <li className="bg-[#D9E0E5] rounded-full flex p-3">
            <Link href="/">Computers & Laptops</Link>
            <ChevronDownIcon className="h-6 w-6" />
          </li>
          <li className="bg-[#D9E0E5] rounded-full flex p-3">
            <Link href="/">Gaming Consoles</Link>
            <ChevronDownIcon className="h-6 w-6" />
          </li>
          <li className="bg-[#D9E0E5] rounded-full flex p-3">
            <Link href="/">Kitchen & Home</Link>
            <ChevronDownIcon className="h-6 w-6" />
          </li>
          <li className="bg-[#D9E0E5] rounded-full flex p-3">
            <Link href="/">Accessories</Link>
            <ChevronDownIcon className="h-6 w-6" />
          </li>
          <li className="bg-[#D9E0E5] rounded-full flex p-3">
            <Link href="/">Sale</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
