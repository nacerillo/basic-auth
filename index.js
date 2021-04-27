const mongoose = require("mongoose");
const server = require("./src/server.js");
const dotenv = require("dotenv");
dotenv.config();

const MONGODB_URI = "mongodb://localhost:27017/auth";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGODB_URI, options)
  .then(() => {
    server.start(PORT);
  })
  .catch((e) => console.error("Could not start server", e.message));
