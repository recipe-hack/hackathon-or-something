const express = require('express');
const controllers = require('../controllers/controllers');

const routes = server => {
  const apiRoutes = express.Router();

  // I had this then realized we can do a random just by not putting anything for food or ingredients
  apiRoutes.route('/recipes/random').get(controllers.randomRecipes);

  apiRoutes.route('/recipes').get(controllers.recipes);

  server.use('/api', apiRoutes);
};

module.exports = { routes };
