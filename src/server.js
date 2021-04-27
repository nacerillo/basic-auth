const express = require("express");
const app = express();
const userRoutes = require("./auth/router");
const notFound = require("../middleware/404.js");
const errors = require("../middleware/500.js");
app.use(express.json());
app.use(userRoutes);
app.use(notFound);
app.use(errors);
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`server up: ${port}`));
  },
};
