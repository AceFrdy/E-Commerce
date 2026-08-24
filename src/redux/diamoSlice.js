import { createSlice } from "@reduxjs/toolkit";
// import { combineReducers } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";
// import { addToWishlist } from "./wishSlice";

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   wishlist: wishlistReducer,
// });

const initialState = {
  userInfo: [],
  products: [],
  
};

export const diamoSlice = createSlice({
  name: "diamo",
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
      const item = state.productsWishlist.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productsWishlist.push(action.payload);
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
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    addToCompare: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
  },
});

export const {
  addToCompare,
  addToCart,
  addToWishlist,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
} = diamoSlice.actions;
export default diamoSlice.reducer;
// export rootReducer
