import BigstorePartners from "@/components/BigstorePartners";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { CardText } from "reactstrap";

function shoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Navbar />
      <div className="flex  flex-col w-11/12 ">
        {cartItems && cartItems.length === 0 ? (
          <div className="h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center space-y-6">
              <img
                src="/images/Artwork.png"
                alt=""
                style={{ width: "250px", height: "250px" }}
              />
              <p className="font-semibold text-4xl text-center">
                Cart is empty
              </p>
              <p className="text-xl text-center">
                Looks like you haven’t added any items to your cart
              </p>
              <button className="text-sm p-2 rounded-full text-white w-6/12 font-medium bg-[#EF363A] ">
                <a href="/">Continue Shopping</a>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          </div>
        )}
        <BigstorePartners />
        <Footer />
      </div>
    </>
  );
}

export default shoppingCart;
