import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addOrder, verifyOrder } from "../../api/user/payment";

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

export const addPaymentOrdersThunk = createAsyncThunk(
  "payments/add",
  async (data: any) => {
    let response = await addOrder(data);
    return response;
  }
);

export const verifyPaymentOrdersThunk = createAsyncThunk(
  "payments/verify",
  async (data: any) => {
    let response = await verifyOrder(data);
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
      .addCase(addPaymentOrdersThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPaymentOrdersThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addPaymentOrdersThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(verifyPaymentOrdersThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyPaymentOrdersThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(verifyPaymentOrdersThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      ;
  },
});

export const { clearPaymentState } = paymentSlice.actions;

export default paymentSlice.reducer;
