import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addSellerInfo, updateSellerInfo } from "../../api/seller/sellerinfo";

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

export const addSellerInfoThunk = createAsyncThunk(
  "sellerinfo/add",
  async (data: any) => {
    let response = await addSellerInfo(data);
    return response;
  }
);

interface UpdateSellerInfoProps {
  data: any;
  id: string
}

export const updateSellerInfoThunk = createAsyncThunk(
  "sellerinfo/update",
  async ({data, id}: UpdateSellerInfoProps) => {
    let response = await updateSellerInfo(data, id);
    return response;
  }
);

const crudSellerInfoSlice = createSlice({
  name: "sellerinfo",
  initialState,
  reducers: {
    clearCrudSellerInfo: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSellerInfoThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSellerInfoThunk.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(addSellerInfoThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateSellerInfoThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSellerInfoThunk.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(updateSellerInfoThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearCrudSellerInfo } = crudSellerInfoSlice.actions;

export default crudSellerInfoSlice.reducer;
