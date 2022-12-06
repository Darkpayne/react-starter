import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { action }) => {
      state.user = localStorage.setItem("user", action);
    },
  },
});

export const getAuth = (state) => state?.auth.user;
export const getToken = (state) => state?.auth.token;

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
