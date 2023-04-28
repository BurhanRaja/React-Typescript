import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addReview } from "../../api/product";

interface InitialState {
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
}

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
} as InitialState;

interface AddReviewProps {
  data: any;
  id: string | undefined;
}

export const addReviewsThunk = createAsyncThunk(
  "crudReview/add",
  async ({ data, id }: AddReviewProps) => {
    let response = await addReview(data, id);
    return response;
  }
);

const crudReviewSlice = createSlice({
  name: "crudReview",
  initialState,
  reducers: {
    clearCrudReviewsState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addReviewsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReviewsThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addReviewsThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearCrudReviewsState } = crudReviewSlice.actions;

export default crudReviewSlice.reducer;
