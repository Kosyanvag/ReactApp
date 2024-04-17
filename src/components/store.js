import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./redux/authenticationSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});

export default store;
