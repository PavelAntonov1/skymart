import { createSlice } from "@reduxjs/toolkit";

const findProduct = (state, id) => {
  return state.products.findIndex((product) => product.id === id);
};

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    products: [],
    totalPrice: 0,
  },

  reducers: {
    setProductQuantity: (state, param) => {
      const { id, quantity } = param.payload;
      console.log(id, quantity);

      const idx = findProduct(state, id);
      const dif = quantity - state.products[idx].quantity;

      state.products[idx].quantity = quantity;
      state.totalPrice =
        dif < 0
          ? state.totalPrice - Math.abs(dif) * state.products[idx].price
          : state.totalPrice + Math.abs(dif) * state.products[idx].price;
    },

    addProduct: (state, param) => {
      const productToAdd = param.payload;

      const duplicateIndex = findProduct(state, productToAdd.id);

      if (duplicateIndex === -1) {
        state.products = [...state.products, productToAdd];
      }

      if (duplicateIndex !== -1) {
        state.products[duplicateIndex].quantity += productToAdd.quantity;
      }

      state.totalPrice += productToAdd.price * productToAdd.quantity;
    },

    removeProduct: (state, param) => {
      const id = param.payload;
      const idx = findProduct(state, id);

      state.totalPrice -=
        state.products[idx].price * state.products[idx].quantity;

      state.products = state.products.filter((product) => product.id !== id);
    },
  },
});

export const { setProductQuantity, addProduct, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
