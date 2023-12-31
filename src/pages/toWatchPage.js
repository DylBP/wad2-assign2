import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { AuthContext } from "../contexts/authContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromWatch from "../components/cardIcons/removeFromWatch";
import WriteReview from "../components/cardIcons/writeReview";

const ToWatchPage = () => {
  const context = useContext(AuthContext);

  // Create an array of queries and run in parallel.
  const toWatchQueries = useQueries(
    context.watchlist.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = toWatchQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = toWatchQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  return (
    <PageTemplate
      title="Movie Watchlist"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromWatch movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default ToWatchPage;