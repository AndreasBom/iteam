import mongoose from 'mongoose';
import searchLogSchema from '../models/searchLogSchema';

/**
 * A method to save search term and time when search was made.
 *
 * @param req http request
 * @param res http response
 * @param next run next method in the request chain
 */
const searchLogger = (req, res, next) => {
  res.on('finish', () => {
    const LoggerModel = mongoose.model('searchLogSchema', searchLogSchema);
    const searchLog = new LoggerModel({
      query: req.query.search,
      total_results: res.total_results,
    });
    searchLog.save((err) => {
      if (err) {
        console.error('Could not save to database', err);
      }
      console.log('Successfully saved query to database');
    });
  });

  next();
};

export default searchLogger;
