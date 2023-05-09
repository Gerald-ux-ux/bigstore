import { useState, useEffect } from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Icons from "./Icons";
import Cartegories from "./Cartegories";
import TopCategories from "./TopCategories";

function Landing() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Products fetch
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }

    fetchData(); // <-- add this line
  }, []);

  // Categories fetch
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex  flex-col w-11/12 ">
      <Carousel />
      <Icons />
      <TopCategories />
      <Cartegories />
      {/* <div className="absolute bottom-0 left-0 w-3/12 h-0.5 bg-[#EF363A]"></div> */}

      {/* Mapped data */}
      {/* <div className="flex bg-[#F5F5F5] mt-6 ">
        <div>
          {categories.map((category) => (
            <li key={category.node.slug}>
              <h2>{category.node.slug}</h2>
              <ul>
                {category.node.products.edges.map((product) => (
                  <li key={product.node.id}>
                    <h3>{product.node.name}</h3>
                    <p>
                      {product.node.pricing.priceRange.start.gross.amount}{" "}
                      {product.node.pricing.priceRange.start.gross.currency}
                    </p>
                    <p>{product.node.pricing.onSale ? 'On sale' : 'Not on sale'}</p>
                    <div>
                      {product.node.images.map((image) => (
                        <img
                          key={image.url}
                          src={image.url}
                          alt={product.node.name}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </div>
      </div> */}

      {/* All Products */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-4 lg:px-0">
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
      <div className="my-8">
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
