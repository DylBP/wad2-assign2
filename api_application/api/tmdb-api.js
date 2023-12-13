import fetch from 'node-fetch';

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

export const getMovie = async (id) => {
    // console.log(args)
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error;
        });
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