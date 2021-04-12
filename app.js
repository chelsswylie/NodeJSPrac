//import express
const express = require("express");
const app = express();

// import morgan package
const morgan = require("morgan");
// This package helps to show the method in use, response-time and the status^^
// We are going to parse incoming request bodies in a middleware before handlers

//use it
app.use(morgan("dev"));
// Routes which should handle request

// import body-parser
const bodyParser = require("body-parser");
// let's use it
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// defining routes
const recipesRoutes = require("./Routes/recipes");
app.use("/recipes", recipesRoutes);

// CORS below
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

module.exports = app;
