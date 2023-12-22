# Assignment 2 - Web API

## Author

**Name:** Dylan Butler Parry  
**Student ID:** 20099082

## Features

+ Pagination component retrofitting (Using the same system as in Assignment 1)
+ Introduction of the `UserDetails` collection to handle favorites and watchlist (view, update)
+ Handling of many new API calls (static and parameterized)

## Setup Requirements

1. Run `npm install` from the project root and the `/api_application` directory to install node dependencies for both parts of the assignment.

## API Configuration

1. Create a `.env` file in both the root of the project and inside `/api_application`.
2. Structure the `.env` file inside `api_application` as follows:

    ```env
    NODE_ENV=development
    PORT=8080
    HOST=localhost
    MONGO_DB=<your_mongo_url>
    TMDB_KEY=<your_tmdb_key>
    SECRET=<any_seed_string>
    ```

3. Structure the `.env` file in the root of the project as follows:

    ```env
    NODE_ENV=development
    PORT=3000
    HOST=localhost
    ```

## API Design

An overview of the web API design (non-TMDB pages):

- `/api/movies` | GET | Gets a list of movies from the DB
- `/api/movies/{movieid}` | GET | Gets a single movie from the DB

An overview of the web API design (TMDB pages):
- `/api/movies/tmdb/movie/{movieid}` | GET | Gets a single movie
- `/api/movies/tmdb/movie/credits/{movieid}` | GET | Gets the credits for a single movie
- `/api/movies/tmdb/actor/{actorid}` | GET | Gets a single actor
- `/api/movies/tmdb/movieimages/{movieid}` | GET | Gets the images associated with a movie
- `/api/movies/tmdb/moviereviews/{movieid}` | GET | Get all reviews for a movie

And for non-parameterised endpoints:
- `/api/movies/tmdb/discover` | GET | Gets the movies from the discover endpoint
- `/api/movies/tmdb/current` | GET | Gets the currently playing movies
- `/api/movies/tmdb/toprated` | GET | Gets the top rated movies
- `/api/movies/tmdb/genres` | GET | Gets a list of genres from TMDB
- `/api/movies/tmdb/upcoming` | GET | Gets the upcoming movies

## Security and Authentication

Details of authentication/security implemented on the API:

- Mention the authentication method used (e.g., passport, sessions).
- Specify which routes are protected.

## Integrating with React App

Description of how the React app is integrated with the API:

- List the views that use your Web API instead of the TMDB API.
- Describe any updates made to the React app from Assignment One.

## Independent Learning

Brief explanation of any non-standard features developed for the app.

## API Documentation

If you have your API design on an online platform or graphic, please link to it (e.g., [Swaggerhub](https://app.swaggerhub.com/)).