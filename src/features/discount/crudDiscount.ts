import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDiscount,
  deleteDiscount,
  updateDiscount,
} from "../../api/seller/discount";

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

export const addDiscountThunk = createAsyncThunk(
  "crudDicount/add",
  async (data: string) => {
    const response = await addDiscount(data);
    return response;
  }
);

type updateDiscountParams = {
  id: string;
  data: string;
};

export const updateDiscountThunk = createAsyncThunk(
  "crudDiscount/update",
  async ({ id, data }: updateDiscountParams) => {
    const response = await updateDiscount(id, data);
    return response;
  }
);

export const deleteDiscountThunk = createAsyncThunk(
  "crudDiscount/delete",
  async (id: string) => {
    const response = await deleteDiscount(id);
    return response;
  }
);

const crudDiscountSlice = createSlice({
  name: "crudDiscount",
  initialState,
  reducers: {
    clearDiscountState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addDiscountThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDiscountThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addDiscountThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(updateDiscountThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDiscountThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateDiscountThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(deleteDiscountThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDiscountThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteDiscountThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = false;
      });
  },
});

export const { clearDiscountState } = crudDiscountSlice.actions;

export default crudDiscountSlice.reducer;
