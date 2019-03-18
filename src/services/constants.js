/**
 * API references to IMDB
 */

const apikey = 'a189fc4c9bacbc98c5bc3d8d5b23c232';
const apiUrl = 'https://api.themoviedb.org/3';

const searchMovieEndpoint = movieName => `${apiUrl}/search/movie?api_key=${apikey}&query=${movieName}`;

export default searchMovieEndpoint;
