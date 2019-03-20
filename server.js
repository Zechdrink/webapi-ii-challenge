const express = require('express');

const postRouter = require('./data/post-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => 
   { res.send(`<h2> IM MAD AT LIFE </h2>`)}
)
    

server.use('/api/posts', postRouter);


module.exports = server;
