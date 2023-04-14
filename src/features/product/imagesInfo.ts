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

type ImagesInfoFilterProps = {
  id: string;
  color: string;
  itemId: string
};

export const getImagesInfoFilterThunk = createAsyncThunk(
  "imagesInfoFilter/get",
  async ({ id, color, itemId }: ImagesInfoFilterProps) => {
    let response = await getfilteredImages(color, id, itemId);
    return response;
  }
);

const imagesInfoSlice = createSlice({
  name: "imagesInfoFilter",
  initialState,
  reducers: {
    clearImageInfoState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImagesInfoFilterThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getImagesInfoFilterThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload?.imageInfo?.images_info;
      })
      .addCase(getImagesInfoFilterThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearImageInfoState } = imagesInfoSlice.actions;

export default imagesInfoSlice.reducer;
