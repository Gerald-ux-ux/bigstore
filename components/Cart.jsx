import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  decreaseItemQty,
  selectCartItems,
} from "@/slices/cartSlice";
import Footer from "./Footer";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const add = (item) => {
    dispatch(addItem(item));
  };

  const remove = (item) => {
    dispatch(removeItem(item));
  };

  const decrease = (item) => {
    dispatch(decreaseItemQty(item));
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.qty * item.price;
    });
    return total;
  };

  return (
    <div className="flex justify-center items-center flex-col">
      {cartItems.length === 0 ? (
        <div>
          <div className="flex flex-col items-center justify-center md:space-y-10 space-y-4 mb-6 ">
            <img
              src="/images/Artwork.png"
              className="w-20 mt-8 h-20 md:w-40 md:h-40"
              alt="Cart is empty"
            />

            <p className="font-semibold text-center text-lg	 md:text-4xl">
              Cart is empty
            </p>
            <p className="md:text-xl text-sm font-normal text-center">
              Looks like you haven’t added any items to your cart
            </p>
            <button className="text-sm p-2 rounded-full text-white mx-auto font-medium bg-[#EF363A]  w-2/3">
              <a href="/">Continue Shopping</a>
            </button>
          </div>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => {
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>;
          })}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Cart;
