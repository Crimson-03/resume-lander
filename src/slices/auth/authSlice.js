import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      (state.user = payload.email), (state.isLoggedIn = true);
      console.log(state);
    },
    signin: (state, { payload }) => {
      state.user = payload.name;
      state.isLoggedIn = true;
    },
  },
});

export const { login, signin } = authSlice.actions;
export default authSlice.reducer;
