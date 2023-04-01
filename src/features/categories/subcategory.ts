import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSubCategories } from "../../api/categories";

const initialState = {
  isLoading: false,
  subCategories: [],
  isError: false,
};

export const getSubCatThunk = createAsyncThunk(
  "subCategory/getSubCat",
  async (id: string) => {
    let response = await getSubCategories(id);
    return response;
  }
);

const subCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getSubCatThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubCatThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.subCategories = payload;
      })
      .addCase(getSubCatThunk.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default subCategorySlice.reducer;
