import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllHomeProducts } from "../../../api/product";

interface InitialState {
  products: Array<any>;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
}

const initialState = {
  products: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
} as InitialState;

export const getAllHomeProductsThunk = createAsyncThunk("", async () => {
  const response = await getAllHomeProducts();
  return response;
});

const allUserProductsSlice = createSlice({
  name: "homeProducts",
  initialState,
  reducers: {
    clearAllProductsState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllHomeProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllHomeProductsThunk.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(getAllHomeProductsThunk.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { clearAllProductsState } = allUserProductsSlice.actions;

export default allUserProductsSlice.reducer;
