import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";

const MovieList = () => {
  const { movies } = useSelector((state) => state.movieRed);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          placeholder="Movie Title"
          type="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Rating
          max={10}
          name="simple-controlled"
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </div>
      {movies
        .filter(
          (el) =>
            el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
            el.rating >= rating
        )
        .map((el) => (
          <MovieCard movieInfo={el} key={el.id} />
        ))}
      {/* {movies.map((el) => (
        <MovieCard movieInfo={el} key={el.id} />
      ))} */}
    </div>
  );
};

export default MovieList;
