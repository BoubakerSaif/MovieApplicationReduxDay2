import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: data, role: "Admin" },
  reducers: {
    addMovie: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((el) => el.id != action.payload);
    },
    updateMovie: (state, action) => {
      state.movies = state.movies.map((el) =>
        el.id == action.payload.id ? (el = action.payload.updatedMovie) : el
      );
    },
    // searchMovie:(state,action)=>{
    //   state.movies=state.movies.filter((el)=>el.title.includes(action.payload))
    // }
  },
});

export default movieSlice.reducer;
export const { addMovie, deleteMovie, updateMovie } = movieSlice.actions;
