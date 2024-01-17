var express = require("express");
var router = express.Router();
const userModel = require("./users");

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/create", async function (req, res) {
  const createdUser = await userModel.create({
    username: "asr",
    age: 20,
    name: "Abhishek",
  });

  res.send(createdUser);
});

module.exports = router;
