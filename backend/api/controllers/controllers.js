const http = require('http');
const axios = require('axios');

// This probably isn't needed as we can get the same thing by not including any info in the queries
const randomRecipes = (req, res) => {
  let rawData;
  let randomPage = Math.floor(Math.random() * 100) + 1;
  axios({
    method: 'get',
    url: `http://www.recipepuppy.com/api/?p=${randomPage}`
  })
    .then(result => {
      rawData = result.data;
      res.json(rawData);
    })
    .catch(err => {
      console.log(err.response.data);
    });
};

const recipes = (req, res) => {
  let rawData;
  const ingredients = req.query.ingredients || '';
  const food = req.query.food || '';
  const page = req.query.p || 1;
  axios({
    method: 'get',
    url: `http://www.recipepuppy.com/api/?i=${ingredients}&q=${food}&p=${page}`
  })
    .then(result => {
      rawData = result.data;
      res.json(rawData);
    })
    .catch(err => {
      console.log(err.response.data);
    });
};

module.exports = {
  randomRecipes,
  recipes
};
