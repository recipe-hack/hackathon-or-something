const express  = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const { routes } = require('./api/routes/routes');

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

routes(app);

server.listen(port, () => console.log(`Running on path: ${port}`));
