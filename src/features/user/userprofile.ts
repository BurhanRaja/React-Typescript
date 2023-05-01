import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../api/user/user";

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
  user: "",
} as InitialState;

export const getUserProfileThunk = createAsyncThunk(
  "userProfile/get",
  async () => {
    let response = await getUser();
    return response;
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    clearUserprofile: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfileThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProfileThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = payload?.user;
      })
      .addCase(getUserProfileThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = false;
      });
  },
});

export const { clearUserprofile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
