"use strict";
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const server = http.createServer(app);
const userController = require('./controllers/userController');

//routing here

app.use(express.static(path.join(__dirname, '../client/')));
app.use(bodyParser());

app.post('/signup', function(req, res) {
    userController.findOne({where: {un: req.body.un}})
    .then(function(user){
      if(!user) {
        console.log("Creating new user...")
        userController.create(req.body);
        res.send("Success");
      }
      else {
        console.log("Found existing user...")
        res.send("Failure");
      }
    });



});

app.post('/login', function(req, res) {
  userController.findOne({where: {un: req.body.un}})
  .then(function(user){
    if(!user || req.body.pw !== user.pw) {
      console.log("Login attempt unsuccessful...")
      res.send("Failure");
    }
    else {
      res.send("Success");
    }
  });

})


app.listen(3000, () => {
  console.log('listening at http://localhost:3000');
});
