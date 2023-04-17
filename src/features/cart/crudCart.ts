import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart } from "../../api/cart";
import { removeFromCart } from "../../api/cart";

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

export const addToCartThunk = createAsyncThunk(
  "crudCart/add",
  async (data: any) => {
    let response = await addToCart(data);
    return response;
  }
);

interface RemoveCartProps {
  id: string;
  itemId: string;
}

export const removeFromCartThunk = createAsyncThunk(
  "crudCart/remove",
  async ({ id, itemId }: RemoveCartProps) => {
    let response = await removeFromCart(id, itemId);
    return response;
  }
);

const crudCartSlice = createSlice({
  name: "crudCart",
  initialState,
  reducers: {
    clearCrudCartState: () => {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addToCartThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCartThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addToCartThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(removeFromCartThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromCartThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(removeFromCartThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearCrudCartState } = crudCartSlice.actions;

export default crudCartSlice.reducer;