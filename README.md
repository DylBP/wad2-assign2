# Assignment 2 - Web API

## Author

**Name:** Dylan Butler Parry  
**Student ID:** 20099082

## Features

A list of additional features implemented in the API that were not covered in the labs or modifications to existing features:

+ Pagination component retrofitting (Using the same system as in Assignment 1)
+ Introduction of the `UserDetails` collection to handle favorites and watchlist (view, update)
+ Handling of many new API calls (static and parameterized)

## Setup Requirements

1. Run `npm install` from the project root and the `api_application` directory to install node dependencies for both parts of the assignment.

## API Configuration

1. Create a `.env` file in both the root of the project and inside `api_application`.
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

An overview of the web API design:

- `/api/movies` | GET | Gets a list of movies
- `/api/movies/{movieid}` | GET | Gets a single movie
- `/api/movies/{movieid}/reviews` | GET | Get all reviews for a movie
- `/api/movies/{movieid}/reviews` | POST | Create a new review for a movie

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

## License

This project is licensed under the [MIT License](LICENSE).
