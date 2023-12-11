import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatchlistIcon from "../components/cardIcons/addToWatch";
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';

const UpcomingMoviePage = (props) => {
    const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies)

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
            title='Upcoming Movies'
            movies={movies}
            action={(movie) => {
                return <AddToWatchlistIcon movie={movie} />;
            }}
        />
    );
}

export default UpcomingMoviePage;