import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllOrders } from "../../api/orders";

interface InitialState {
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
  orders: Array<any>;
}

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  orders: [],
} as InitialState;

export const getAllOrderThunk = createAsyncThunk("allOrders/getall", async () => {
  let response = await getAllOrders();
  return response;
});

const allOrderSlice = createSlice({
  name: "allOrders",
  initialState,
  reducers: {
    clearAllOrdersState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrderThunk.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllOrderThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = payload.orders;
      })
      .addCase(getAllOrderThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearAllOrdersState } = allOrderSlice.actions;

export default allOrderSlice.reducer;
