import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser, updateUser } from "../../api/user/user";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  user: any;
}

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  user: {},
} as InitialState;

export const getUserThunk = createAsyncThunk("crudUser/get", async () => {
  let response = await getUser();
  return response;
});

export const updateUserThunk = createAsyncThunk(
  "crudUser/update",
  async (data: any) => {
    let response = await updateUser(data);
    return response;
  }
);

const crudUserSlice = createSlice({
  name: "crudUser",
  initialState,
  reducers: {
    clearCrudUser: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = payload.user;
      })
      .addCase(getUserThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateUserThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearCrudUser } = crudUserSlice.actions;

export default crudUserSlice.reducer;
