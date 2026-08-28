import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],
  productsWishlist: [],
  compare: [],
};

export const AstaSlice = createSlice({
  name: "Asta",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    addToWishlist: (state, action) => {
      if (!state.productsWishlist) {
        state.productsWishlist = [];
      }
      const item = state.productsWishlist.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productsWishlist.push(action.payload);
      }
    },
    deleteWishlistItem: (state, action) => {
      if (state.productsWishlist) {
        state.productsWishlist = state.productsWishlist.filter(
          (item) => item._id !== action.payload
        );
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
      if (state.productsWishlist) {
        state.productsWishlist = state.productsWishlist.filter(
          (item) => item._id !== action.payload
        );
      }
    },
    resetCart: (state) => {
      state.products = [];
    },
    addToCompare: (state, action) => {
      if (!state.compare) {
        state.compare = [];
      }
      const item = state.compare.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.compare.push(action.payload);
      }
    },
  },
});

export const {
  addToCompare,
  addToCart,
  addToWishlist,
  deleteWishlistItem,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
} = AstaSlice.actions;
export default AstaSlice.reducer;
