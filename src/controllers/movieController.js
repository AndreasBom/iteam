import { Router } from 'express';
import Movie from '../services/Movie';

const router = Router();
const movie = new Movie();

/**
 * GET /movie?search=The Terminator
 */
router.get('/', (req, res) => {
  movie.search(req.query.search)
    .then((movieRes) => {
      // adding total_result to res so it can be accessed in the searchlog middleware
      res.total_results = Number(movieRes.total_results);
      res.send(movieRes);
    })
    .catch(err => res.send(err));
});

export default router;
