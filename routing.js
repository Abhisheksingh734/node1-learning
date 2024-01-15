//express framework for node.js
//express ka usecase => routing

// https://www.google.com/api/v1/user/login

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/profile", (req, res) => {
  res.send("Profile");
});

app.listen(3030);
