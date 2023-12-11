import React, { useState } from "react";
export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favorites, setFavorites] = useState([])
    const [myReviews, setMyReviews] = useState({})
    const [myWatchlist, setMyWatchlist] = useState([])

    const addToWatchList = (movie) => {
        let newWatchlist = [];
        if (!myWatchlist.includes(movie.id)) {
            newWatchlist = [...myWatchlist, movie.id];
        }
        else {
            newWatchlist = [...myWatchlist];
        }
        setMyWatchlist(newWatchlist)
    }

    const addToFavorites = (movie) => {
        let newFavorites = [];
        if (!favorites.includes(movie.id)) {
            newFavorites = [...favorites, movie.id];
        }
        else {
            newFavorites = [...favorites];
        }
        setFavorites(newFavorites)
    };

    const addReview = (movie, review) => {
        setMyReviews({ ...myReviews, [movie.id]: review })
    };

    // We will use this function in a later section
    const removeFromFavorites = (movie) => {
        setFavorites(favorites.filter(
            (mId) => mId !== movie.id
        ))
    };

    const removeFromWatchlist = (movie) => {
        setMyWatchlist(myWatchlist.filter(
            (mId) => mId !== movie.id
        ))
    };

    return (
        <MoviesContext.Provider
            value={{
                favorites,
                myWatchlist,
                addToFavorites,
                removeFromFavorites,
                removeFromWatchlist,
                addReview,
                addToWatchList,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;