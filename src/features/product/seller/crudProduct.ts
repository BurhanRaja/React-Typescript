import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../../api/seller/products";

let initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const addProductThunk = createAsyncThunk(
  "crudproduct/add",
  async (data: Object) => {
    let response = await addProduct(data);
    return response;
  }
);

type updateProductParams = {
  id: string | undefined;
  data: any;
};

export const editProductThunk = createAsyncThunk(
  "crudproduct/update",
  async ({ id, data }: updateProductParams) => {
    let response = await updateProduct(id, data);
    return response;
  }
);

export const deleteProductThunk = createAsyncThunk("", async (id: string) => {
  let response = await deleteProduct(id);
  return response;
});

const crudProductSlice = createSlice({
  name: "crudproduct",
  initialState,
  reducers: {
    clearProductState: () => {
      return initialState;
    },
  },
  extraReducers: (build) => {
    build
      // Add Product
      .addCase(addProductThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProductThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addProductThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // Edit Product
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
      })
      // Delete Product
      .addCase(deleteProductThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProductThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteProductThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearProductState } = crudProductSlice.actions;

export default crudProductSlice.reducer;
