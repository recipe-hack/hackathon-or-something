const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const { routes } = require('./api/routes/routes');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: true,
  optionsSuccessStatus: 204,
  credentials: true // enable set cookie
};

// const port = process.env.PORT || '5000';

app.set('port', port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'frontend/public')));
routes(app);

// const server = http.createServer(app);

// server.listen(port, () => console.log(`Running on path: ${port}`));
app.listen(process.env.PORT || 5000);
