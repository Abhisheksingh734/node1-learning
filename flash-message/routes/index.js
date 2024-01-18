var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/user", async function (req, res) {
  const userData = await userModel.create({
    username: "abhiiiii",
    name: "Abhiiiii",
    description: "sassy",
    age: 20,
    categories: ["science", "design", "fun"],
  });

  res.send("user created!");
});

router.get("/finduser", async function (req, res) {
  const regexName = RegExp("^Abhi$", "i");
  const userData = await userModel.find({
    username: regexName,
  });

  res.send(userData);
});

module.exports = router;
