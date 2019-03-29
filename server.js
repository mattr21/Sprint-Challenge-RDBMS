const express = require('express');
const server = express();
const helmet = require('helmet');
// const [name]Router = require('[insert file path to router]');
// const [name]Router = require('[insert file path to router]');

server.use(express.json());
server.use(helmet());
// server.use('[api base endpoint path]', [name]Router);
// server.use('[api base endpoint path]', [name]Router);

module.exports = server;