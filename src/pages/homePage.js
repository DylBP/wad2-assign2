import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { Pagination } from "@mui/material";

const HomePage = (props) => {

  const [currPage, setCurrPage] = useState(1);

  const { data, error, isLoading, isError, refetch } = useQuery(['discover', { page: currPage }], getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const handleChange = (event, page) => {
    setCurrPage(page);
    refetch({ page: currPage });
  }

  return (
    <>
      <Pagination count={10} onChange={handleChange} page={currPage} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }} variant="outlined" shape="rounded" />
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />
        }}
      />
      <Pagination count={10} onChange={handleChange} page={currPage} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }} variant="outlined" shape="rounded" />
    </>
  );
};
export default HomePage;