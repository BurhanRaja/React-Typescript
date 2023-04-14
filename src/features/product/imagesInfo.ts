import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getfilteredImages } from "../../api/product";

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  data: Array<any>;
}

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: [],
} as InitialState;


export const getImagesInfoThunk = createAsyncThunk(
  "imagesInfo/get",
  async (id: string, color: any) => {
    let response = await getfilteredImages(color, id);
    return response;
  }
);

const imagesInfoSlice = createSlice({
  name: "imagesInfo",
  initialState,
  reducers: {
    clearImageInfoState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImagesInfoThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getImagesInfoThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload.images_info;
      })
      .addCase(getImagesInfoThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearImageInfoState } = imagesInfoSlice.actions;

export default imagesInfoSlice.reducer;
