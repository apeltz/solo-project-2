const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);

//routing here

server.listen(3000, () => {
  console.log('listening at http://localhost:3000');
});
