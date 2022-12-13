import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
// interface CounterState {
//   value: number;
// }

// Define the initial state using that type
const initialState = {
  value: "",
};

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {},
});

export const {} = urlSlice.actions;

export const selectCount = (state: RootState) => state.url.value;

export default urlSlice.reducer;
