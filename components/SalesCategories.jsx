import React, { useEffect, useState } from "react";
import Products from "./Products";
import SaleProducts from "./SaleProducts";

const categories = [
  {
    name: "AUDIO SPEAKERS",
  },
  {
    name: "DIGITAL CAMERAS",
  },
  {
    name: "HOME APPLIANCES",
  },
];
function SalesCategories() {
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
    <div className="md:flex hidden md:flex-col">
      <div className="flex flex-row md:items-center md:justify-start space-x-4 border-b ">
        <p className="text-xl text-center  font-semibold underline-offset-8 underline decoration-2 decoration-[#EC1A57] ">
          BIGSTORE SALE
        </p>
        <div className="flex overflow-x-auto overflow-hidden  ">
          {categories.map((category) => (
            <ul
              className={`px-2 py-1 rounded-md ${
                selectedCategory === category
                  ? "text-[#EF363A] cursor-pointer font-semibold  text-sm"
                  : "font-semibold cursor-pointer text-sm"
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
      <SaleProducts />
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

export default SalesCategories;
