import Link from "next/link";
import React, { useEffect, useState } from "react";

const categories = [
  {
    name: "SMARTPHONES",
  },
  {
    name: "TELEVISIONS",
  },
  {
    name: "SOUND SYSTEMS",
  },
  {
    name: "HOME THEATERS",
  },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Set the first category as selected when the component mounts
    setSelectedCategory(categories[0]);
  }, []);

  useEffect(() => {
    // Fetch data from the API and filter it based on the selected category
    fetch(``)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [selectedCategory]);

  return (
    <div className="flex flex-row md:items-center items-center md:justify-start space-x-4 border-b mb-4 mt-2 ">
      <p className="md:text-xl text-xs font-semibold whitespace-nowrap underline  decoration-2 underline-offset-8  decoration-[#EC1A57] ">
        BIGSTORE ELECTRONICS
      </p>
      <div className="flex overflow-x-auto overflow-hidden space-x-2 ">
        {categories.map((category) => (
          <ul
            className={`px-2 py-1 rounded-md ${
              selectedCategory === category
                ? "text-[#EF363A] cursor-pointer font-semibold text-sm "
                : "font-semibold    cursor-pointer text-sm"
            }`}
            key={category.name}
            style={{ whiteSpace: "nowrap" }}
            onClick={() => setSelectedCategory(category)}
          >
            {category.name}
          </ul>
        ))}
      </div>

      <ItemsList items={items} />
    </div>
  );
}

function ItemsList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Categories;
