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

function HambugerMenu() {
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

  const close = () => {
    toggle();
  };


  return (
    <div>
      
    </div>
    // <div
    //   className={`h-screen w-3/4 bg-white fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out transform ${
    //     isOpen ? "translate-x-0" : "-translate-x-full"
    //   }`}
    // >
    //   <div className="block sm:hidden mt-1">
    //     {isOpen ? (
    //       <XMarkIcon className="h-6 w-6 text-[#1C1C1C]" onClick={toggle} />
    //     ) : (
    //       <Bars3Icon className="h-6 w-6 text-[#1C1C1C]" onClick={toggle} />
    //     )}
    //   </div>

    //   <div className="k">
    //     <div className="flex items-center justify-between p-4">
    //       <span className="text-xl font-bold">Menu</span>
    //       <div className="block sm:hidden  mt-1">
    //         <XMarkIcon className="h-6 w-6 text-[#1C1C1C]" onClick={toggle} />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="px-4">
    //     {Categories.map((category, index) => (
    //       <div key={category.name} className="py-2">
    //         <div className="flex items-center justify-between">
    //           <span className="text-lg font-bold">{category.name}</span>
    //           <button
    //             onClick={() => toggleSubmenu(index)}
    //             className="text-lg font-bold"
    //           >
    //             {index === isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
    //           </button>
    //         </div>
    //         {index === isOpen && (
    //           <ul className="pl-4">
    //             {category.subcategories.map((subcategory) => (
    //               <li className="py-2" key={subcategory}>
    //                 <Link href={`/${subcategory}`}>
    //                   <a className="text-lg">{subcategory}</a>
    //                 </Link>
    //               </li>
    //             ))}
    //           </ul>
    //         )}
    //       </div>
    //     ))}
    //     <div className="mt-4">
    //       <button
    //         onClick={toggle}
    //         className="w-full py-2 text-lg font-bold text-white bg-[#EF363A] rounded-full"
    //       >
    //         Continue Shopping
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default HambugerMenu;
