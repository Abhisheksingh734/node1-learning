var express = require("express");
var router = express.Router();
const userModel = require("./users");

router.get("/", function (req, res) {
  res.render("index");
});

//create user---------------------------------------------------------------
// router.get("/create", async function (req, res) {
//   const createdUser = await userModel.create({
//     username: "asr",
//     age: 20,
//     name: "Abhishek",
//   });

//   res.send(createdUser);
// });

//find user-----------------------------------------------------------------------
// router.get("/alluser", async function (req, res) {
//   const userData = await userModel.find({ username: "asr" });

//   res.send(userData);
// });

// delete user-----------------------------------------------------------------------------------

// router.get("/delete", async function (req, res) {
//   const deletedUser = await userModel.findOneAndDelete({
//     username: "asr",
//   });

//   res.send(deletedUser);
// });

router.get("/adult", function (req, res) {
  req.session.ban = true;
  res.send("you got banned :(");
});

router.get("/checkban", function (req, res) {
  if (req.session.ban === true) {
    console.log(req.session);
    res.send(`Oops! you are banned :p`);
  } else {
    console.log(req.session);
    res.send("You are not banned");
  }
});

router.get("/removeban", function (req, res) {
  if (req.session.ban === true) {
    req.session.destroy(function (err) {
      if (err) throw err;
      res.send("Your ban got removed! ;)");
    });
  } else {
    res.send("You were not banned");
  }
});

module.exports = router;
