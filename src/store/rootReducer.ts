import { combineReducers } from "@reduxjs/toolkit";
import { dashboardReducer } from "./slices/dashboardSlice";
import { filterReducer } from "./slices/filterSlice";

export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  filter: filterReducer,
});
