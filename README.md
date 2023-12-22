# Assignment 2 - Web API

Name: Dylan Butler Parry (20099082)

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Pagination component retrofitting (Using the same system as in assignment 1)
 + New UserDetails collection to handle the favourites and watchlist (view, update)
 + Handling of many new API calls (static and parameterised)

## Setup requirements.

+ Run npm install from project root, and from api_application (install node dependencies for both parts of the assignment)

## API Configuration

+ Create a .env file in both the root of the project, and inside api_application
+ Inside the .env file within the api_application, structure it as follows:
______________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=<your_mongo_url>
TMDB_KEY=<your tmdb key>
SECRET=<any seed string>
______________________

+ Inside the .env file within the root of the project, structure it as follows:
______________________
NODE_ENV=development
PORT=3000
HOST=localhost
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   
