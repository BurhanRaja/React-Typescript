import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleParentCat } from "../../api/categories";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  pCat: any;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  pCat: {},
} as InitialState;

export const getSingleParentCatThunk = createAsyncThunk(
  "singleParentCat/get",
  async (id: string | undefined) => {
    let response = await getSingleParentCat(id);
    return response;
  }
);

export const singleParentCatSlice = createSlice({
  name: "singleParentCat",
  initialState,
  reducers: {
    clearSingleParentCatState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleParentCatThunk.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getSingleParentCatThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pCat = payload.pCategory;
      })
      .addCase(getSingleParentCatThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearSingleParentCatState } = singleParentCatSlice.actions;

export default singleParentCatSlice.reducer;
