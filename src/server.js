import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import movieController from './controllers/movieController';
import searchLogController from './controllers/searchLogController';
import searchLogger from './middleware/searchLogger';

require('custom-env').env(process.env.ENV);

// initialize express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// database
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected to');
  })
  .catch(err => console.log(err));

// routes
app.get('/', (req, res) => {
  res.send('API is running');
});
app.use('/movie', searchLogger, movieController);
app.use('/searchlog', searchLogController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
