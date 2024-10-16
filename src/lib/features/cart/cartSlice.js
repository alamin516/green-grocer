import { createSlice } from "@reduxjs/toolkit";

// Load cart from sessionStorage or initialize as an empty array
const initialCart = JSON.parse(sessionStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
      // Save updated cart to sessionStorage
      sessionStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) state.splice(index, 1); // Remove item by index

      // Save updated cart to sessionStorage
      sessionStorage.setItem("cart", JSON.stringify(state));
    },

    updateQuantity: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      }

      // Save updated cart to sessionStorage
      sessionStorage.setItem("cart", JSON.stringify(state));
    },

    clearCart: (state) => {
      state.length = 0; // Clear the array in place

      // Save updated cart to sessionStorage
      sessionStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
