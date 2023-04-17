import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCart } from "../../api/cart";

interface InitialState {
  cart: any;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
} as InitialState;

export const getUserCartThunk = createAsyncThunk("userCart/get", async () => {
  let response = await getCart();
  return response;
});

const userCartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {
    clearUserCartState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserCartThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCartThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cart = payload.cart;
      })
      .addCase(getUserCartThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearUserCartState } = userCartSlice.actions;

export default userCartSlice.reducer;
