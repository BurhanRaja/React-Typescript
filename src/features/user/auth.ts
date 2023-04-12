import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "../../api/user/auth";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  token: "",
};

export const userRegisterThunk = createAsyncThunk(
  "userAuth/register",
  async (data: any) => {
    let response = await userRegister(data);
    return response;
  }
);

export const userLoginThunk = createAsyncThunk(
  "userAuth/login",
  async (data) => {
    let response = await userLogin(data);
    return response;
  }
);

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    clearUserAuthState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegisterThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userRegisterThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = payload.token;
      })
      .addCase(userRegisterThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(userLoginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLoginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = payload;
      })
      .addCase(userLoginThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearUserAuthState } = userAuthSlice.actions;

export default userAuthSlice.reducer;
