import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...product, qty: 1 }],
        };
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== itemId),
      };
    },
    decreaseItemQty: (state, action) => {
      const itemId = action.payload;
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === itemId && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };
    },
  },
});

export const { addItem, removeItem, decreaseItemQty } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
