import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProduct } from "../../../api/seller/products";

let initialState = {
  isLoading: false,
  isError: false,
  success: false,
  message: "",
};

export const addProductThunk = createAsyncThunk("", async (data: Object) => {
  let response = await addProduct(data);
  return response;
});

const addProductSlice = createSlice({
  name: "addproduct",
  initialState,
  reducers: {
    clearState: () => {
      return initialState;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(addProductThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProductThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.success = true;
        state.message = payload.message;
      })
      .addCase(addProductThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearState } = addProductSlice.actions;

export default addProductSlice.reducer;
