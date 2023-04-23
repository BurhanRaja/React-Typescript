import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleSellerOrder } from "../../api/sellerorder";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  sellerorder: any;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  sellerorder: {},
} as InitialState;

export const getSingleSellerOrderThunk = createAsyncThunk(
  "",
  async (id: string | undefined) => {
    let response = await getSingleSellerOrder(id);
    return response;
  }
);

const singleSellerOrderSlice = createSlice({
  name: "singleSellerOrder",
  initialState,
  reducers: {
    clearSingleSellerOrderState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleSellerOrderThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleSellerOrderThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.sellerorder = payload.orderdetails;
      })
      .addCase(getSingleSellerOrderThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearSingleSellerOrderState } = singleSellerOrderSlice.actions;

export default singleSellerOrderSlice.reducer;
