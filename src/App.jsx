import React from "react";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";

const App = () => {
  return (
    <div>
      <AddMovie />
      <MovieList />
    </div>
  );
};

export default App;
