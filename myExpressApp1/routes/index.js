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

module.exports = router;
