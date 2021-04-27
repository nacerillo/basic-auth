"use strict";
module.exports = (req, res, next) => {
  res.status(500).send("500 MSG: something broke");
};
