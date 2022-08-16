import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Product {
  id: number;
  title: string;
  price: number;
  stock: boolean;
}

export interface ProductsState {
  list: number[];
  storage: Record<number, Product>;
}

// normalize.js
// createEntityAdapter
const initialState: ProductsState = {
  list: [1, 2, 3],
  storage: {
    1: {
      id: 1,
      title: "First product",
      price: 100,
      stock: true,
    },
    2: {
      id: 1,
      title: "Second product",
      price: 200,
      stock: false,
    },
    3: {
      id: 1,
      title: "Third product",
      price: 300,
      stock: false,
    },
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    update: (state) => {
      state = { ...initialState };
    },
  },
});

export const { update } = productsSlice.actions;

export const products = (state: RootState) => state.products;

export const selectList = (state: RootState) => {
  console.log("selectList");

  return state.products.list;
};
export const selectModifiedList = (state: RootState) => {
  console.log("selectModifiedList");

  return state.products.list.map((el) => el);
};
export const selectCount = (state: RootState) => state.products.list.length;
export const selectTotal = (state: RootState) => {
  console.log("selectTotal");

  return state.products.list.reduce(
    (acc, itemId) => acc + state.products.storage[itemId].price,
    0
  );
};
export const selectById = (id: number) => (state: RootState) => {
  console.log("selectById");

  return state.products.storage[id];
};

export const selectModifiedListMemoized = createSelector(selectList, (list) =>
  list.map((el) => el)
);
export const selectByIdMemoized = (id: number) =>
  createSelector(products, (products) => products.storage[id]);

export const selectByArgIdMemoized = createSelector(
  [products, (_state, id) => id],
  (products, id) => {
    console.log('selectByArgIdMemoized', id);
    
    return products.storage[id]
  }
);

export default productsSlice.reducer;
