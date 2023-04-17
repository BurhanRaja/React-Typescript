import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCartTotal } from "../../api/user/cart";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  totalPrice: number;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  totalPrice: 0,
} as InitialState;

export const getCartTotalThunk = createAsyncThunk("", async () => {
  let response = await getCartTotal();
  return response;
});

const totalSlice = createSlice({
  name: "cartTotal",
  initialState,
  reducers: {
    clearCartTotal: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartTotalThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartTotalThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.totalPrice = payload.totalPrice;
      })
      .addCase(getCartTotalThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearCartTotal } = totalSlice.actions;

export default totalSlice.reducer;
