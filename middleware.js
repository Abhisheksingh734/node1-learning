// before hitting any route ur middleware runs

//you can make it do anything in between that routing

const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("middleware 2 runs");
  next();
});

app.use(function (req, res, next) {
  console.log("middleware 2 runs");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.get("/profile", function (req, res) {
  res.send("This is profile");
});

app.listen(3001);
