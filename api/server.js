const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const authenticate = require('');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h2>Expat Journal: Backend</h2>');
});

module.exports = server;