const Users = require("../models/user");
const bcrypt = require("bcrypt");
const base64 = require("base-64");

const basic = async (req, res, next) => {
  let basicHeaderParts = req.headers.authorization.split(" "); // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop(); // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(":");

  const user = await Users.findOne({ username: username });
  const valid = await bcrypt.compare(password, user.password);
  if (valid) {
    req.user = user;
  } else {
    next("Invalid User");
  }
  next();
};
module.exports = basic;
