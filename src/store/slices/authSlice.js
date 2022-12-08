import { createSlice } from "@reduxjs/toolkit";

// A function that checks the value of the item stored in the local storage and returns it
function getLocalStorageItem(item) {
  var dataStored = localStorage.getItem(item);
  if (dataStored !== undefined || null || "") {
    return dataStored;
  } else {
    return null;
  }
}

const initialState = {
  user: getLocalStorageItem("user"),
  token: getLocalStorageItem("token"),
  data: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = localStorage.setItem("user", action.payload);
    },
    setToken: (state, action) => {
      state.token = localStorage.setItem("token", action.payload);
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAuth, setToken, setData } = authSlice.actions;

export const getAuth = (state) => state.auth.user;
export const getToken = (state) => state.auth.token;
export const getData = (state) => state.auth.data;

export default authSlice.reducer;
