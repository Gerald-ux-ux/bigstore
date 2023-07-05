import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  decreaseItemQty,
  selectCartItems,
} from "@/slices/cartSlice";
import Cart from "@/components/Cart";

function ShoppingCart() {
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
    <div>
      <Navbar />
      <Cart />
    </div>
  );
}

export default ShoppingCart;
