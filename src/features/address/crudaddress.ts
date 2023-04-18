import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addAddress,
  deleteAddress,
  updateAddress,
} from "../../api/user/address";

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

export const addAddressThunk = createAsyncThunk(
  "crudAddress/add",
  async (data: any) => {
    let response = await addAddress(data);
    return response;
  }
);

interface UpdateAddressProps {
  id: string | any;
  data: any;
}

export const updateAddressThunk = createAsyncThunk(
  "crudAddress/update",
  async ({ id, data }: UpdateAddressProps) => {
    let response = await updateAddress(id, data);
    return response;
  }
);

export const deleteAddressThunk = createAsyncThunk(
  "crudAddress/delete",
  async (id: string) => {
    let response = await deleteAddress(id);
    return response;
  }
);

const crudAddressSlice = createSlice({
  name: "crudaddress",
  initialState,
  reducers: {
    clearCrudAddressState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAddressThunk.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(addAddressThunk.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(addAddressThunk.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(updateAddressThunk.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(updateAddressThunk.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(updateAddressThunk.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(deleteAddressThunk.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteAddressThunk.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(deleteAddressThunk.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { clearCrudAddressState } = crudAddressSlice.actions;

export default crudAddressSlice.reducer;
