import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { placeOrder } from "../../api/orders";

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

export const addOrderThunk = createAsyncThunk("", async (data: string) => {
  let response = await placeOrder(data);
  return response;
});

const crudOrderSlice = createSlice({
  name: "crudOrder",
  initialState,
  reducers: {
    clearCrudOrderState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrderThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addOrderThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addOrderThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearCrudOrderState } = crudOrderSlice.actions;

export default crudOrderSlice.reducer;
