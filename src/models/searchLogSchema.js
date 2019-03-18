import mongoose from 'mongoose';

const searchLogSchema = new mongoose.Schema({
  query: String,
  total_results: Number,
  date: { type: Date, default: Date.now },
});

export default searchLogSchema;
