import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSeller } from "../../api/seller/seller";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  seller: any;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  seller: {},
} as InitialState;

export const getSellerThunk = createAsyncThunk("seller/get", async () => {
  let response = await getSeller();
  return response;
});

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    clearSeller: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSellerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSellerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.seller = payload?.seller;
      })
      .addCase(getSellerThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearSeller } = sellerSlice.actions;

export default sellerSlice.reducer;
