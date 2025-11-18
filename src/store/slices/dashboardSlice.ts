import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { DashboardState } from "../types";

const initialState: DashboardState = {
  items: [],
  loading: true,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestrooms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestrooms.fulfilled, (state, action) => {
        state.loading = false;

        state.items = action.payload;
      })
      .addCase(fetchRestrooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Please try again.";
      });
  },
});

export const fetchRestrooms = createAsyncThunk(
  "items/fetch",
  async (page: number) => {
    const response = await fetch(
      `https://www.refugerestrooms.org/api/v1/restrooms/search?page=${
        page ?? 1
      }&per_page=50&query=United%20States`
    );

    if (!response.ok) throw new Error("Failed to fetch items");

    return await response.json();
  }
);

export const dashboardReducer = dashboardSlice.reducer;
