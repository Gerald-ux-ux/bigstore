import React, { useEffect, useState } from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import Footer from "@/components/Footer";
import BigstorePartners from "@/components/BigstorePartners";
import Navbar from "@/components/Navbar";

function AllProducts() {
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
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 lg:px-0">
        {products.map((product) => (
          <div
            key={product.node.id}
            className="bg-white shadow rounded-2xl p-4"
          >
            {product.node.thumbnail && (
              <img
                key={product.node.thumbnail.url}
                src={product.node.thumbnail.url}
                alt={product.node.name}
                className="w-full mb-4 object-contain"
              />
            )}
            <div className="flex items-center">
              <div className="rounded-full h-8 w-8   bg-[#D9E0E5]">
                <HeartIcon className="h-6 w-6 text-[#EF363A]" />
              </div>
              <div className="rounded-full h-8 w-8 bg-[#D9E0E5] ">
                <ShoppingCartIcon className="h-6 w-6 text-[#EF363A]" />
              </div>
            </div>
            <h2 className="text-lg font-medium">{product.node.name}</h2>
            <p className="text-sm mb-2">{product.node.category.name}</p>
            <p className="text-lg font-medium">
              Price: {product.node.pricing.priceRange.start.gross.amount}{" "}
              {product.node.pricing.priceRange.start.gross.currency}
            </p>
          </div>
        ))}
      </div>
      <BigstorePartners />
      <Footer />
    </div>
  );
}

export default AllProducts;
