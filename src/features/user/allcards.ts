import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCards } from "../../api/user/user";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  cards: any[];
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  cards: [],
} as InitialState;

export const getAllCardsThunk = createAsyncThunk(
  "allcards/getall",
  async () => {
    let response = await getAllCards();
    return response;
  }
);

const getAllCardsSlice = createSlice({
  name: "allcards",
  initialState,
  reducers: {
    clearAllCardState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCardsThunk.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllCardsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cards = payload?.cards;
      })
      .addCase(getAllCardsThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearAllCardState } = getAllCardsSlice.actions;

export default getAllCardsSlice.reducer;
