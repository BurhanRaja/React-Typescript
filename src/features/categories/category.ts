import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../api/categories";

const initialState = {
  isLoading: false,
  categories: [],
  isError: false,
};

export const getCategoryThunk = createAsyncThunk(
  "category/getCategory",
  async (id: string) => {
    let response = await getCategories(id);
    return response;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getCategoryThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoryThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categories = payload;
      })
      .addCase(getCategoryThunk.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default categorySlice.reducer;
