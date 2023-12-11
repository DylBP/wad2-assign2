import React from "react";
import { useParams } from 'react-router-dom';
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import ActorDetails from "../components/actorDetails";

const ActorPage = (props) => {
    const { id } = useParams();
    const { data: actor, error, isLoading, isError } = useQuery(
        ["actor", { id: id }],
        getActor
      );
    
      if (isLoading) {
        return <Spinner />;
      }
    
      if (isError) {
        return <h1>{error.message}</h1>;
      }

    return (
        <> 
                <ActorDetails actor={actor}/>
        </>
    );
};

export default ActorPage;