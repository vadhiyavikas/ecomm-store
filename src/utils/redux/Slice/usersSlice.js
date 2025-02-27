import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  cart: [], // Ensure cart is an empty array initially
  orders: [], // Store past orders
  wishlist: [], // ✅ New: Wishlist state
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loggedInUser(state, action) {
      state.profile = action.payload;
    },

    userCart(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        // ✅ If item exists, update quantity
        existingItem.quantity += quantity;
      } else {
        // ✅ If item is new, add to cart
        state.cart.push({ ...action.payload });
      }
    },

    updateCartQuantity(state, action) {
      const { id, type } = action.payload; // type: "increase" or "decrease"
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        if (type === "increase") {
          existingItem.quantity += 1;
        } else if (type === "decrease" && existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        }
      }
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    clearCart: (state) => {
      state.cart = [];
    },

    addOrderHistory: (state, action) => {
      state.orders.push(action.payload); // Save order details
    },

    // ✅ Add to Wishlist / Remove if already present
    toggleWishlist(state, action) {
      const product = action.payload;
      const exists = state.wishlist.some((item) => item.id === product.id);

      if (exists) {
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== product.id
        );
      } else {
        state.wishlist.push(product);
      }
    },

    // ✅ Clear Wishlist (Optional)
    clearWishlist(state) {
      state.wishlist = [];
    },
  },
});

// ✅ Selector for total cart price
export const selectCartTotal = (state) =>
  state.users.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export const selectWishlist = (state) => state.users.wishlist;
export const isProductInWishlist = (state, productId) =>
  state.users.wishlist.some((item) => item.id === productId);

export const {
  loggedInUser,
  userCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  addOrderHistory,
  toggleWishlist,
  clearWishlist,
} = usersSlice.actions;
export default usersSlice.reducer;
