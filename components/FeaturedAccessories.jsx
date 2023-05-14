import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";

function FeaturedAccessories() {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="bg-[#222F3E] mt-4 p-4">
        <p className="text-white font-semibold text-lg text-center">
          BigStore Featured Accessories
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 border-2 gap-4 px-4 lg:px-0">
        {products.slice(0, 15).map((product) => (
          <div key={product.node.id} className="bg-white border-b p-4">
            {product.node.thumbnail && (
              <img
                key={product.node.thumbnail.url}
                src={product.node.thumbnail.url}
                alt={product.node.name}
                className="w-full mb-4 object-contain"
              />
            )}
            <h2 className="text-lg font-medium">{product.node.name}</h2>
            <p className="text-sm mb-2">{product.node.category.name}</p>
            <p className="text-lg font-medium">
              Price: {product.node.pricing.priceRange.start.gross.amount}{" "}
              {product.node.pricing.priceRange.start.gross.currency}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturedAccessories;
