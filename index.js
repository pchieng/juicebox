const { PORT = 3000 } = process.env;
const express = require('express');
const server = express();
const apiRouter = require('./api');

const morgan = require('morgan');
server.use(morgan('dev'));

server.use(express.json())

const { client } = require('./db');
client.connect();


server.use('/api', apiRouter);

server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
});



