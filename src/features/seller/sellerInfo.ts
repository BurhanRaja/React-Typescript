import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSellerInfo } from "../../api/seller/sellerinfo";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  sellerInfo: any;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  sellerInfo: {},
} as InitialState;

export const getSellerInfoThunk = createAsyncThunk(
  "sellerInfo/get",
  async () => {
    let response = await getSellerInfo();
    return response;
  }
);

const sellerInfoSlice = createSlice({
  name: "sellerInfo",
  initialState,
  reducers: {
    clearSellerInfo: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSellerInfoThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSellerInfoThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.sellerInfo = payload?.info;
      })
      .addCase(getSellerInfoThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearSellerInfo } = sellerInfoSlice.actions;

export default sellerInfoSlice.reducer;
