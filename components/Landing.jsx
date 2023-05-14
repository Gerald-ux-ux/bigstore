import { useState, useEffect } from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Icons from "./Icons";
import Cartegories from "./Cartegories";
import TopCategories from "./TopCategories";
import Products from "./Products";
import BigstorePartners from "./BigstorePartners";
import SalesCategories from "./SalesCategories";
import BigstoreHeadphones from "./BigstoreHeadphones";
import NewArivals from "./NewArivals";

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
      <NewArivals />
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
      <Products />
      <BigstoreHeadphones />
      <button class="text-sm p-4 mb-4 rounded-full text-[#EC1A57] md:text-white space-y-2  mx-auto  md:bg-[#EC1A57]  mt-6  md:w-1/2 lg:w-2/12">
        <a href="/products" className="font-semibold">
          VIEW ALL DEALS
        </a>
      </button>
      <SalesCategories />

      <BigstorePartners />
      <Footer />
    </div>
  );
}

export default Landing;
