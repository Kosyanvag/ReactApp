import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.username;
    },
    logout(state) {
      state = initialState;
    },
    register(state, action) {
      state.user = {
        username: action.payload.username,
        password: action.payload.password,
      };
    },
  },
});

export const { login, logout, register } = authenticationSlice.actions;
export default authenticationSlice.reducer;
