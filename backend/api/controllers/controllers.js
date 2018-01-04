const http = require('http');

const test = (req, res) => {
  res.json({ msg: 'online' });
};

const recipes = (req, res) => {
  let rawData = '';
  console.log(req.params);
  const ingredients = 'sugar, bacon, peppers';
  const food = '';
  http
    .get(`http://www.recipepuppy.com/api/?i=${ingredients}&q=${food}`, res => {
      res.setEncoding('utf8');
      res.on('data', chunk => {
        rawData += chunk;
      });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          var recipeResults = parsedData.results;
        } catch (e) {
          console.error(e.message);
        }
      });
    })
    .on('error', e => {
      console.error(`Got error: ${e.message}`);
    });
};

module.exports = {
  test,
  recipes
};
