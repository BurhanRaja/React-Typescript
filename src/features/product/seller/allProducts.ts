import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../../api/seller/products";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  products: any;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  products: [],
} as InitialState;

export const getAllSellerProductsThunk = createAsyncThunk(
  "sellerProducts/allProducts",
  async () => {
    let response = await getAllProducts();
    return response;
  }
);

const allProductSlice = createSlice({
  name: "sellerProducts",
  initialState,
  reducers: {
    clearAllSellerProductState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSellerProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSellerProductsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload?.products;
        state.isSuccess = action.payload?.success;
      })
      .addCase(getAllSellerProductsThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearAllSellerProductState } = allProductSlice.actions;

export default allProductSlice.reducer;
