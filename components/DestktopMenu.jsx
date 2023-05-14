import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { useState } from "react";

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

function DestktopMenu() {
    
  const [openCategory, setOpenCategory] = useState(null);
  const toggleSubmenu = (index) => {
    if (openCategory === index) {
      setOpenCategory(null);
    } else {
      setOpenCategory(index);
    }
  };
  return (
    <div className=" flex-col    md:w-11/12 mx-auto p-2 justify-between lg:flex hidden ">
      <ul className="relative justify-between  cursor-pointer flex flex-col lg:flex-row">
        {Categories.map((category, index) => (
          <li
            key={category.name}
            className="bg-[#D9E0E5] inline-flex text-xs  rounded-full mt-1 p-2"
          >
            <div
              onClick={() => toggleSubmenu(index)}
              className="flex items-center"
            >
              <span className="inline-flex items-center mr-1">
                {category.name}
              </span>
              {openCategory === index ? (
                <ChevronUpIcon className="h-6 w-6" />
              ) : (
                <ChevronDownIcon className="h-6 w-6" />
              )}
            </div>
            {openCategory === index && (
              <ul className="absolute top-full w-1/12 z-50 bg-white rounded-2xl py-1 px-2">
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

export default DestktopMenu;
