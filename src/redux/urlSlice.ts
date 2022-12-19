import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import urlShortenerApi from "../common/urlShortenerApi";

export const fetchAsyncURL = createAsyncThunk(
  "url/fetchAsyncURL",
  async (fillURL: string) => {
    const response = await urlShortenerApi.get(`${fillURL}`);
    return response.data.result;
  }
);

export interface ShortenerType {
  full_short_link: string;
}

interface InitialState {
  url: ShortenerType[];
}

const initialState: InitialState = {
  url: [],
};

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncURL.pending, () => {});
    builder.addCase(fetchAsyncURL.fulfilled, (state, { payload }) => {
      state.url.push(payload);
    });
    builder.addCase(fetchAsyncURL.rejected, () => {});
  },
});

export const {} = urlSlice.actions;

export const getAllUrls = (state: RootState) => state.url.url;

export default urlSlice.reducer;
