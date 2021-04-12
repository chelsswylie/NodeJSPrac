const express = require("express");
const router = express.Router();

const recipes = require("./../Data/recipes");

// handle incoming request to /users
router.get("/", (req, res, next) => {
  res.status(200).json({
    recipes: recipes,
  });
});

module.exports = router;
