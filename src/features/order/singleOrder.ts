import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOneOrder } from "../../api/orders";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  order: any;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  order: {},
} as InitialState;

export const getSingleOrderThunk = createAsyncThunk(
  "singleOrder/get",
  async (id: string | undefined) => {
    let response = await getOneOrder(id);
    return response;
  }
);

const singleOrderSlice = createSlice({
  name: "singleOrder",
  initialState,
  reducers: {
    clearSingleOrderState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleOrderThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleOrderThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.order = payload.order;
      })
      .addCase(getSingleOrderThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearSingleOrderState } = singleOrderSlice.actions;

export default singleOrderSlice.reducer;
