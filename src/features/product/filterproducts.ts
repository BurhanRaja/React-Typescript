import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../api/product";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  products: Array<any>;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  products: [],
} as InitialState;

interface FilterThunk {
  pCat: string | undefined;
  cat?: string;
  subcat?: string;
  price?: string;
  ratings?: string;
  company?: string;
}

export const getFilteredProductsThunk = createAsyncThunk(
  "filteredProduct/get",
  async ({ pCat, cat, subcat, price, ratings, company }: FilterThunk) => {
    let response = await getAllProducts(
      pCat,
      cat,
      subcat,
      price,
      ratings,
      company
    );

    return response;
  }
);

const filterProductSlice = createSlice({
  name: "filteredProduct",
  initialState,
  reducers: {
    clearFilteredProductState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilteredProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFilteredProductsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload.products;
      })
      .addCase(getFilteredProductsThunk.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});


export const {clearFilteredProductState} = filterProductSlice.actions

export default filterProductSlice.reducer;