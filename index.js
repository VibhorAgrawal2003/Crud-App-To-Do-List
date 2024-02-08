// imports
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const logger = require("./logs/logger");

// setup
const app = express();
const PORT = process.env.PORT || 5000;
app.use(logger);

// database
mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(`db err: ${err}`);
});
db.once("open", () => {
  console.log(`Database connected successfully!`);
});

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// console
app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT} successfully!`);
});
