const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

const server = http.createServer(app);

//routing here

app.use(express.static(path.join(__dirname, '../client/')));

app.get('/', function(req, res){
  console.log(req);
})


app.listen(3000, () => {
  console.log('listening at http://localhost:3000');
});
