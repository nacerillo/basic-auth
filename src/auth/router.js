const express = require("express");
const router = express.Router();
const basicAuth = require("./middleware/basic.js");
const Users = require("./models/user");
const bcrypt = require("bcrypt");
router.post("/signin", basicAuth, async (req, res) => {
  try {
    //const user = await Users.findOne({ username: username });
    // const valid = await bcrypt.compare(password, user.password);
    if (req.user) {
      res.status(200).json(req.user);
    } else {
      throw new Error("Invalid User");
    }
  } catch (error) {
    res.status(403).send("Invalid Login");
  }
});

router.post("/signup", async (req, res) => {
  try {
    console.log("REQ.BODY.PASSWORD");
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new Users(req.body);
    console.log("USER: ", user);
    const record = await user.save(req.body);
    res.status(201).json(record);
  } catch (e) {
    res.status(403).send("Error Creating User", record);
  }
});
module.exports = router;
