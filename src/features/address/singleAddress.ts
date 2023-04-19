import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleAddress } from "../../api/user/address";

interface InitialState {
  address: any;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const initialState = {
  address: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
} as InitialState;

export const getSingleAddressThunk = createAsyncThunk(
  "singleAddress/get",
  async (id: any) => {
    let response = await getSingleAddress(id);
    return response;
  }
);

const singleAddressSlice = createSlice({
  name: "singleAddress",
  initialState,
  reducers: {
    clearSingleAddressState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleAddressThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleAddressThunk.fulfilled, (state, { payload }) => {
        state.address = payload?.address;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getSingleAddressThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearSingleAddressState } = singleAddressSlice.actions;

export default singleAddressSlice.reducer;
