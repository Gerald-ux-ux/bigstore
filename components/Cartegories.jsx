import Link from "next/link";
import React, { useEffect, useState } from "react";
import smartPhones from "../pages/";

const categories = [
  {
    name: "SMARTPHONES",
    path: "/smartPhones",
  },
  {
    name: "TELEVISIONS",
    path: "/televisions",
  },
  {
    name: "SOUND SYSTEMS",
    path: "/soundSystems",
  },
  {
    name: "HOME THEATERS",
    path: "/homeTheaters",
  },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  useEffect(() => {
    // Set the first category as selected when the component mounts
    setSelectedCategory(categories[0]);
  }, []);

  return (
    <div className="flex space-x-6 border-b pb-1">
      <p className="text-xl font-semibold">BIGSTORE ELECTRONICS</p>
      {categories.map((category) => (
        <ul
          className={`flex ${
            selectedCategory === category
              ? "text-[#EF363A] font-semibold text-sm"
              : "font-semibold text-sm"
          }`}
          key={category.name}
          onClick={() => setSelectedCategory(category)}
        >
          <Link href={category.path}>{category.name}</Link>
        </ul>
      ))}
    </div>
  );
}

export default Categories;
