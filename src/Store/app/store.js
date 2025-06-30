import { configureStore } from "@reduxjs/toolkit";
import timeDataReducer from "../features/Timedata"; // your reducer

export const store = configureStore({
  reducer: {
    timedataa: timeDataReducer,
  },
  devTools: true, // ✅ Redux DevTools enabled (default)
});
