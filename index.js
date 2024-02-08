// Imports
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const logger = require("./logs/logger");
const router = require("./routes/router");

// Setup
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(logger);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "key",
    saveUninitialized: true,
    resave: false,
  })
);

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

app.use("", router);

// Template engine
app.set("view engine", "ejs");

// Database
mongoose.connect(process.env.DB_URI);
mongoose.connection.on("error", (err) => {
  console.log(`db err: ${err}`);
});
mongoose.connection.once("open", () => {
  console.log(`Database connected successfully!`);
});
mongoose.connection.on("disconnected", () => {
  console.log(`Database was disconnected!`);
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Console
app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT} successfully!`);
});
