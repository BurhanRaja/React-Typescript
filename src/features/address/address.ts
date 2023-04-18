import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddresses } from "../../api/user/address";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  addresses: Array<any>;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  addresses: [],
} as InitialState;

export const getAddressThunk = createAsyncThunk("getAddress/get", async () => {
  let response = await getAddresses();
  return response;
});

const getAddressSlice = createSlice({
  name: "getAddress",
  initialState,
  reducers: {
    cleargetAddressState: () => {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAddressThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAddressThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.addresses = payload;
      })
      .addCase(getAddressThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { cleargetAddressState } = getAddressSlice.actions;

export default getAddressSlice.reducer;
