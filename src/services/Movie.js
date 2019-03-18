import axios from 'axios';
import searchMovieEndpoint from './constants';

/**
 * @description search movie by movie name
 */
export default class Movie {
  search(movieName) {
    return axios.get(searchMovieEndpoint(movieName))
      .then(res => res.data)
      .catch(err => console.log(err));
  }
}
