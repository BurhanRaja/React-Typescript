import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateSeller } from "../../api/seller/seller";

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

export const updateSellerThunk = createAsyncThunk(
  "seller/update",
  async (data: any) => {
    let response = await updateSeller(data);
    return response;
  }
);

const crudSellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    clearCrudSeller: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateSellerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSellerThunk.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(updateSellerThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearCrudSeller } = crudSellerSlice.actions;

export default crudSellerSlice.reducer;
