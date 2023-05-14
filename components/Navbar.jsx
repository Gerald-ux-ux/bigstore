import React, { useState } from "react";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ShoppingCart from "./ShoppingCart";
import DestktopMenu from "./DestktopMenu";
import HambugerMenu from "./HambugerMenu";

function Navbar() {
  const [openCategory, setOpenCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add item to cart
  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const onPress = () => {
    navigation.navigate("shoppingCart");
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const toggleSubmenu = (index) => {
    if (openCategory === index) {
      setOpenCategory(null);
    } else {
      setOpenCategory(index);
    }
  };

  const closeCart = () => {
    setShowCart(false);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-between max-w-8xl w-full flex-wrap p-2">
        {/* Desktop Menu */}
        <div className="flex items-center gap-3 lg:flex-row lg:justify-between w-11/12 flex-wrap p-2">
          <div className="flex items-center  my-4 sm:my-0">
            <img
              src="/images/Bigstore Logo (1).png"
              alt="Bigstore Logo"
              className="block sm:hidden  items-center"
            />

            {/* Show the second image on large screens */}

            <Link href="/">
              <img
                src="/images/Bigstore Logo.png"
                alt="Bigstore Logo"
                className="hidden sm:block items-center"
                style={{ width: "150px", height: "50px" }}
              />
            </Link>

            {/* Shopping cart icon */}
            <div className="flex right-8 absolute sm:hidden items-center">
              <HeartIcon className="h-5 w-5 text-[#8B96A5] mx-2" />
              <ShoppingCartIcon
                onClick={() => setShowCart(!showCart)}
                className="h-5 w-5 text-[#8B96A5] mx-2"
              />
              <ShoppingCart
                cart={cart}
                showCart={showCart}
                onCloseCart={closeCart}
              />

              <UserIcon className="h-5 w-5 text-[#8B96A5] mx-2" />
            </div>

            {/* Shopping cart sidebar */}
          </div>

          <div className="flex sm:w-6/12 justify-center">
            <input
              type="search"
              id="search"
              className="bg-gray-100 focus:border-red-500 focus:ring-1  focus:ring-red-500 rounded-full placeholder-gray-500 py-2 px-6 w-full"
              placeholder="Search for products"
            />
            <button
              type="button"
              className="text-sm ml-2 font-medium bg-[#EF363A] justify-between text-white p-2 w-4/12 rounded-full"
              onClick={() => console.log("search")}
            >
              Search
            </button>
          </div>
          <div className="hidden sm:flex justify-between space-x-4 items-center ">
            <div className="flex items-center">
              <MapPinIcon className="h-6 w-6 text-[#EF363A]" />
              <h6 className="ml-1 text-[#666666] text-sm font-semibold">
                Garden Estate
              </h6>
            </div>
            <div className="flex items-center">
              <HeartIcon className="h-6 w-6 text-[#8B96A5] cursor-pointer" />
              <div>
                <Link href='/shoppingCart'>
                  <ShoppingCartIcon
                    // onClick={() => setShowCart(!showCart)}
                    className="h-6 w-6 text-[#8B96A5] cursor-pointer"
                  />
                </Link>
              </div>
              <ShoppingCart cart={cart} showCart={showCart} />
              <UserIcon className="h-6 w-6 text-[#8B96A5] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Categories Menu */}
        <DestktopMenu />
        <HambugerMenu />
      </div>
    </>
  );
}

export default Navbar;
