import { configureStore } from "@reduxjs/toolkit";
import students from "./slices/studentSlice";

export const store = configureStore({
  reducer: {
    students,
  },
});
