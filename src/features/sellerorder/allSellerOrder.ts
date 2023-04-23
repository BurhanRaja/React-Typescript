import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllSellerOrder } from "../../api/sellerorder";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  sellerorders: any;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  sellerorders: [],
} as InitialState;

export const getAllSellerOrderThunk = createAsyncThunk(
  "sellerorder/all",
  async () => {
    let response = await getAllSellerOrder();
    return response;
  }
);

const allSellerOrderSlice = createSlice({
  name: "sellerorder",
  initialState,
  reducers: {
    clearAllSellerOrderState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSellerOrderThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSellerOrderThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.sellerorders = payload.sellerOrders;
      })
      .addCase(getAllSellerOrderThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearAllSellerOrderState } = allSellerOrderSlice.actions;

export default allSellerOrderSlice.reducer;
