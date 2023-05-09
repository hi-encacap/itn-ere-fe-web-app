/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configService } from "@services/index";
import { SiteConfigDataType } from "../types/dataTypes";

interface LayoutState {
  contactInformation: SiteConfigDataType | null;
}

const initialState: LayoutState = {
  contactInformation: null,
};

export const getContact = createAsyncThunk("layout/getContact", async () => {
  const data = await configService.getContact();
  return data;
});

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setContactInformation: (state: LayoutState, action: PayloadAction<SiteConfigDataType>) => {
      state.contactInformation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContact.pending, (state) => {
      state.contactInformation = null;
    });
    builder.addCase(getContact.fulfilled, (state, action) => {
      state.contactInformation = action.payload;
    });
  },
});

const { actions, reducer: layoutReducer } = layoutSlice;

export const { setContactInformation } = actions;

export default layoutReducer;
