import { configureStore } from "@reduxjs/toolkit";
import authReducder from "../slices/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducder,
  },
});
