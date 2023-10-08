const mongoose = require('mongoose');

// This field is of type mongoose.Schema.Types.ObjectId and references the Movie model. It represents the movie that the review is associated with. This field is required.

// userId: This field is of type mongoose.Schema.Types.ObjectId and references the User model. It represents the user who wrote the review. This field is required.

const reviewSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1, // Minimum rating value
    max: 5, // Maximum rating value
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
