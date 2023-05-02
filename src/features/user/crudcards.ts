import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCards, deleteCard, updateCards } from "../../api/user/user";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
} as InitialState;

export const addCardsThunk = createAsyncThunk(
  "crudcards/add",
  async (data: any) => {
    let response = await addCards(data);
    return response;
  }
);

interface UpdateCardsProps {
  data: any;
  id: string;
}

export const updateCardsThunk = createAsyncThunk(
  "crudcards/update",
  async ({ data, id }: UpdateCardsProps) => {
    let response = await updateCards(data, id);
    return response;
  }
);

export const deleteCardsThunk = createAsyncThunk(
  "crudcards/delete",
  async (id: string) => {
    let response = await deleteCard(id);
    return response;
  }
);

const crudCardsSlice = createSlice({
  name: "crudcards",
  initialState,
  reducers: {
    clearCrudCardState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCardsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCardsThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addCardsThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateCardsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCardsThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateCardsThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteCardsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCardsThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteCardsThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearCrudCardState } = crudCardsSlice.actions;

export default crudCardsSlice.reducer;
