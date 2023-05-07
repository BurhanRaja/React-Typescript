import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleProduct } from "../../../api/product";

interface InitialState {
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  product: any;
}

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  product: {},
} as InitialState;

export const singleProductThunk = createAsyncThunk(
  "singleProduct/get",
  async (id: string | undefined) => {
    let response = await getSingleProduct(id);
    return response;
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    clearSingleProductState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleProductThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singleProductThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = payload;
      })
      .addCase(singleProductThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearSingleProductState } = singleProductSlice.actions;

export default singleProductSlice.reducer;
