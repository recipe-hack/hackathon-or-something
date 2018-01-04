const express = require('express');
const controllers = require('../controllers/controllers');

const routes = (server) => {
  const apiRoutes = express.Router();

  apiRoutes.route('/test')
  .get(controllers.test);

  apiRoutes.route('/testget')
  .get(controllers.testget);

  server.use('/api', apiRoutes);
}

module.exports = { routes };