const express  = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const { routes } = require('./api/routes/routes');

const corsOptions = {
  'origin': 'http://localhost:3000',
  'methods': 'GET, HEAD, PUT, PATCH, POST, DELETE',
  'preflightContinue': true,
  'optionsSuccessStatus': 204,
  'credentials': true // enable set cookie
};

const port = process.env.PORT || '3000';

app.set('port', port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
routes(app);

const server = http.createServer(app);



server.listen(port, () => console.log(`Running on path: ${port}`));
