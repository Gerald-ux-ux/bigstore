import BigstorePartners from "@/components/BigstorePartners";
import BrandPromises from "@/components/BrandPromises";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

function shoppingCart() {
  const [cartItems, showCartItems] = useState([]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-11/12 justify-center items-center">
        {cartItems && cartItems.length === 0 ? (
          <>
            <div className=" flex flex-col ">
              <div className="mt-4 flex   justify-evenly">
                <img
                  src="/images/Artwork.png"
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <p className="font-semibold text-center mb-2  text-4xl ">
                Cart is empty
              </p>
              <p className="text-xl text-center ">
                Looks like you haven’t added any items to your cart
              </p>
            </div>
            <button class="text-sm p-2 rounded-full text-white  mx-auto font-medium bg-[#EF363A] mt-6 sm:w-1/2 lg:w-1/3">
              <a href="/">Continue Shopping</a>
            </button>
          </>
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
