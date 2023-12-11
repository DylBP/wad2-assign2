import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TopRatedMoviePage from "./pages/topRatedMoviesPage";
import CurrentMoviePage from "./pages/currentMoviesPage";
import ToWatchPage from "./pages/toWatchPage";
import { initializeApp } from "firebase/app";
import UserProvider from "./components/auth/userProvider";
import AuthPage from "./pages/authPage";
import ActorPage from "./pages/actorDetailsPage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm9TrGqfVnIP3NBI76gSBAUl_TbODMTyo",
  authDomain: "wad2-firebase-auth.firebaseapp.com",
  projectId: "wad2-firebase-auth",
  storageBucket: "wad2-firebase-auth.appspot.com",
  messagingSenderId: "247157118296",
  appId: "1:247157118296:web:8bd7cb19c9d2b190aac12d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <UserProvider>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/movies/toprated" element={<TopRatedMoviePage />} />
            <Route path="/movies/current" element={<CurrentMoviePage />} />
            <Route path="/movies/watchlist" element={<ToWatchPage />} />
            <Route path="/auth" element={<AuthPage/>} />
            <Route path="/actor/:id" element={<ActorPage/>} />
          </Routes>
        </MoviesContextProvider>
        </UserProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);