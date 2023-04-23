import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllSubCategories, getSubCategories } from "../../api/categories";

interface InitialState {
  isLoading: boolean;
  subCategories: any[];
  isError: boolean;
}

const initialState = {
  isLoading: false,
  subCategories: [],
  isError: false,
} as InitialState;

export const getSubCatThunk = createAsyncThunk(
  "subCategory/getSubCat",
  async (id: string) => {
    let response = await getSubCategories(id);
    return response;
  }
);

interface AllSubCatProps {
  id: string;
  cat?: string;
}

export const getAllSubCatThunk = createAsyncThunk(
  "subCategory/getAllSubCat",
  async ({ id, cat }: AllSubCatProps) => {
    let response = await getAllSubCategories(id, cat);
    return response;
  }
);

const subCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {
    clearSubCategoriesState: () => initialState,
  },
  extraReducers: (build) => {
    build
      .addCase(getSubCatThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubCatThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.subCategories = payload.subCategories;
      })
      .addCase(getSubCatThunk.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(getAllSubCatThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSubCatThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.subCategories = payload.subcategories;
      })
      .addCase(getAllSubCatThunk.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { clearSubCategoriesState } = subCategorySlice.actions;

export default subCategorySlice.reducer;
