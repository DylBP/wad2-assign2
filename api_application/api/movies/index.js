import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import { getCurrentMovies, getTopRatedMovies, getUpcomingMovies, getMovieGenres, getMovie, getMovieCredits, getDiscoverMovies, getActor, getMovieImages, getMovieReviews } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({ message: 'The movie you requested could not be found.', status_code: 404 });
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const movieGenres = await getMovieGenres();
    res.status(200).json(movieGenres);
}));

router.get('/tmdb/movie/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const movie = await getMovie(id);
    res.status(200).json(movie);
}));

router.get('/tmdb/movie/credits/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const credits = await getMovieCredits(id);
    res.status(200).json(credits);
}));

router.get('/tmdb/toprated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));

router.get('/tmdb/current', asyncHandler(async (req, res) => {
    const topRatedMovies = await getCurrentMovies();
    res.status(200).json(topRatedMovies);
}));

router.get('/tmdb/discover', asyncHandler(async(req, res) => {
    const page = req.query.page || 1;
    const discoverMovies = await getDiscoverMovies(page);
    res.status(200).json(discoverMovies);
}));

router.get('/tmdb/actor/:id', asyncHandler(async(req, res) => {
    const id = req.params.id;
    const actor = await getActor(id);
    res.status(200).json(actor);
}));

router.get('/tmdb/movieimages/:id', asyncHandler(async(req, res) => {
    const id = req.params.id;
    const images = await getMovieImages(id);
    res.status(200).json(images);
}));

router.get('/tmdb/moviereviews/:id', asyncHandler(async(req, res) => {
    const id = req.params.id;
    const images = await getMovieReviews(id);
    res.status(200).json(images);
}));

export default router;