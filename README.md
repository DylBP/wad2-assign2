# Assignment 1 - ReactJS app

Name: Dylan BP (20099082)

## Overview.

Assignment 1 for Web App Development 2

The app focuses on data provided by the TMDB API, parses it out, and displays the content back to the user.
The app uses Firebase authentication, and a variety of different types of API calls. The user can query for data regarding a specific movie, or actor, and can filter by genre
or name.

### Features
 
+ Firebase Authentication
+ Pagination
+ Static endpoints for upcoming, top rated, and currently playing movies
+ Parameterised endpoints for getting the crew, and actor details
+ A "Watchlist" for upcoming movies, which you can add to and delete from

## Setup requirements.

```zsh
npm install
npm install firebase

npm start
```

## API endpoints

+ Upcoming movies - /movie/upcoming/
+ Top rated movies of all time - /movies/toprated
+ Currently playing movies - /movie/top_rated
+ Get movie credits - /movie/:id/credits/ (Movie ID passed to API call for crew)
+ Details for a specific actor - /person/:actor_id (Pass in via the id found from the crew api call)

## Routing

+ /movies/toprated - displays the top rated movies of all time
+ /movies/current - displays the movies which are currently playing in cinema
+ /auth - the default page which the user is brought to - allows the user to sign up and sign in
+ /actor/:id - the page which displays details for a certain actor, based on id
+ /movies/watchlist - upcoming movies which have been added to a must watch list

All aspects of the app require authentication. To access any page, a user must have an account (dummy credentials are okay).

## Independent learning (If relevant)

+ Firebase
  + Used the Firebase API documentation for getting started with the setup and requirements (https://firebase.google.com/docs/auth/web/start)
  + Code adaptations made based on requirements for JSX instead of JS as given
+ Pagination
  + Documentation on pagination from React (https://mui.com/material-ui/react-pagination/)
