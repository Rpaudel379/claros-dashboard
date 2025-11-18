import { combineReducers } from "@reduxjs/toolkit";
import { dashboardReducer } from "./slices/dashboardSlice";

export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});
