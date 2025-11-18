import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FilterState } from "../types";

const initialState: FilterState = {
  query: "",
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter, setQuery } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
