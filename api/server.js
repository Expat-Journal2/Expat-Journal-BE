const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticator.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.send('<h4>Expat Journal: Backend</h4>');
});

module.exports = server;