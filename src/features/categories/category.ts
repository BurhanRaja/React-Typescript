import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../api/categories";

interface InitialState {
  isLoading: boolean;
  categories: any[];
  isError: boolean;
}

const initialState = {
  isLoading: false,
  categories: [],
  isError: false,
} as InitialState;

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
  reducers: {
    clearCategoryState: () => {
      return initialState;
    }
  },
  extraReducers: (build) => {
    build
      .addCase(getCategoryThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoryThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categories = payload.categories;
      })
      .addCase(getCategoryThunk.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const {clearCategoryState} = categorySlice.actions;

export default categorySlice.reducer;
