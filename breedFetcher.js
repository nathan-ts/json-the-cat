// searching by breed: https://docs.thecatapi.com/api-reference/breeds/breeds-search

const request = require('request');

const fetchBreedDescription = function(breed, done) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (err, response, body) => {
    if (err) done(err, null);
    else {
      const data = JSON.parse(body);
      if (data.length === 0) done(new Error(`Specified breed ${breed} not found.`), null);
      else done(null, data);
    }
  });
};

module.exports = { fetchBreedDescription };
