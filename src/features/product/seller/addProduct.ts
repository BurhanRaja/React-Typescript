import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProduct } from "../../../api/seller/products";

let initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const addProductThunk = createAsyncThunk("", async (data: Object) => {
  let response = await addProduct(data);
  return response;
});

const addProductSlice = createSlice({
  name: "addproduct",
  initialState,
  reducers: {
    clearProductState: () => {
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
        state.isSuccess = true;
      })
      .addCase(addProductThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearProductState } = addProductSlice.actions;

export default addProductSlice.reducer;
