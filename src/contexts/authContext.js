import React, { useState, createContext } from "react";
import { login, signup, getUserDetails, addMovieToList, removeMovieFromList } from "../api/tmdb-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");
  const [favourites, setFavourites] = useState();
  const [watchlist, setWatchlist] = useState();

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
      const userDetails = await getUserDetails(username);
      setFavourites(userDetails.favourites);
      setWatchlist(userDetails.watchlist);
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code === 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  const addToFavourites = async (movieid) => {
    const response = await addMovieToList(userName, movieid, "favourites");
    console.log(response);
    setFavourites(prev => [...favourites, movieid]);
    return (response.code === 200) ? true : false;
  }

  const removeFromFavourites = async (movieid) => {
    const response = await removeMovieFromList(userName, movieid, "favourites");
    console.log(response);
    setFavourites(prev => prev.filter(id => id !== movieid));
    return (response.code === 200) ? true : false;
  }

  const addToWatchlist = async (movieid) => {
    const response = await addMovieToList(userName, movieid, "watchlist");
    console.log(response);
    setWatchlist(prev => [...watchlist, movieid]);
    return (response.code === 200) ? true : false;
  }

  const removeFromWatchlist = async (movieid) => {
    const response = await removeMovieFromList(userName, movieid, "watchlist");
    console.log(response);
    setWatchlist(prev => prev.filter(id => id !== movieid));
    return (response.code === 200) ? true : false;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        addToFavourites,
        removeFromFavourites,
        addToWatchlist,
        removeFromWatchlist,
        userName,
        favourites,
        watchlist
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;