import { Router } from 'express';
import mongoose from 'mongoose';
import searchLogSchema from '../models/searchLogSchema';

const router = Router();
/**
 * Get all search terms
 * GET /searchlog
 */
router.get('/', (req, res) => {
  const loggerModel = mongoose.model('searchLogSchema', searchLogSchema);
  loggerModel.find({}, (err, searchLog) => {
    if (err) {
      res.send(err);
    }
    res.json(searchLog);
  });
});

/**
 * get top 100 search result
 * GET searchlog/topresult
 */
router.get('/topresult', (req, res) => {
  const loggerModel = mongoose.model('searchLogSchema', searchLogSchema);
  loggerModel.aggregate([
    {
      $group: {
        _id: '$query', count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 100 },
  ], (err, searchLog) => {
    if (err) {
      res.send(err);
    }
    res.json(searchLog);
  });
});

export default router;
