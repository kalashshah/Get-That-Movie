import React from "react";
import Image from "next/image";
import { ThumbUpIcon, StarIcon } from "@heroicons/react/outline";
import { Movie } from "../utils/types";
interface Prop {
  movie: Movie;
}

export const ListItem = ({ movie }: Prop) => {
  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={
          `${"https://image.tmdb.org/t/p/original"}${
            movie.backdrop_path || movie.poster_path
          }` || `${"https://image.tmdb.org/t/p/original"}${movie.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{movie.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {movie.title || movie.original_title || movie.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.media_type && `${movie.media_type} . `}
          {`${movie.release_date || movie.first_air_date} `}
          <ThumbUpIcon className="h-5 mx-2" />{" "}
          {`${movie.vote_count} ${movie.adult ? "18+" : ""} `}
          <StarIcon className="h-5 mx-2" />
          {` ${movie.vote_average} `}
        </p>
      </div>
    </div>
  );
};
