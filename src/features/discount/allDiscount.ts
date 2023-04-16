import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllDiscount } from "../../api/seller/discount";

interface InitialState {
  discounts: Array<any>;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const initialState = {
  discounts: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
} as InitialState;

export const getAllDiscountThunk = createAsyncThunk(
  "allDiscount/getAll",
  async () => {
    const response = await getAllDiscount();
    return response;
  }
);

const allDiscountSlice = createSlice({
  name: "allDiscount",
  initialState,
  reducers: {
    clearAllDiscountState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDiscountThunk.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllDiscountThunk.fulfilled, (state, { payload }) => {
        state.discounts = payload.discounts;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getAllDiscountThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearAllDiscountState } = allDiscountSlice.actions;

export default allDiscountSlice.reducer;
