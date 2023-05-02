import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addPayment } from "../../api/user/payment";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
} as InitialState;

export const addPaymentChargesThunk = createAsyncThunk(
  "payments/add",
  async (data: any) => {
    let response = await addPayment(data);
    return response;
  }
);

const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    clearPaymentState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPaymentChargesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPaymentChargesThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addPaymentChargesThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearPaymentState } = paymentSlice.actions;

export default paymentSlice.reducer;
