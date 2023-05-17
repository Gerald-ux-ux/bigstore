import React, { useState } from "react";
import {
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";

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

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [openCategory, setOpenCategory] = useState(null);
  const toggleSubmenu = (index) => {
    setOpenCategory((prevOpenCategory) =>
      prevOpenCategory === index ? null : index
    );
  };

  return (
    <div className="flex md:hidden flex-row items-center">
      <Bars3Icon className="h-6 w-6 text-[#1C1C1C]" onClick={toggle} />

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggle}
          ></div>
          <div className="fixed top-4 bottom-0 left-0 h-screen w-3/4 p-2 rounded-e-lg overflow-y-auto overflow-hidden bg-white shadow-lg z-50">
            <div className="flex mb-8 justify-between">
              <p className="text-2xl font-bold">Menu</p>
              <XMarkIcon className="h-6 w-6" onClick={toggle} />
            </div>
            <div className="flex space-y-8 flex-col">
              {Categories.map((category, index) => (
                <div className="" key={category.name}>
                  <div
                    className={`flex justify-between flex-row ${
                      openCategory === index
                        ? "border-b-0"
                        : "border-b border-[#0E101B]/30"
                    } text-sm font-normal items-center`}
                    onClick={() => toggleSubmenu(index)}
                  >
                    {category.name}
                    {openCategory === index ? (
                      <ChevronUpIcon className="h-6 w-6 text-[#0E101B]" />
                    ) : (
                      <ChevronRightIcon className="h-6 w-6 text-[#0E101B]" />
                    )}
                  </div>
                  {openCategory === index && (
                    <ul className="space-y-2 mt-4">
                      {category.subcategories.map((subcategory) => (
                        <li
                          key={subcategory}
                          className="text-xs list-disc ml-3 font-normal"
                        >
                          {subcategory}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <button className="text-sm p-2 rounded-full text-white mx-auto font-medium bg-[#EF363A] w-2/3 absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <a href="/">Continue Shopping</a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
