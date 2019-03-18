
module.exports = {
  get: () => Promise.resolve({
    data: [
      {
        id: 0,
        title: 'The Movie',
      },
      {
        id: 1,
        title: 'Another Movie',
      },
    ],
  }),
};
