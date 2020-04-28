const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticator.js');
const authRouter = require('../auth/auth-router.js');
const blogRouter = require('../blogs/blog-router.js');
const userRouter = require('../users/user-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/blogs', authenticate, blogRouter);
server.use('/api/users', authenticate, userRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Expat Journal - Backend' });
});
module.exports = server;