// searching by breed: https://docs.thecatapi.com/api-reference/breeds/breeds-search

const request = require('request');

const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (err, response, body) => {
  if (err) console.error(err);
  else {
    const data = JSON.parse(body);
    if (data.length === 0) console.log(`Error: Specified breed ${breed} not found.`);
    else console.log(data);
  }
});