import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPCategories } from "../../api/categories";

const initialState = {
  isLoading: false,
  pCategories: [],
  isError: false,
};

export const getParentCatThunk = createAsyncThunk(
  "parentCategory/getPC",
  async () => {
    let response = await getPCategories();
    return response;
  }
);

const parentCategorySlice = createSlice({
  name: "parentCategory",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getParentCatThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getParentCatThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.pCategories = payload;
      })
      .addCase(getParentCatThunk.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default parentCategorySlice.reducer;
