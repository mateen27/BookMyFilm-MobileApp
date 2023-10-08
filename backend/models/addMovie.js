const mongoose = require('mongoose');

const addMovieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespace
  },
  movieRating: {
    type: Number, // Assuming ratings are numeric
    required: true,
    min: 1, // Define the minimum rating value
    max: 5, // Define the maximum rating value
  },
  movieLogo: {
    type: String,
    required: true,
    trim: true,
  },
  movieBanner: {
    type: String,
    required: true,
    trim: true,
  },
  movieDescription: {
    type: String,
    required: true,
    trim: true,
  },
  moviePrice: {
    type: Number, // Assuming prices are numeric
    required: true,
    min: 0, // Define the minimum price
  },
  movieGenre: {
    type: [String], // Allowing multiple genres
    required: true,
  },
  movieLanguage: {
    type: String,
    required: true,
    trim: true,
  },
  movieDate: {
    type: [Date],
    required: true,
  },
  movieTimes: {
    type: [String],
    required: true,
    trim: true,
  },
});

const AddMovie = mongoose.model('AddMovie', addMovieSchema);

module.exports = AddMovie;
