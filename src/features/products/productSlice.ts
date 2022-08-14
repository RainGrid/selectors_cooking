import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Product {
  id: number;
  title: string;
  price: number;
  stock: boolean;
}

export interface ProductState {
  list: number[];
  storage: Record<number, Product>;
}

const initialState: ProductState = {
  list: [1, 2, 3],
  storage: {
    1: {
      id: 1,
      title: 'First product',
      price: 100,
      stock: true,
    },
    2: {
      id: 1,
      title: 'Second product',
      price: 200,
      stock: false,
    },
    3: {
      id: 1,
      title: 'Third product',
      price: 300,
      stock: false,
    },
  },
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    update: (state) => {
      state = { ...initialState };
    },
  },
});

export const { update } = productSlice.actions;

export const selectList = (state: RootState) => state.product.list;
export const selectCount = (state: RootState) => state.product.list.length;

export default productSlice.reducer;
