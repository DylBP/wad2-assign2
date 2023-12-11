import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';

const TopRatedMoviePage = (props) => {
    const { data, error, isLoading, isError } = useQuery('topratedmovies', getTopRatedMovies)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;
    console.log(movies);

    return (
        <PageTemplate
            title='Top Rated Movies'
            movies={movies}
            action={(movie) => {
                return <AddToFavoritesIcon movie={movie} />
            }}
        />
    );
}

export default TopRatedMoviePage;