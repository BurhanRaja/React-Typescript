import { createSlice } from "@reduxjs/toolkit";

interface ImagesInfo {
  _id?: string;
  images: Array<string>;
  color: string;
  sizes: Array<string | number>;
  info_types: Array<string | number>;
  price: any;
  quantity: number;
}

type InitialState = {
  count: number;
  images_info: Array<ImagesInfo>;
};

const initialState = {
  count: 0,
  images_info: [],
} as InitialState;

const imageInfoSlice = createSlice({
  name: "imagesInfo",
  initialState,
  reducers: {
    addImageInfo: (state, action) => {
      state.images_info.push(action.payload);
      state.count += 1;
    },
    deleteImageInfo: (state, action) => {
      let filteredAns = state.images_info.filter(
        (el) => el._id !== action.payload.id
      );
      state.images_info = filteredAns;
      state.count -= 1;
    },
    clearImagesInfo: () => {
      return initialState;
    }
  },
});

export const { addImageInfo, deleteImageInfo, clearImagesInfo } = imageInfoSlice.actions;

export default imageInfoSlice.reducer;
