import dotenv from 'dotenv';
import mongoose from 'mongoose';
import users from './users';
import movies from './movies';
import User from '../api/users/userModel';
import Movie from '../api/movies/movieModel';
import UserDetails from '../api/userDetails/userDetailsModel';
import usersDetails from './userDetails';
dotenv.config();

async function main() {
    if (process.env.NODE_ENV !== 'development') {
        console.log('This script is only for the development environment.');
        return;
    }
    await mongoose.connect(process.env.MONGO_DB);
    // Drop collections
    await User.collection.drop().catch(err => console.log('User collection not found'));
    await Movie.collection.drop().catch(err => console.log('Movie collection not found'));
    await UserDetails.collection.drop().catch(err => console.log('UserDetails collection not found'));
    await UserDetails.create(usersDetails);
    await User.create(users);
    await Movie.create(movies);
    console.log('Database initialised');
    console.log(`${users.length} users loaded`);
    console.log(`${movies.length} movies loaded`);
    console.log(`${usersDetails.length} userDetails loaded`);
    await mongoose.disconnect();
}

main();