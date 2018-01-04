const express  = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on path: ${port}`));
