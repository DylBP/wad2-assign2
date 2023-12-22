# Assignment 2 - Web API

## Author

**Name:** Dylan Butler Parry  
**Student ID:** 20099082

## Features

+ Pagination component retrofitting (Using the same system as in Assignment 1)
+ Introduction of the `UserDetails` collection to handle favorites and watchlist (view, update)
    + Front-end will use this
    + UserDetails collection can be manually reviewed on MongoDB if using cloud DB
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
- `/api/userDetails` | GET | Gets all the user details
- `/api/userDetails/{username}/add` | PUT | Updates user details based on array and movieid in body, and username from URL
- `/api/userDetails/{username}/rem` | PUT | Removes user details based on array and movieid in body, and username from URL

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

- For authentication when accessing the TMDB API, we are using JWT
    - This is protected, as they must provide a bearer token in request which subsequently access the TMDB API
    - In the case of using the front-end, the application will pull the token from storage
- All routes are protected, except for login and signup

## Integrating with React App

- All views are now using the Node API
- No additional functionality has been added to the React app - I have simply retrofitted it with the new API
    - The login and signup page have been changed to look better, and give a better indication of what went wrong
