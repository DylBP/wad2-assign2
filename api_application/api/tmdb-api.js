import fetch from 'node-fetch';

export const getMovie = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
        throw new Error(await response.json().message);
    }

    return await response.json();
};

export const getMovieCredits = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
        throw new Error(await response.json().message);
    }

    return await response.json();
};


export const getUpcomingMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        throw new Error(await response.json().message);
    }

    return await response.json();
};

export const getMovieGenres = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
        throw new Error(await response.json().message);
    }

    return await response.json();
};

export const getTopRatedMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
        throw new Error(await response.json().message);
    }

    return await response.json();
};

export const getCurrentMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
        throw new Error(await response.json().message);
    }

    return await response.json();
};