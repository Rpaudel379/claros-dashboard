import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Dashboard = {
  name: string;
  age: number;
};

const initialState: Dashboard = {
  name: "Anish",
  age: 25,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

export const { setName, setAge } = dashboardSlice.actions;

export const dashboardReducer = dashboardSlice.reducer;
