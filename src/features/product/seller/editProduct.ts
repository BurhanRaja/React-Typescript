import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateProduct } from "../../../api/seller/products";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const editProductThunk = createAsyncThunk(
  "editProduct/updateProduct",
  async (id: string, data: any) => {
    let response = await updateProduct(id, data);
    return response;
  }
);

const editProductSlice = createSlice({
  name: "editProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editProductThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProductThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(editProductThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
