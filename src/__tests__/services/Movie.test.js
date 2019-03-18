import Movie from '../../services/Movie';

const axios = require('axios');


jest.mock('axios');

describe('Movie class', () => {
  test('Movie test should run', () => {
    expect(true).toBe(true);
  });

  test('Search method should be called', () => {
    const getSpy = jest.spyOn(axios, 'get');
    const movie = new Movie();

    movie.search('test');
    expect(getSpy).toBeCalled();
  });

  test('Search movie should return search result with 2 objects', () => {
    const movie = new Movie();

    return movie.search('test')
      .then((res) => {
        expect(res.length).toEqual(2);
      });
  });
});
