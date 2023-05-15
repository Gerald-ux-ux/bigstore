import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function Products() {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/queries/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 lg:px-0">
      {products.slice(0, 20).map((product) => (
        <div key={product.node.id} className="bg-white shadow rounded-2xl p-4">
          {product.node.thumbnail && (
            <img
              key={product.node.thumbnail.url}
              src={product.node.thumbnail.url}
              alt={product.node.name}
              className="w-full mb-4 text-xs md:text-lg  object-contain"
            />
          )}
          <div className="flex items-center">
            <div className="rounded-full md:h-8 md:w-8  h-6 w-6 bg-[#D9E0E5]">
              <HeartIcon className="md:h-6 md:w-6 h-4 w-4 text-[#EF363A]" />
            </div>
            <div className="rounded-full md:h-8 md:w-8  h-6 w-6 bg-[#D9E0E5] ">
              <Link href={`/product/${product.id}`}>
                <ShoppingCartIcon className="md:h-6 md:w-6 h-4 w-4 text-[#EF363A]" />
              </Link>
            </div>
          </div>
          <h2 className="text-xs md:text-lg  font-medium">
            {product.node.name}
          </h2>
          <p className="text-sm	 font-medium  mb-2">
            {product.node.category.name}
          </p>
          <p className="text-xs md:text-lg  font-medium">
            {product.node.pricing.priceRange.start.gross.amount}{" "}
            {product.node.pricing.priceRange.start.gross.currency}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Products;
