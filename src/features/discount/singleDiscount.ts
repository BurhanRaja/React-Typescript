import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleDiscount } from "../../api/seller/discount";

interface InitialState {
  discount: any;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const initialState = {
  discount: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
} as InitialState;

export const getSingleDiscountThunk = createAsyncThunk(
  "singleDiscount/get",
  async (id: string | undefined) => {
    const response = await getSingleDiscount(id);
    return response;
  }
);

const singleDiscountSlice = createSlice({
  name: "singleDiscount",
  initialState,
  reducers: {
    clearSingleDiscountState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleDiscountThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleDiscountThunk.fulfilled, (state, { payload }) => {
        state.discount = payload.discount;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getSingleDiscountThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearSingleDiscountState } = singleDiscountSlice.actions;

export default singleDiscountSlice.reducer;
