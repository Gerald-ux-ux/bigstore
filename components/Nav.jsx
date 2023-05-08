import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

import Link from "next/link";

const Categories = [
  {
    name: "Phone & Tablets",
    subcategories: [
      "Apple",
      "Samsung",
      "Huwaei",
      "Google",
      "Infinix",
      "Tecno",
      "Xiaomi",
      "Motorola",
    ],
  },
  {
    name: "Televisions",
    subcategories: ["LED TVs", "Smart TVs", "OLED TVs"],
  },
  {
    name: "Audio & Sound",
    subcategories: ["Speakers", "Headphones", "Soundbars"],
  },
  {
    name: "Computers & Laptops",
    subcategories: ["Laptops", "Desktops", "Gaming PCs"],
  },
  {
    name: "Gaming consoles",
    subcategories: ["PlayStation", "Xbox", "Nintendo"],
  },
  {
    name: "Kitchen & Home",
    subcategories: ["Appliances", "Cookware", "Home decor"],
  },
  {
    name: "Accessories",
    subcategories: ["Phone cases", "Chargers", "Cables"],
  },
  {
    name: "Sale",
    subcategories: ["Deals", "Clearance", "Refurbished"],
  },
];

function Nav() {
  const [openCategory, setOpenCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const toggleSubmenu = (index) => {
    if (openCategory === index) {
      setOpenCategory(null);
    } else {
      setOpenCategory(index);
    }
  };

  return (
    <div
      className={
        isOpen
          ? "flex-col items-center w-full block sm:flex absolute top-16 left-0 right-0 bottom-0 rounded-t-lg bg-[#F5F5F5]"
          : " flex-col w-10/12 p-2 justify-between lg:flex "
      }
    >
      <div className="block sm:hidden  mt-1">
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-[#1C1C1C]" onClick={toggle} />
        ) : (
          <Bars3Icon className="h-6 w-6 text-[#1C1C1C]" onClick={toggle} />
        )}
      </div>
      {/* Categories */}
      <ul className="relative justify-between cursor-pointer flex flex-col lg:flex-row">
        {Categories.map((category, index) => (
          <li
            key={category.name}
            className="bg-[#D9E0E5] rounded-full flex mt-1 p-2"
          >
            <div
              onClick={() => toggleSubmenu(index)}
              className="flex items-center"
            >
              <span className="mr-1">{category.name}</span>
              {openCategory === index ? (
                <ChevronUpIcon className="h-6 w-6" />
              ) : (
                <ChevronDownIcon className="h-6 w-6" />
              )}
            </div>
            {openCategory === index && (
              <ul className="absolute top-full  w-4/12 bg-white rounded-2xl py-1 px-2">
                {category.subcategories.map((subcategory) => (
                  <li className="p-1" key={subcategory}>
                    <Link href={`/${subcategory}`}>{subcategory}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
