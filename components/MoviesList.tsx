import React from "react";
import { ListItem } from "./ListItem";
import { Movie } from "../utils/types";
interface Movies {
  movies: Movie[];
}

export const MoviesList = ({ movies }: Movies) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {movies.map((movie) => (
        <ListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
