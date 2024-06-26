import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";

const store = configureStore({
  reducer: { movieRed: movieReducer },
});

export default store;
