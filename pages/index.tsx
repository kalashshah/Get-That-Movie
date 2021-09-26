import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Navbar } from "../components/Navbar";
import { Menu } from "../components/Menu";
import { MoviesList } from "../components/MoviesList";
import calls from "../utils/calls";
import { Movie } from "../utils/types";

interface Movies {
  movies: Movie[];
}
interface QueryParams extends ParsedUrlQuery {
  genre: string;
}

const Home = ({ movies }: Movies) => {
  return (
    <div>
      <Head>
        <title>Get That Movie</title>
        <meta name="Get that movie" content="Find your favourite movies here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Menu />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Movies, QueryParams> =
  async (context) => {
    try {
      const genre = context.query?.genre as keyof typeof calls;

      const response = await fetch(
        `https://api.themoviedb.org/3${
          calls[genre]?.url || calls.fetchTopRated.url
        }`
      );

      const data = (await response.json()) as {
        page: number;
        total_pages: number;
        total_results: number;
        results: Movie[];
      };
      return {
        props: {
          movies: data.results || [],
        },
      };
    } catch (error) {
      return {
        props: {
          movies: [],
        },
      };
    }
  };
