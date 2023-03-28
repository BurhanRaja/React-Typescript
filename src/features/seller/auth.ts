import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginSeller, registerSeller } from "../../api/seller/seller";

const initialState = {
  token: "",
  isLoading: false,
  isError: false,
  error: {}
};

export const registerSellerThunk = createAsyncThunk(
  "auth/sellerRegister",
  async (data: Object) => {
    let response = await registerSeller(data);
    console.log(response);
    return response;
  }
);

export const loginSellerThunk = createAsyncThunk(
  "auth/sellerLogin",
  async (data: Object) => {
    let response = await loginSeller(data);
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(registerSellerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerSellerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
      })
      .addCase(registerSellerThunk.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(loginSellerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginSellerThunk.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.token = payload.token;
      })
      .addCase(loginSellerThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      ;
  },
});

export default authSlice.reducer;
