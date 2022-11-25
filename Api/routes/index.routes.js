const express = require("express");
const router = express.Router();

router.use("/users", require("./getuser"));
router.use("/users", require("./getAllusers"));
router.use("/add", require("./adduser"));
router.use("/delete", require("./deleteuser"));

// const getuser = require("./getuser");
// const getAllusers = require("./getAllusers");
// const adduser = require("./adduser");
// const deleteuser = require("./deleteuser");

// router.use("/users/:id", getuser);
// router.use("/users/", getAllusers);
// router.use("/add/:id", adduser);
// router.use("/delete/:id", deleteuser);

module.exports = router;
