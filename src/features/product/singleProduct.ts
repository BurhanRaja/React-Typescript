import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleProduct } from "../../api/product";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  product: any;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  product: {},
} as InitialState;

export const getSingleProductThunk = createAsyncThunk(
  "singleProduct/getSingleProduct",
  async (id: string | undefined) => {
    let response = await getSingleProduct(id);
    return response;
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    clearSingleProduct: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProductThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProductThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload?.product[0];
      })
      .addCase(getSingleProductThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearSingleProduct } = singleProductSlice.actions;

export default singleProductSlice.reducer;
