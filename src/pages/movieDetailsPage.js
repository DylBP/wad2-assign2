import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { getMovieCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import CrewList from "../components/crewList";

const MoviePage = (props) => {
    const { id } = useParams();
    const { data: movie, error, isLoading, isError } = useQuery(
        ["movie", { id: id }],
        getMovie
      );

      const { data: crew, error: e, isLoading: l, isError: ie } = useQuery(
        ["crew", { id: id }],
        getMovieCredits
      );
    
      if (isLoading || l) {
        return <Spinner />;
      }
    
      if (isError || ie) {
        return <h1>{error.message}{e.message}</h1>;
      }

      const cast = crew.cast.slice(0,10);

    return (
        <>
            {movie && crew ? (
                <>
                    <PageTemplate movie={movie}>
                        <MovieDetails movie={movie} />
                        <CrewList cast={cast} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for movie details</p>
            )}
        </>
    );
};

export default MoviePage;