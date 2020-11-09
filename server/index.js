const express = require('express');

const server = express();

server.get('/', (req, res) => res.send('hi'));

server.listen(5000, () => {
    console.log('server started');
});