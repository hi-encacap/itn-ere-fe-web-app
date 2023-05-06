/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configService } from "@services/index";
import { ContactInformationType } from "../types/dataTypes";

interface LayoutState {
  contactInformation: ContactInformationType | null;
}

const initialState: LayoutState = {
  contactInformation: null,
};

export const getContactInformation = createAsyncThunk("layout/getContactInformation", async () => {
  const data = await configService.getContactInformation();
  return data;
});

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setContactInformation: (state: LayoutState, action: PayloadAction<ContactInformationType>) => {
      state.contactInformation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContactInformation.pending, (state) => {
      state.contactInformation = null;
    });
    builder.addCase(getContactInformation.fulfilled, (state, action) => {
      state.contactInformation = action.payload;
    });
  },
});

const { actions, reducer: layoutReducer } = layoutSlice;

export const { setContactInformation } = actions;

export default layoutReducer;
